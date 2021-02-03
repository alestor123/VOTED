require('dotenv').config()
var app = require('express')(),
axios = require('axios'),
mongoose = require('mongoose'),
Model = require('./models/model'),
port = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/voted', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
app.get('/vote/:user/:repos/:option', async (req, res) => {
var { user, repos,option } = req.params,
votef = 1,
{ counter } = await Model.findOneAndUpdate({ key: `${user}/${repos}/${option}` }, { $inc: { counter: votef } }, { upsert: true, new: true }).exec()
res.send('Thanks for voting ' + option + ' has ' + counter)
})
app.get('/results/:user/:repos/:option', async (req, res) => {
var { user, repos,option } = req.params,
{ counter } = await Model.findOne({key:`${user}/${repos}/${option}`})
data = await axios.get(`https://img.shields.io/badge/${option}-${counter}-brightgreen${req.originalUrl.slice(req.originalUrl.indexOf('?'))}`)
res.contentType('image/svg+xml').header('Cache-Control', 'no-cache,max-age=600').send(data.data)

})

app.listen(port, () => console.log(`Server running at ${port}`))
