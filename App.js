require('dotenv').config()
var app = require('express')(),
axios = require('axios'),
mongoose = require('mongoose'),
port = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/voted', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
app.get('/vote/:user/:repos/:option', async (req, res) => {
var { user, repos,option } = req.params,
votef = 1,
{ counter } = await Model.findOneAndUpdate({ key: `${user}/${repo}` }, { $inc: { counter: flag } }, { upsert: true, new: true }).exec()


})
app.listen(port, () => console.log(`Server running at ${port}`))
