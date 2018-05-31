var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dbase = mongoose.createConnection("mongodb://localhost/");
var bcrypt = require('bcrypt');
//const db = dbase.useDb('local')
const db = dbase.useDb('todoapp')
//mongoose.connect('mongodb://localhost/local');

// create a schema
var UserSchema = new Schema({
    emailId: String,
    username: String,
    password: String,
    //  token: String,
    //   timestamp : Number
});
var TokenSchema = new Schema({
    uId: String,
    token: String,
    timestamp: Number
});
notesTableSchema = new Schema({

    // id of the owner
    uId: String,
    title: String,
    date: Date,
    isDeleted: Boolean,
    //collaborators of the note
    sharedWith: Array

});
contentTableSchema = new Schema({

    // the id of the note it is present in
    notesID: String,
    content: String,
    isChecked: Boolean

});
/* the schema is useless so far we need to create a model using it*/
var User = db.model('User', UserSchema);
var Token = db.model('Token', TokenSchema);
var notesTable = db.model('notesTable', notesTableSchema);
var contentTable = db.model('contentTable', contentTableSchema);
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
exports.newUser = function (userdata) {
    //return the promise object
    return User(userdata);//passes the userdata to user model
}
//insert new token into the database -. sign up functionality
exports.newToken = function (tokendata) {
    //return the promise object
    return Token(tokendata);//passes the token data to user model
}
// search for the user in the database -> login functionality
exports.loginUser = function (email, password) {

    return userdata.findOne({ emailId: email, password: password }, function (err, obj) {
        if (err) throw err;
        console.log(obj);
    })
}
//generating a hash
exports.hashpass = function (password, saltRounds) {
    var hash = bcrypt.hashSync(password, saltRounds);
    //console.log(hash);
    return hash;
}
// checking if password is valid when user login
exports.validPassword = function (password, dbPassword) {

    return bcrypt.compareSync(password, dbPassword);
};
//  module.exports =User;
/*search of the user on the basis of email from the database for Login*/
exports.checkUserEmail = function (emailId) {
    return User.findOne({ emailId: emailId })
}
/*based on userId GET TOKEN OBJECT FROM THE COLLECTION */
exports.checkuId = function (uId) {
    return Token.findOne({ uId: uId })
}

/* insert a new note title into the notesCollection  collection*/
exports.insertTitle = function (userTableId, noteTitle) {
    return notesTable({ uId: userTableId, title: noteTitle, date: new Date(), isDeleted: false }).save()
}
//get notes title for dashboard
exports.getNotesTitle = function (userId) {
    /*returns an array consisting of note titles created by a particular user*/
    return notesTable.find({ uId: userId });
}

/* insert individual contents on the basis of particular notetitle*/
exports.insertNoteContent = function (noteTitleId, individualNotesEntry, checkBoxStatus) {
    return contentTable({ notesID: noteTitleId, content: individualNotesEntry, isChecked: checkBoxStatus }).save()
}


//get the uid which is bound to the token
exports.getUId = function(tokenValue){
    return Token.findOne({ token : tokenValue })
}


//get user data using his '_id'
exports.getUserData = function(userId){
    return User.findOne({ _id : userId })
}

/*-------delete token of particular user when logout-----*/
exports.deleteToken = function(oldtoken,newtoken){
    Token.findOneAndUpdate()
}
//{ username: 'starlord55' }, { username: 'starlord88' }