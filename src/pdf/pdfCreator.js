import pdf from 'pdf-creator-node';

const defaultOptions = {
    format: "A3",
    orientation: "portrait",
    border: "10mm"
}

const defaultPath = "./output.pdf"

class PdfCreator {

    constructor(html, data, options=defaultOptions, path=defaultPath) {
        
        this.options=options

        this.document = {
            html: html,
            data: data,
            path: path
        }

        
    }
    
    build() {
        try {
            pdf.create(this.document, this.options);
            // PASAR EL PDF A UNA INTERMEDIA QUE TENGA LOS DATOS DE ENVIO DE MAIL // 
        } catch(e) {
            throw new Error("No se pudo crear el PDF")
        }
    }

}

export default PdfCreator;