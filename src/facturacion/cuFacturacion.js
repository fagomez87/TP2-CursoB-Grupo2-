import fs from 'fs'
import PdfCreator from '../pdf/pdfCreator.js'
import Gmailer from '../mail/GMailer.js'

//DATOS DEL PDF
const invoicesTemplate = fs.readFileSync('/home/fernandogomez/Desktop/ORT/TP2/TP2-CursoB-Grupo2-/src/static/invoiceTemplate.html','utf8')
const invoicePdf = './Factura.pdf'

class CUFacturacion {
    constructor (daoObject,mailObject){
                
        //ESTE ES EL PDF CREADO SI NO FALLO
        this.pdfCreator = new PdfCreator(invoicesTemplate,daoObject,'',invoicePdf)
                
        this.datosMail = armarDatosMail(mailObject)        
    }
    armarDatosMail(datos) {

        const mail = {
            to: datos.to,
            subject: 'PruebaConCambios1',
            text: 'Envío correcto de mail',
            html: "<h1>Factura</h1><br>Saludos cordiales<br>",
            files: [this.invoicePdf]
        }
        
        return mail;
    }

    async cuFacturacion() {
        
        await this.pdfCreator.build()
        let mail = new Gmailer()
        try {
            await mail.sendMail(this.datosMail)

        } catch(Error) {

        }
        
    }
}

export default CUFacturacion