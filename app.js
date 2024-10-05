const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const USER = {
    name: 'Uneko',
    password: 'AdminUnf3768'
};

app.get('/', (req, res) => {
    res.sendFile(path.join('./', 'public', 'login.html'));  // Menggunakan './' untuk merujuk pada direktori saat ini
});

app.post('/login', (req, res) => {
    console.log(req.body);
    const { name, password } = req.body;
    if (name === USER.name && password === USER.password) {
        return res.redirect('https://drive.google.com/drive/folders/1DtcqTGG4YcEsCAAFhcGGxSk92Mf9ecQB');
    } else {
        res.send(`
            <script>
                alert('Email atau password salah!');
                window.location.href = '/'; 
            </script>
        `);
    }
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
