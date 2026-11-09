import express from 'express';
import runGraph from './services/graph.ai.service.js';

const app = express();

app.get('/', async (req, res) => {
    const result = await runGraph("write a code for finding factoral of number in js?");

    res.json(result);
});

export default app;