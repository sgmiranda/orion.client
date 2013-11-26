/*******************************************************************************
 * @license
 * Copyright (c) 2013 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
/*global describe it module require*/

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var assert = require("assert"),
	mocha = require("mocha"),
	eslint = require("../../../lib/eslint");

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

var RULE_ID = "no-redeclare";

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
describe(RULE_ID, function() {
	it("should flag redeclaration in Program", function() {
		var topic = "var a; var a;";

		var config = { rules: {} };
		config.rules[RULE_ID] = 1;

		var messages = eslint.verify(topic, config);
		assert.equal(messages.length, 1);
		assert.equal(messages[0].ruleId, RULE_ID);
		assert.equal(messages[0].message, "'a' is already defined.");
		assert.equal(messages[0].node.type, "VariableDeclarator");
	});
	it("should flag redeclaration in FunctionDeclaration", function() {
		var topic = "function f() { var g, g; }";

		var config = { rules: {} };
		config.rules[RULE_ID] = 1;

		var messages = eslint.verify(topic, config);
		assert.equal(messages.length, 1);
		assert.equal(messages[0].ruleId, RULE_ID);
		assert.equal(messages[0].message, "'g' is already defined.");
		assert.equal(messages[0].node.type, "VariableDeclarator");
	});
	it("should flag redeclaration in FunctionExpression", function() {
		var topic = "var f = function() { var g, g; };";

		var config = { rules: {} };
		config.rules[RULE_ID] = 1;

		var messages = eslint.verify(topic, config);
		assert.equal(messages.length, 1);
		assert.equal(messages[0].ruleId, RULE_ID);
		assert.equal(messages[0].message, "'g' is already defined.");
		assert.equal(messages[0].node.type, "VariableDeclarator");
	});
	it("should flag variable that collides with enclosing named function's name", function() {
		var topic = "function f() { var f; };";

		var config = { rules: {} };
		config.rules[RULE_ID] = 1;

		var messages = eslint.verify(topic, config);
		assert.equal(messages.length, 1);
		assert.equal(messages[0].ruleId, RULE_ID);
		assert.equal(messages[0].message, "'f' is already defined.");
		assert.equal(messages[0].node.type, "VariableDeclarator");
	});
	it("should flag variable that collides with named function's name from upper scope", function() {
		var topic = "function f() { function g() { var f; } }";

		var config = { rules: {} };
		config.rules[RULE_ID] = 1;

		var messages = eslint.verify(topic, config);
		assert.equal(messages.length, 1);
		assert.equal(messages[0].ruleId, RULE_ID);
		assert.equal(messages[0].message, "'f' is already defined.");
		assert.equal(messages[0].node.type, "VariableDeclarator");
	});
	it("should flag named function that collides with named function from upper scope", function() {
		var topic = "function f() { function f() { } }";

		var config = { rules: {} };
		config.rules[RULE_ID] = 1;

		var messages = eslint.verify(topic, config);
		assert.equal(messages.length, 1);
		assert.equal(messages[0].ruleId, RULE_ID);
		assert.equal(messages[0].message, "'f' is already defined.");
		assert.equal(messages[0].node.type, "FunctionDeclaration");
		assert.equal(messages[0].node.range.start, 24); // The 2nd one is considered the culprit
	});
	it("should flag redeclaration of parameter", function() {
		var topic = "function f(a) { var a; }";

		var config = { rules: {} };
		config.rules[RULE_ID] = 1;

		var messages = eslint.verify(topic, config);
		assert.equal(messages.length, 1);
		assert.equal(messages[0].ruleId, RULE_ID);
		assert.equal(messages[0].message, "'a' is already defined.");
		assert.equal(messages[0].node.type, "VariableDeclarator");
	});

	//------------------------------------------------------------------------------
	// Thou shalt nots
	//------------------------------------------------------------------------------
	it("should not flag variable that shadows outer scope variable", function() {
		var topic = "var f, g = function() { var f, g; };";

		var config = { rules: {} };
		config.rules[RULE_ID] = 1;

		var messages = eslint.verify(topic, config);
		assert.equal(messages.length, 0);
	});
	it("should not flag reassignment", function() {
		var topic = "var a = 2; a = 3;";

		var config = { rules: {} };
		config.rules[RULE_ID] = 1;

		var messages = eslint.verify(topic, config);
		assert.equal(messages.length, 0);
	});
});