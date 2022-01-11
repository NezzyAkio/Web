const express = require('express');
const app = express();
const port = process.env.port || 5000

app.get('/', (req, res) => {
	res.status(200).sendFile(__dirname + `/web/index.html`)
})

app.get('/invite', (req, res) => {
	res.status(200).sendFile(__dirname + `/web/invite.html`)
})

app.listen(port, "0.0.0.0", function() {
	console.log(`Webserver listening on port ${port}`)
})
