import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {  
    definition: {
        openapi: '3.0.0',   
        info: {
            title: 'API Film',
            version: '1.0.0',
            description: 'API untuk mengelola data film'    
        },
        servers: [
            { url: 'http://localhost:7000' }
        ]
    },
    apis: ['./app.js']  
};

const specs = swaggerJSDoc(options);

export { specs, swaggerUi };