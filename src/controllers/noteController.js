const notesTable = require('../models/noteModel');
//var tokenChecking= require('../functionality/tokenCheckingmw');

/*Create and Save a new Note----->adding new title ---------------------*/
exports.addNewTitle= (req, res) => {
   // console.log("req of title", req.body);
    console.log("Users coming", res.locals.user._id)
    var user = res.locals.user;
    // Create a Note
    const note = {
        title: req.body.title, 
        uId: user._id,
        date: new Date() 
    };
    // Save Note in the database
        notesTable(note).save()
        .then((doc) => {   //returns the inserted document
            
            console.log("doc", doc);
            res.status(200).send(doc);
        })
        .catch((err)=>{
            res.status(400).send({ error: err, message: "Some Error occured " }); 
        })
   
}

/* Retrieve and return all notes from the database of a specific user  */
exports.getAllTitle= function (req, res) {
    // console.log("req", req.headers);
    console.log("Users coming",res.locals.user._id)
    var user = res.locals.user;
  
        var titleToSend = [];

        notesTable.find({ uId: user._id , deletedAt: { $eq: null} })
            .then((noteTitles) => {
                // if (err) throw err
                //  console.log("notestitleobj",noteTitles)
                /*---array of notetitles objects came so to get specific title map*/
                titleToSend = noteTitles.map((note) => {
                    return { _id: note._id, title: note.title }
                })

                res.status(200).send(titleToSend);

            })
            .catch(()=>{
                res.status(400).send({ error: err, message: "Note not found for user"});
            })
  
}

/*--------------------------- Update a note title--------------------------*/
exports.updateTitle= function (req, res) {
    console.log("reqofupdatetitle", req.body);
    console.log("Users coming", res.locals.user)
    var user = res.locals.user;
        // Find note and update it with the request body
    notesTable.findOneAndUpdate({ _id : req.body.titleId } , { $set : { title: req.body.title } }, { new: true })
        .then((updatedoc) => {
            console.log("doc",updatedoc)
            res.status(200).send(updatedoc);
        })
        .catch(()=>{
         res.status(400).send({error: err, message:"Error updating note" });
        })
}


/*---------------------------deleting the title---------------------------------------------------*/
exports.deleteTitle= function (req, res) {
    // console.log("dddd")
     console.log("reqofdeleteetitle", req.params);
    console.log("Users coming", res.locals.user)
     var user = res.locals.user;
     var titlesToSend = []

        notesTable.findOneAndUpdate({ _id : req.params.id},{ $set : {deletedAt : Date.now()} }, {new : true} )
        .then((deleteTitle, err) => {
             console.log("doc",deleteTitle);
             notesTable.find({ uId:deleteTitle.uId , deletedAt: { $eq: null} })
             .then((NoteTitles, err) => {
                 // console.log("content", NoteContents)
                 titlesToSend = NoteTitles.map((note) => {
                   return { _id: note._id, title: note.title ,deletedAt:note.deletedAt}
                  //return note
                })
                 res.status(200).send(titlesToSend);
             })
            // res.status(200).send({message:"successfully deleted"});*/
      })
   
 
 }
/*----------------get contents basedon titleid of particular note-------------------*/
/*app.get('/getnotecontent/:id', tokenCheckingMiddleware, function (req, res, next) {
    console.log("req", req.headers);
  console.log("reqnoteconetnt", req.params);
   console.log("Users coming", res.locals.user)
    var user = res.locals.user;
    if (user) {
        var objToSend = {
            note_title : '',
            entries : []
        }
    getSingleTitle(req.params.id).then((notesobj,err) =>{
  
        objToSend.note_title=notesobj.title;

        getAllContentofNote(req.params.id).then((NoteContents, err) => {
           
            NoteContents.map((individualTitleentry, noteContentIdx) => {
                objToSend.entries.push({ id: individualTitleentry._id, content: individualTitleentry.content, isChecked: individualTitleentry.isChecked }
                )
                  console.log("sending : ", individualTitleentry)
            })
            console.log("drftre",objToSend)
            res.status(200).send(objToSend);

        })
        // console.log("drftdfgdse",objToSend)
       // res.status(200).send(objToSend);
    })
  
       
    }
    else {
        console.log("content not deleted")
        res.status(401).send({ error: "not able to get id" });
    }
})*/

