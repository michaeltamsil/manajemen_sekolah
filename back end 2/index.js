let express = require('express')
let app = express()
let bodyParses = require('body-parser')
let mongoose = require('mongoose')
let siswa = require('./app/models/siswa')
let port = process.env.PORT || 8000
let router = express.Router()

mongoose.connect(`mongodb://management_sekolah:management_sekolah1@ds161529.mlab.com:61529/management_sekolah`)

app.use(bodyParser.urlencoded({ extended: true })
app.use(bodyParser.json())


router.get('/' (req, res) => {
	res.json({ message: 'yey'})
}

// all of our router will be prefixed with /api
app.use('/api', router)
app.listen(port)
console.log(`run on port ${port}`)