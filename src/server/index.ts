import express = require('express');
import { Request, Response, Application} from 'express';
import createCustomObject from '../helpers'

const PORT = 5500;
const app: Application = express();

app.get('/api/heartbeat', (req: Request, res: Response): void => {
  res.setHeader('content-type', 'application/json');
  res.json({ status: 'alive!' });
})

app.get('/api/dummyresult', (req: Request, resp: Response) => {
    const jsonOject = createCustomObject();

    resp.setHeader('content-type', 'application/json');
    resp.status(200).send(jsonOject);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})