import pdf from 'pdf-creator-node';
import Error from '../services/error.js'

const defaultOptions = {
    format: "A3",
    orientation: "portrait",
    border: "10mm"
}

const defaultPath = './Factura.pdf'

class PdfCreator {

    constructor(html, data, options, path=defaultPath) {
                
        if (options == null || options == {} || options == '') {
            this.options=defaultOptions
        }

        this.document = {
            html: html,
            data: data,
            path: path
        }
    }
    
    async build() {
        try {
            validate(this.document)
            await pdf.create(this.document, this.options);
        } catch(e) {
            throw Error(500, "No se pudo crear el PDF")
        }
    }

}

function validate(document) {
    validateHtml(document.html)
    validateData(document.data)
    validatePath(document.path)
}


function validateHtml(html) {
    if ( html == null || html == '' ) {
        throw Error(400, "El formato de la factura está vacío",2049)
    }
}

function validateData(jsonData) {
    if ( jsonData == null || jsonData == {} ) {
        throw Error(400, "Los datos de la factura no pueden estar vacíos",2050)
    }
}

function validatePath(path) {
    if ( path == null || path == '') {
        throw Error(400, "La ruta de destino de la factura no puede estar vacía",2051)
    }
}

export default PdfCreator;