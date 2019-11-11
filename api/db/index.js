import { Pool } from 'pg'
import configJson from '../config/config';


const env = (! typeof process.env.NODE_ENV === undefined) ? 'development' : process.env.NODE_ENV.trim()

const { database, username, password, host } = configJson[env]

const connectionString = `postgressql://${username}:${password}@${host}:5432/${database}`

const pool = new Pool({connectionString : connectionString})

// the pool will emit an error on behalf of any idle clients it contains
// if a backend error or network partition happens

pool.on('error', (err) => {
	console.error('Unexpected error on idle client', err)
	process.exit(-1)
})

const db = {}

db.query = (queryString) =>  {
	return new Promise((resolve, reject) => {
		pool.connect((err, client, done) => {
			if(err)
			{
				reject({
					error: 'QueryError' + err.stack
				})
			}				
			client.query(queryString, (err,result) => {
			//call `done()` to release the client back to the pool
				done()
				if(err)
				{
					reject({
						error: 'QueryError' + err.stack
					})
				}
				resolve(result)
			})
		})
	})
}

db.queryAll = (queryString) =>  {
	return new Promise((resolve, reject) => {
		pool.connect((err, client, done) => {
			if(err)
			{
				reject({
					error: 'QueryError' + err.stack
				})
			}				
			client.query(queryString, (err,result) => {
			//call `done()` to release the client back to the pool
				done()
				if(err)
				{
					reject({
						error: 'QueryError' + err.stack
					})
				}
				resolve(result.rows)
			})
		})
	})
}

db.queryWhere = (query) =>  {
	return new Promise((resolve, reject) => {
		pool.connect((err, client, done) => {
			if(err)
			{
				reject({
					error: 'QueryError' + err.stack
				})
			}
			client.query(query, (err,result) => {
				done()
				if(err)
				{
					reject({
						error: 'QueryError' + err.stack
					})
				}
				resolve(result.rows)
			})
		})
	})
}

export default db