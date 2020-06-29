import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commerceSchema = new Schema ({
  cuit: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  razonSocial: { type: String, required: true },
  type: { type: String, required: true },
  latitud: { type: Number, required: true },
  longitud: { type: Number, required: true }
})

export default mongoose.model('Commerce', commerceSchema, 'Commerces')
