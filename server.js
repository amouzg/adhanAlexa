const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/adhan', (req, res) => {
    res.json({ url: "https://soundcloud.com/adnane-charafeddine/adhan-al-madinah-al-monawara?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en ligne sur http://localhost:${PORT}`);
});
