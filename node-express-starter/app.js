const { app } = require('./api');
const config = require('./config')

app.listen(process.env.PORT, ()=> console.log(`Listening on port ${process.env.PORT}`))