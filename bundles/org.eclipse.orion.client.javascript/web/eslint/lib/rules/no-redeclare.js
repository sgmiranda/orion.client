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
		module.exports = factory(require, exports, module);
	}
	else if(typeof define === 'function' && define.amd) {
		define(['require', 'exports', 'module'], factory);
	}
	else {
		var req = function(id) {return root[id];},
			exp = root,
			mod = {exports: exp};
		root.rules.noundef = factory(req, exp, mod);
	}
}(this, function(require, exports, module) {
	module.exports = function(context) {
		"use strict";

		function checkScope(node) {
			var scope = context.getScope();
			var functionName;
			if (node.type === "FunctionDeclaration" || node.type === "FunctionExpression") {
				functionName = node.id && node.id.name;
			}
			scope.variables.forEach(function(variable) {
				// TODO This check is inadequate for deep scopes
//				if (functionName && variable.name === functionName) {
////					context.report(variable.defs[variable.defs.length - 1].node, "'{{name}}' is already defined.", {name: functionName});
//				}
				var defs = variable.defs;
				if (defs.length <= 1) {
					return;
				}
				defs.forEach(function(def, i) {
					if (i >= 1) {
						context.report(def.node, "'{{name}}' is already defined.", {name: def.name.name});
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
