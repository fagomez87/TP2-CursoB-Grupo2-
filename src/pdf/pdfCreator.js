import pdf from 'pdf-creator-node';

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
            await pdf.create(this.document, this.options);
            // PASAR EL PDF A UNA INTERMEDIA QUE TENGA LOS DATOS DE ENVIO DE MAIL // 
        } catch(e) {
            throw new Error("No se pudo crear el PDF")
        }
    }

}

export default PdfCreator;