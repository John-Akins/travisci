const { Pool } = require("pg")
const connectionString = (process.env.DB === undefined) ? "postgressql://postgres:root@localhost:5432/teamwork" : process.env.DB

const pool = new Pool({connectionString : connectionString})
// the pool will emit an error on behalf of any idle clients it contains
// if a backend error or network partition happens
pool.on("error", (err) => {
	console.error("Unexpected error on idle client", err)
	process.exit(-1)
})

exports.queryAll = (queryString) =>  {
	return new Promise((resolve, reject) => {
		pool.connect((err, client, done) => {
			if(err)
			{
				reject({
					error: "QueryError" + err.stack
				})
			}				
			client.query(queryString, (err,result) => {
			//call `done()` to release the client back to the pool
				done()
				if(err)
				{
					reject({
						error: "QueryError" + err.stack
					})
				}
				resolve(result.rows)
			})
		})
	})
}

exports.queryWhere = (query) =>  {
	return new Promise((resolve, reject) => {
		pool.connect((err, client, done) => {
			if(err)
			{
				reject({
					error: "QueryError" + err.stack
				})
			}
			client.query(query, (err,result) => {
				done()
				if(err)
				{
					reject({
						error: "QueryError" + err.stack
					})
				}
				resolve(result.rows)
			})
		})
	})
}