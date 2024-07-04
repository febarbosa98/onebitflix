import express from 'express';
import { sequelize } from './database';

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
        sequelize.authenticate().then(() => { 
        console.log('banco de dados conectado com sucesso');
        
    })
    console.log(`server iniciado com sucesso na porta ${PORT}`);
    
})