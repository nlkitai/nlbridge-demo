"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_2 = require("@nlbridge/express");
const port = process.env.PORT || 3000;
const origin = (process.env.ORIGIN || 'nlux.dev').split(',');
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin }));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('The nlbridge demo endpoint is at POST /api');
});
//
// 🎯 This is all what you need to add nlbridge API endpoint to your Express app
// with default config: OpenAI adapters, and in-memory context management.
//
app.post('/api', (0, express_2.defaultMiddleware)('openai', {
    apiKey: process.env.OPENAI_API_KEY,
    chatModel: process.env.OPENAI_CHAT_MODEL,
}));
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
