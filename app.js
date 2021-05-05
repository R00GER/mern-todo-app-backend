import express, { json } from 'express';
import cors from 'cors';
import todosRouter from './controllers/todos.js';

const app = express();

app.use(cors());
app.use(json());
app.use('/', todosRouter)


app.listen(3001);
