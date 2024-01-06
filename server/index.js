const express = require('express')
const db = require('./config/db')

const rentalRoutes = require('./routes/rentals')

const app = express();
app.use('/api/v1/rentals', rentalRoutes);

//Test DB Query
db.one('SELECT city AS value FROM rentals where "ID" = 1 ')
  .then((data) => {
    console.log('DATA:', data.value)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })


const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log('App is running!');
});