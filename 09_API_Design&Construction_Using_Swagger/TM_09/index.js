const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.json());


function generateNumberFromName(name) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        sum += name.charCodeAt(i);
    }
    return (sum % 100) + 1;
}

/**
 * @swagger
 * /:
 *   post:
 *     summary: Tebak angka berdasarkan nama (deterministic)
 *     description: Menghasilkan angka tetap berdasarkan nama, lalu membandingkan dengan tebakan
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nama
 *               - tebakan
 *             properties:
 *               nama:
 *                 type: string
 *                 example: Hamid
 *               tebakan:
 *                 type: number
 *                 example: 24
 *     responses:
 *       200:
 *         description: Hasil tebakan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 jawaban:
 *                   type: string
 *                   example: Tebakanmu terlalu tinggi!
 *       400:
 *         description: Input tidak valid
 */
app.post('/', (req, res) => {
    const { nama, tebakan } = req.body;

    if (typeof nama !== "string" || typeof tebakan !== "number") {
        return res.status(400).json({
            jawaban: "nama harus string dan tebakan harus number"
        });
    }

    const angkaBenar = generateNumberFromName(nama);

    if (tebakan === angkaBenar) {
        return res.json({
            jawaban: `Benar sekali! Tebakannya adalah ${angkaBenar}.`
        });
    }

    if (tebakan > angkaBenar) {
        return res.json({
            jawaban: "Tebakanmu terlalu tinggi!"
        });
    }

    return res.json({
        jawaban: "Tebakanmu terlalu rendah!"
    });
});


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Tebak Angka',
            version: '1.0.0',
            description: 'API untuk menebak angka berdasarkan nama (deterministic)'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ]
    },
    apis: ['./index.js'], // penting: harus sesuai nama file kamu
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* ================= SERVER ================= */

app.listen(3000, () => {
    console.log('Server jalan di http://localhost:3000');
    console.log('Swagger di http://localhost:3000/docs');
});