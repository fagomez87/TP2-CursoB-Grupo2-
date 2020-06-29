import mongoose from 'mongoose'

const Schema = mongoose.Schema

const customerSchema = new Schema ({
  cuil: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  latitud: { type: Number, required: true },
  longitud: { type: Number, required: true },
  mail: { type: String, required: true, unique: true },
  veraz: { type: Boolean, required: true, default: false }
})

export default mongoose.model('Customer', customerSchema, 'Customers')
