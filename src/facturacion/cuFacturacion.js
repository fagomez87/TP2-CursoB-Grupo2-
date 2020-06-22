import fs from 'fs'
import PdfCreator from '../pdf/pdfCreator.js'
import Gmailer from '../mail/GMailer.js'


//DATOS DEL PDF
const invoicesTemplate = fs.readFileSync('/Users/nortola/ORT/20201C/THP2/TP-final/TP2-CursoB-Grupo2-/src/static/invoiceTemplate.html','utf8')
const invoicePdf = './Factura.pdf'

class CUFacturacion {
    constructor (daoObject,mailObject){

        if(this.confirmarPago(daoObject)){
            //ESTE ES EL PDF CREADO SI NO FALLO
            this.pdfCreator = new PdfCreator(invoicesTemplate,daoObject,null,invoicePdf)

            this.datosMail = this.armarDatosMail(mailObject) 

        } else {
            throw new Error("Error al confirmar el pago: Pago no registrado")
        }   
    }

    confirmarPago(daoObject){
        let pago=daoObject.importe
        let result=false
        if(pago>0){
            result=true
        }
        return result
    }

    armarDatosMail(dato) {
        let mail = {
            to: dato,
            subject: 'PruebaConCambios1',
            text: 'Envío correcto de mail',
            html: "<h1>Factura</h1><br>Saludos cordiales<br>",
            files: [invoicePdf]
        }
        return mail;
    }

    async run() {

        try {
            await this.pdfCreator.build() 
        } catch(err) {
            throw new Error("Falla al crear el pdf")
        }

        try {
            const mail = new Gmailer()
            await mail.sendMail(this.datosMail)
        } catch(err) {
            throw new Error("Error al enviar el mail")
        } 
    }
}

export default CUFacturacion