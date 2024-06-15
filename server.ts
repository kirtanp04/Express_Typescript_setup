import express from 'express';
import { Request, Response } from 'express';
const app = express();
app.get('/', (req: Request, res: Response) => {
  res.send('Express typescript');
});
app.listen(3000, () => {
  console.log('Application started on port 3000!');
});
