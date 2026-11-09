import express from 'express';
import graph from './services/graph.ai.service.js';

const app = express();

app.get('/', async (req, res) => {
    const result = await graph.invoke({
        problem: "What is the capital of France?"
    });
});

export default app;