var mongoose = require ("mongoose");
var employeeSchema = mongoose.Schema({

fname:{
type: String ,
required :true
},

lname:{
type: String ,
required :true
},
email:{
type: String ,
required :true
},
mob:{
type: String ,
required :true
},
city:{
type: String ,
required :true
},
pincode:{
type: String ,
required :true
}


})




var Employee = module.exports = mongoose.model("employee" ,employeeSchema ,"employee" )

//getting the data
module.exports.getEmployee = function(callback){
	return Employee.find(callback)
}

//putting the data
module.exports.createEmployee = function(employeeObj , callback){
return Employee.create(employeeObj,callback)	
}

//edit the data
module.exports.editEmployee =function(id,employeeObj,callback){
	return Employee.update({_id :id},
		                    {$set : {
                                  fname : employeeObj.fname,
                                  lname : employeeObj.lname,
                                  email : employeeObj.email,
                                  mob : employeeObj.mob,
                                  city : employeeObj.city,
                                  pincode : employeeObj.pincode

		                    }},callback)
}

//delete the data
module.exports.deleteEmployee =function(id , callback){
	return Employee.remove({_id:id},callback)
}


module.exports.getEmployeeById = function(userId,callback){
return Employee.findById({_id:userId},callback)
}