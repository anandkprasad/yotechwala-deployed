var express = require('express');
var bodyParser  = require("body-parser");
var flash = require("connect-flash");
var mongoose = require("mongoose");

var app = express();

// mongoose.connect('mongodb+srv://admin:<password>@cluster0.ap0vjf9.mongodb.net/?retryWrites=true&w=majority', {
//     auth: {
//       username: "admin",
//       password: "admin"
//     },
//     useNewUrlParser:true,
//     useUnifiedTopology: true
//       }).then(
//         () => { 
//             console.log("MongoAtlas Database connected.");
//         },
//         err => { 
//             /** handle initial connection error */ 
//             console.log("Error in database connection. ", err);
//         }
//     );

mongoose.connect('mongodb://localhost/yotechwala-v1', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.use(flash());

var contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    phone: String,
});

var Contact = mongoose.model("Contact", contactSchema);

app.get('/', function(req, res){
   res.render("home.ejs");
})

//contact us

app.post("/contact", function(req, res){
    var details = {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
        phone: req.body.phone
    }

    Contact.create(details, function(err, contact){
        if(err){
            console.log(err);
            res.send("Some error occurred")
        } else {
            res.redirect('/');
        }
    })
});

//remove from production
// app.get("/admin", function(req, res){
//     Contact.find({}, function(err, contact){
//         if(err){
//             console.log(err)
//             res.send("Some error occurred");
//         } else {
//             res.render("admin.ejs", {contact: contact});
//         }
//     })
// });

//projects

app.get("/bizquesta", function(req, res){
    res.render("bizquesta.ejs");
});
app.get("/factforme", function(req, res){
    res.render("factforme.ejs");
});
app.get("/uneverso", function(req, res){
    res.render("uneverso.ejs");
});
app.get("/tailorzx", function(req, res){
    res.render("tailorzx.ejs");
});

app.listen(3000, function(){
    console.log("Yotechwala v1 server started...");
});