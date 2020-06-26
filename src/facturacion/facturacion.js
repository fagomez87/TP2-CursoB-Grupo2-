// import PdfCreator from '../pdf/pdfCreator.js'
// import Gmailer from '../mail/GMailer.js'
// import DaoFactory from '../dao/daoFactory.js'
// import fs from 'fs'

// const invoicesTemplate = fs.readFileSync('/home/fernandogomez/Desktop/ORT/TP2/TP2-CursoB-Grupo2-/src/static/invoiceTemplate.html','utf8')

// const date = new Date()
// const invoicePdf = './Factura.pdf'


// const invoiceDao = DaoFactory.getInvoicesDao();

// async function sendInvoice(){

//     let daoObject = await invoiceDao.getByCuil("15285439875")

//     let pdf = new PdfCreator(invoicesTemplate,daoObject,'',invoicePdf)

//     pdf.build()

//     const datosMails = {
//         to: 'fernandogomez87@gmail.com',
//         subject: 'PruebaConCambios1',
//         text: 'Envío correcto de mail',
//         html: "<h1>Factura</h1><br>Saludos cordiales<br>",
//         files: [invoicePdf],
//     }


//     let mail = new Gmailer()
//     mail.sendMail(datosMails)
// }

// sendInvoice()