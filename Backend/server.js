import express from 'express'
const app = express();
import userRouter from './routes/user.js'
import syncRouter from './routes/sync.js'

app.use(express.json());

app.use('/user', userRouter);
app.use('/sync', syncRouter);

app.listen(3000);

export default app