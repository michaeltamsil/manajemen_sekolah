let mongoose = require('mongoose')
let Schema = mongoose.Schema

let SiswaSchema = new Schema({
	name: String
})

module.exports = mongoose.model('siswa', SiswaSchema)