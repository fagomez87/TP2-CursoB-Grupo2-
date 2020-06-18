import PdfCreator from '../pdf/pdfCreator.js'
import Gmailer from '../mail/GMailer.js'
import DaoFactory from '../dao/daoFactory.js'
import fs from 'fs'

const invoices = fs.readFileSync('/home/fernandogomez/Desktop/ORT/TP2/TP2-CursoB-Grupo2-/src/static/invoiceTemplate.html')

const date = new Date()
const invoices = '../static/facturas/Factura'+date+'.pdf'

const invoiceDao = DaoFactory.getInvoicesDao();

async function sendInvoice(){

    let daoObject = await invoiceDao.getByCuil(15285439875)

    let pdf = new PdfCreator(template,daoObject,'',invoices)
    pdf.build()
}

sendInvoice()