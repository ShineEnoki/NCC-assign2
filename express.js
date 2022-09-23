const express = require('express');
const app = express();

// localhost:3000
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
});

// localhost:3000/about
app.get("/about", (req,res) => {
    res.sendFile(__dirname + "/about.html")
})

// localhost:3000/project
app.get("/project", (req,res) => {
    res.sendFile(__dirname + "/project.html");
})

    // localhost:3000/project/ADB
    app.get("/project/ADB", (req,res) => {
        res.sendFile(__dirname + "/adb.html");
    })

    // localhost:3000/project/port
    app.get("/project/port", (req,res) => {
        res.sendFile(__dirname + "/portfo.html");
    })

app.get("/expnote", (req,res) => {
    res.sendFile(__dirname + "/expnote.html");
})

app.get("/conclusion", (req,res) => {
    res.sendFile(__dirname + "/conclusion.html");
})

app.listen(3000, () => {
    console.log("Server is starting at port:3000");
})

