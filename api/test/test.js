const chai = require('chai')
require('chai/register-should')
const chatHttp = require('chai-http')
const app = require('../app')
/**
import chai from 'chai'
import chatHttp from 'chai-http'
import 'chai/register-should'
import app from '../app'
 */

chai.use(chatHttp);
const { expect } = chai;

describe('test http requests', () => {
	const data = {}
	before((done) => {
		chai.request(app)
			.post('/api/v1/test/testhttp')
			.set('Accept', 'application/json')
			.send()
			.end((error, response) => {
				data.status = response.statusCode
				data.body = response.body
				done();
			});
	})

	it("should reply with success", (done) => {
		expect(data.status).to.equal(200)
		data.body.should.have.property('status')
									.eql('success')
		done()
	})
})