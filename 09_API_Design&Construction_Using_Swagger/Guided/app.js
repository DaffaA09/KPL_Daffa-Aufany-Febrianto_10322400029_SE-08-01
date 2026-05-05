const express = require('express');
import { specs, swaggerUi } from './swagger.js';

const app = express();
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));


const PORT = 7000;
const HOST = "localhost";

/**
 * @swagger
 * /:
 *   get:
 *     summary: Menampilkan pesan selamat datang
 *    responses:
 *      200: 
 *       description: Masuk 
 */

app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Hello World!' });
});

const datafilm = [
    { id: 1, title: "Avengers", genre: "Action" },
    { id: 2, title: "Interstellar", genre: "Sci-Fi" },
    { id: 3, title: "Joker", genre: "Drama" }
];

app.get("/films", (req, res) => {
    return res.status(200).json(datafilm);
});

app.post("/films", (req, res) => {
    const filmBaru = {
        id: datafilm.length + 1,
        title: req.body.title,
        genre: req.body.genre,
        year: req.body.year
    }
    
    datafilm.push(filmBaru);
    return res.status(201).json(filmBaru);
    }
);
//endpoint untuk mendapatkan daftar film
// app.get("/film", (req, res) => {
//   const films = [
//     { id: 1, title: "Avengers", genre: "Action" },
//     { id: 2, title: "Interstellar", genre: "Sci-Fi" },
//     { id: 3, title: "Joker", genre: "Drama" }
//   ];

//   res.json(films);
// });

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);   
});