import db from "../db"
const testController = {}
	testController.test = (req, res) => {

							const query = 'SELECT * FROM users'
							db.query(query)
								.then(() => {
									res.status(200).json({
										status : "success"
									})		
								})
								.catch((error) => {
									console.log("error:: :::")
									console.log(error)
									res.status(500).json({
										status: "error",
										error: "Internal server error "
									})	
								})		
				}

export default testController