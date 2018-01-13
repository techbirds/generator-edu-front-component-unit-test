/**
 * Unit Test for <%= component_name %>
 *
 * @author <%= project_author %> <<%= project_author %>@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/<%= component_name %>/component',
    '../util.js',
    './cases.js'
],function (
    u, <%= component_name %>, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - <%= component_name %>',function () {
        // new instance
        describe('new <%= component_name %>',function () {
            it('should be ok to instance <%= component_name %>',function () {
                var inst = new <%= component_name %>();
                expect(inst).to.be.an.instanceof(<%= component_name %>);
            });
        });
        // test for all api
        //ut.runTest(d,'<%= component_name %>',cases);
    });
});
