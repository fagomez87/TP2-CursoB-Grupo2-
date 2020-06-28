import fs from 'fs'
import PdfCreator from '../pdf/pdfCreator.js'
import Gmailer from '../mail/GMailer.js'
import path from 'path';

const __dirname = path.resolve();


//DATOS DEL PDF
const invoicesTemplate = fs.readFileSync(__dirname + '/src/static/invoiceTemplate.html','utf8')
const invoicePdf = __dirname + '/factura.pdf'

class CUFacturacion {
    constructor (daoObject) {

        if(daoObject === undefined) throw Error("Cliente inexistente")

        this.daoObject = daoObject
        
    }

    async run(cuil) {  
        console.log(__dirname + '/src/static/invoiceTemplate.html')
        let comprador = await this.daoObject.getByCuil(cuil) 
        if (this.confirmarPago(comprador)){
                //ESTE ES EL PDF CREADO SI NO FALLO
            this.pdfCreator = new PdfCreator(invoicesTemplate,comprador,null,invoicePdf)
            this.datosMail = this.armarDatosMail(comprador.mail)         
        } else {
            throw new Error("Error al confirmar el pago: Pago no registrado")
        }
        try {
            await this.pdfCreator.build() 
        } catch(err) {
            throw new Error("Falla al crear el pdf")
        }

        try {
            const mail = new Gmailer()
            await mail.sendMail(this.datosMail)
        } catch(err) {
            throw new Error("Error al enviar el mail " + err)
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
    
}

export default CUFacturacion