import express, { Request, Response } from 'express';

const app = express();
const port: number = 3000;

// Sử dụng Type Request và Response để TS kiểm soát dữ liệu
app.get('/', (req: Request, res: Response) => {
    res.send('Chào Quý Ông Tori');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});