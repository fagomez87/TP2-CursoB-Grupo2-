var pdf = require("pdf-creator-node");
var fs = require('fs');
// lectura del template html
var html = fs.readFileSync('template.html', 'utf8');

// formateo de pagina del pdf
var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm"
};

// esto es lo que se va a escribir en el pdf
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

// documento que se usa en el create
var document = {
    html: html,
    data: {
        integrantes: integrantes
    },
    path: "./output.pdf"
};

console.log("Documento creado correctamente");
pdf.create(document, options)
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.error(error)
    });