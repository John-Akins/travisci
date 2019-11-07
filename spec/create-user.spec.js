const Request = require("request")
const server = require("../src/app")

describe("admin create employee", () => {
	describe("input existing email", () => {
		const data = {}
		beforeAll((done) => {
			Request.post({
				url: "http://localhost:8080/api/v1/auth/create-user",
				method: "POST",
				headers: {
					"content-type": "Application/JSON",
					"Authorization": "token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMDAwMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MzEzMzg3NSwiZXhwIjoxNTczMjIwMjc1fQ.Mt5lG-NmhZz3j-53C4vnLqz7ANtstK09cU1PL_D9lhE"
				},
				body: {
					firstName: "akins",
					lastName: "akin",
					email: "turan@gmail.com",
					address: "akins street", 
					password: "dfjdskjfsk",
					gender: "male",
					jobRole: "Engineer",
					department: "IT",
					isAdmin: true
				},
				json: true
			}, 
			(error, response, body) => {
				data.status = response.statusCode
				data.body = body
				done()
			})
		})
		it("should return 402 status code", () => {
			expect(data.status).toBe(402)
		})
		it("should return relevant error message", () => {
			expect(data.body.error).toBe("this email already exists")
		})
	})
	describe("empty field(s)/ wrong input format", () => {
		const data = {}
		beforeAll((done) => {
			Request.post({
				url: "http://localhost:8080/api/v1/auth/create-user",
				method: "POST",
				headers: {
					"content-type": "Application/JSON",
					"Authorization": "token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMDAwMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MzEzMzg3NSwiZXhwIjoxNTczMjIwMjc1fQ.Mt5lG-NmhZz3j-53C4vnLqz7ANtstK09cU1PL_D9lhE"
				},
				body: {
					firstName: "",
					lastName: "",
					email: "",
					address: "", 
					password: "",
					gender: "",
					jobRole: "",
					department: "",
					isAdmin: false
				},
				json: true
			}, 
			(error, response, body) => {
				data.status = response.statusCode
				data.body = body
				data.response = response
				done()
			})
		})
		it("should return 422 status code", () => {
			expect(data.status).toBe(422)
		})
	})
	describe("user is not an admin", () => {
		const data = {}
		beforeAll((done) => {
			Request.post({
				url: "http://localhost:8080/api/v1/auth/create-user",
				method: "POST",
				headers: {
					"content-type": "Application/JSON",
					"Authorization": "token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMDAwMiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NzMxMzM5MzUsImV4cCI6MTU3MzIyMDMzNX0.RjsCdo1T2bk_n1YJwP5MVT6o3yJgVX88yeDQjkPnFKA"
				},
				body: {
					firstName: "sola",
					lastName: "akin",
					email: "akins@gmail.com",
					address: "akins street", 
					password: "dfjdskjfsk",
					gender: "male",
					jobRole: "Engineer",
					department: "IT",
					isAdmin: false,
				},
				json: true
			}, 
			(error, response, body) => {
				data.status = response.statusCode
				data.body = body
				data.response = response
				done()
			})
		})
		it("should return 401 status code", () => {
			expect(data.status).toBe(401)
		})
		it("should return error relevant message", () => {
			expect(data.body.error).toBe("Elevated access rights required")
		})
	})
})