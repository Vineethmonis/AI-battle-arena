import express from 'express';
import runGraph from './services/graph.ai.service.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
}));

app.get('/', async (req, res) => {
    const result = await runGraph("write a code for finding factoral of number in js?");

    res.json(result);
});

app.post('/invoke', async (req, res) => {
    const { input } = req.body;
    const result = await runGraph(input);
    res.status(200).json({
        message: "Graph invoked successfully",
        success: true,
        result
    });
})

export default app; 