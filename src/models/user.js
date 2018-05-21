var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dbase = mongoose.createConnection("mongodb://localhost/")
const db = dbase.useDb('local')

//mongoose.connect('mongodb://localhost/local');

// create a schema
var UserSchema = new Schema({
    emailId: String,
    username: String,
    password: String,
    key: String
});
// the schema is useless so far
// we need to create a model using it
var User = db.model('User', UserSchema);

/*var u = new User({
    username: "sree",
    name: "SreeraG",
    emailId: 'sree@abc.com',
    // 'password' will be hashed
    password: 'def',
})

u.save(function(err,doc){
    if(err) throw err

    console.log("INSERT SUCCESSFUL!!")
    console.log("doc : ", doc)

})*/
//insert new users into the database -. sign up functionality
exports.newUser = function(userdata){
    //return the promise object
    return User(userdata);//passes the userdata to user model
}
// search for the user in the database -> login functionality
exports.loginUser = function (email, password) {

    return userdata.findOne({ emailId: email, password: password }, function (err, obj) {
         if (err) throw err;
         console.log(obj);
     })
 }
 
//  module.exports =User;