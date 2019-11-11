"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

require("chai/register-should");

var _app = _interopRequireDefault(require("../app"));

_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect;
console.log("Hola");
describe('test http requests', function () {
  console.log("Hola");
  var data = {};
  before(function (done) {
    console.log("Hola");

    _chai["default"].request(_app["default"]).post('/api/v1/test/testhttp').set('Accept', 'application/json').send({
      greeting: "Hola"
    }).end(function (error, response) {
      console.log("error::::");
      console.log(error);
      console.log("response:::");
      console.log(response.body);
      data.status = response.statusCode;
      data.body = response.body;
      done();
    });
  });
  it("should reply with hiya", function () {
    console.log(data.status);
    expect(data.status).to.equal(200);
    data.body.should.have.property('response').eql('hiya');
  });
});
//# sourceMappingURL=test.js.map