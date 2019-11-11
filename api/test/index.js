const chai = require('chai')
require('chai/register-should')
const dbMigration = require('../migrations')
/**
 import chai from 'chai'
import 'chai/register-should'
import dbMigration from '../migrations'
 */

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


