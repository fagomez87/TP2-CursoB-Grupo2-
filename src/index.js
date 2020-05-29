var pdf = require("pdf-creator-node");
var fs = require('fs');
// Read HTML Template
var html = fs.readFileSync('template.html', 'utf8');

//page format for pdf document
var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm"
};

//users that will be listed in the body
var integrantes = [
    {
        name:"Fernando",
        lastname:"Gomez" 
    },
    {
        name:"Nadia",
        lastname:"Brizuela"
    },
    {
        name:"Monica",
        lastname:"Bidart"
    },
    {
        name:"Nicolas",
        lastname:"Ortola"
    }
]

var document = {
    html: html,
    data: {
        integrantes: integrantes
    },
    path: "./output.pdf"
};

console.log(document);
pdf.create(document, options)
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.error(error)
    });