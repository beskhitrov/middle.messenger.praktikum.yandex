import express, { Express, Request, Response } from "express";
import path from 'path';

const app: Express = express();
const port = 3000;

app.use(express.static(path.join(process.cwd(), 'dist')));

app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(process.cwd(), 'dist/index.html'));
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
