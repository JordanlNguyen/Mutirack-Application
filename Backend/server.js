import express from 'express'
const app = express();
import userRouter from './routes/users.js'
app.listen(3000);

app.use(express.json());

app.use('/users', userRouter);

export default app