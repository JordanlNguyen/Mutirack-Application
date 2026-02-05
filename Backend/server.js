import express from 'express'
const app = express();
import router from './routes/index.js'
app.listen(3000);

app.use(express.json());

app.use(router);

export default app