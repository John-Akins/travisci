"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

require("chai/register-should");

var _app = _interopRequireDefault(require("../app"));

_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect;
describe('test http requests', function () {
  var data = {};
  before(function (done) {
    _chai["default"].request(_app["default"]).post('/api/v1/test/testhttp').set('Accept', 'application/json').send().end(function (error, response) {
      data.status = response.statusCode;
      data.body = response.body;
      done();
    });
  });
  it("should reply with success", function (done) {
    expect(data.status).to.equal(200);
    data.body.should.have.property('status').eql('success');
    done();
  });
});
//# sourceMappingURL=test.js.map