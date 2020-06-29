import mongoose from 'mongoose'

const Schema = mongoose.Schema

const invoiceSchema = new Schema ({
  cuil: { type: String, required: true },
  cuit: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  importe: { type: Number, required: true },
  mail: { type: String, required: true, unique: true },
  razonSocial: { type: String, required: true }
})

export default mongoose.model('Invoice', invoiceSchema, 'Invoices')
