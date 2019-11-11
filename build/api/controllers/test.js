"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../db"));

var testController = {};

testController.test = function (req, res) {
  var query = 'SELECT * FROM users';
  /* 'CREATE TABLE test ( "userId" bigint NOT NULL, "firstName" character varying(30) COLLATE  pg_catalog."default" NOT NULL, "lastName" character varying COLLATE pg_catalog."default" NOT NULL, email character varying COLLATE  pg_catalog."default" NOT NULL, address character varying COLLATE pg_catalog."default" NOT NULL, password character varying COLLATE  pg_catalog."default" NOT NULL, gender character varying COLLATE  pg_catalog."default" NOT NULL, "jobRole" character varying COLLATE pg_catalog."default" NOT NULL, department character varying COLLATE pg_catalog."default" NOT NULL, "isAdmin" boolean NOT NULL, "isNewAccount" boolean NOT NULL DEFAULT true, CONSTRAINT test_pkey PRIMARY KEY ("userId"))'
  		/*{
  		name: "create-user",
  	text: "INSERT INTO users(\"userId\", \"firstName\", \"lastName\", \"email\", \"address\", \"password\", \"gender\", \"jobRole\", \"department\", \"isAdmin\", \"isNewAccount\") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
  	values: [userId, firstName, lastName, email, address, hash, gender, jobRole, department, isAdmin, true]
  } */

  _db["default"].query(query).then(function () {
    res.status(200).json({
      status: "success"
    });
  })["catch"](function (error) {
    console.log("error:: :::");
    console.log(error);
    res.status(500).json({
      status: "error",
      error: "Internal server error "
    });
  });
};

var _default = testController;
exports["default"] = _default;
//# sourceMappingURL=test.js.map