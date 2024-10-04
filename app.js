import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const USER = {
    name: 'Uneko',
    password: 'AdminUnf3768'
};


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/login', (req, res) => {
	console.log(req.body);
    const { name, password } = req.body;
    if (name === USER.name && password === USER.password) {
        return res.redirect('https://drive.google.com/drive/folders/1DtcqTGG4YcEsCAAFhcGGxSk92Mf9ecQB" target="_blank');
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
