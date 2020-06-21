import PdfCreator from '../src/pdf/pdfCreator.js'
import fs from 'fs'

function testOK() {
    let html = fs.readFileSync('./src/static/integrantesTemplate.html', 'utf8');
    let data = fs.readFileSync('./src/static/integrantesData.json', 'utf8');
    data = JSON.parse(data);
    
    const name =  "./Factura.pdf"


    const options = {
        format: "Letter",
        orientation: "portrait",
        border: "10mm"
    }
    let failed = false;
    let description = "Test envio de pdf: "

    try {
        const create = new PdfCreator(html, data, options, name);
        create.build();
        description += name +" creado ok"
    } catch(e) {
        failed = true;
        description += "error al crear el archivo pdf"
    }
    
    return { failed, description }
}

function mainPdf() {

    const tests = [
        testOK
    ]


    for(const test of tests) {
        const result = test();
        console.log(result)
    }
    
}


mainPdf()