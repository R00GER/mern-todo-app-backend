import { Router } from 'express';

const todosRouter = Router();

todosRouter.post('/', (req, res) => console.log(req.body));

export default todosRouter;