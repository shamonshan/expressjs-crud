/*
* Entry point of the application
* Load the initial configs from core/app
*/
const { app } = require('./core/app');

const port = process.env.PORT;

/*
* start the sever
*/
app.listen(port, () => console.log(`App listening on port ${port}!`));
