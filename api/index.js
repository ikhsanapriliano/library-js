import express from "express"
import axios from "axios"
import https from "https"

const app = express()
const router = express.Router();

const PORT = 3000;

// Example route
app.get('/', async (req, res) => {
    res.json({ message: 'welcome' });
});

app.get('/code/:id', async (req, res) => {
    const item_codes = req.params.id

    try {
        const response = await axios({
            method: 'GET',
            url: 'https://robo-qr.com/slims9/index.php?p=api/stocktake/updateStockTakeItemByArray',
            data: {
                item_codes: [`${item_codes}`]
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(response.data);
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
    }

    res.json({ message: 'Data Berhasil Di Update' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

