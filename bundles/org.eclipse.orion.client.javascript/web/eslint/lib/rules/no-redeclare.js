/*******************************************************************************
 * @license
 * Copyright (c) 2013 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 *
 * Contributors:
 *	 IBM Corporation - initial API and implementation
 *******************************************************************************/
/*global define module require exports */
(function(root, factory) {
	if(typeof exports === 'object') {
		module.exports = factory(require('../util'), require, exports, module);
	}
	else if(typeof define === 'function' && define.amd) {
		define(['eslint/util', 'require', 'exports', 'module'], factory);
	}
	else {
		var req = function(id) {return root[id];},
			exp = root,
			mod = {exports: exp};
		root.rules.noundef = factory(req, exp, mod);
	}
}(this, function(util, require, exports, module) {
	module.exports = function(context) {
		"use strict";

		function reportRedecl(problemNode, name, relatedNode) {
			context.report(problemNode, "'{{name}}' is already defined.", {name: name});
		}

		function addNamedFunctions(target, scope) {
			scope.variables.forEach(function(variable) {
				variable.defs.some(function(def) {
					if (def.type === "FunctionName") {
						// TODO detect clobber
						var name = def.name.name;
						if (Object.prototype.hasOwnProperty.call(target, name)) {
							// This named function redeclares an upper scope's named function
							reportRedecl(def, name);
						} else {
							target[name] = scope;
						}
						return true;
					}
					return false;
				});
			});
		}

		function checkScope(node) {
			var scope = context.getScope(), upper = scope.upper;

			// Maps {String} -> {Identifier AST Node}
			var namedFunctions = Object.create(null);
			if (upper) {
				// Propagate upper scope's named functions to ours
				util.mixin(namedFunctions, upper._namedFunctions);
			}
//			console.log('named functions for ' + node.type);
//			console.log(Object.keys(namedFunctions));
			addNamedFunctions(namedFunctions, scope);
			scope._namedFunctions = namedFunctions;

			// Check for clobber of named on anemd fi

			scope.variables.forEach(function(variable) {
				// If variable collides with a function name from an upper scope.. that's a redeclaration
				var boundInScope;
				if (node.type !== "Program" && (boundInScope = namedFunctions[variable.name]) && boundInScope !== scope) {
					reportRedecl(variable.defs[0].node, variable.name);
					return; // ?
				}

				// If variable has multiple defs.. you better believe that's a redeclaration
				var defs = variable.defs;
				if (defs.length <= 1) {
					return;
				}
				defs.forEach(function(def, i) {
					if (i >= 1) {
						reportRedecl(def.node, def.name.name);
					}
				});
			});
		}

		return {
			"Program": checkScope,
			"FunctionDeclaration": checkScope,
			"FunctionExpression": checkScope
		};
	};
	return module.exports;
}));
