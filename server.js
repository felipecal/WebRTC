import express from "express";
import { createServer } from "http";
import path from 'path';
const app = express();
const httpServer = createServer(app);
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '.', "public")))

httpServer.listen(port, () => {
    console.log(`🔥 Running at ${port} 🔥`);
});