import chai from 'chai'
import chatHttp from 'chai-http'
import 'chai/register-should'
import app from '../app'
import dbMigration from '../migrations/index'

chai.use(chatHttp);
const { expect } = chai;

describe('Database Migrations', () => {
    describe('Schema Migrations', () => {
        const data = {}
        before( (done) => {
            data.response = dbMigration.createTablesIfNotExists()
            done();
        })
    
        it("should reply with true on success", (done) => {
            expect(data.response).to.equal(true)
            done()
        })	
    })
    describe('Fill test data', () => {
        const data = {}
        before( (done) => {
            data.response = dbMigration.fillDummyData()
            done();
        })
        it("should return true on success", (done) => {
            expect(data.response).to.equal(true)
            done()
        })	
    })    
})