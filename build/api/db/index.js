"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pg = require("pg");

var connectionString = "postgressql://postgres:root@localhost:5432/teamwork";
var pool = new _pg.Pool({
  connectionString: connectionString
}); // the pool will emit an error on behalf of any idle clients it contains
// if a backend error or network partition happens

pool.on("error", function (err) {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

var queryAll = function queryAll(queryString) {
  return new Promise(function (resolve, reject) {
    pool.connect(function (err, client, done) {
      if (err) {
        reject({
          error: "QueryError" + err.stack
        });
      }

      client.query(queryString, function (err, result) {
        //call `done()` to release the client back to the pool
        done();

        if (err) {
          reject({
            error: "QueryError" + err.stack
          });
        }

        resolve(result.rows);
      });
    });
  });
};

var queryWhere = function queryWhere(query) {
  return new Promise(function (resolve, reject) {
    pool.connect(function (err, client, done) {
      if (err) {
        reject({
          error: "QueryError" + err.stack
        });
      }

      client.query(query, function (err, result) {
        done();

        if (err) {
          reject({
            error: "QueryError" + err.stack
          });
        }

        resolve(result.rows);
      });
    });
  });
};

var _default = {
  queryAll: queryAll,
  queryWhere: queryWhere
};
exports["default"] = _default;
//# sourceMappingURL=index.js.map