const express = require('express');
const app = express();
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

app.use(express.json())
app.use('/categories', productRoutes);

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log(`Server is running at localhost:${PORT}`);
    }
})