// const dotenv = require('dotenv');
// dotenv.config();

// const express = require('express');
// const basicAuth = require('express-basic-auth');
// const path = require('path');
// const OpenAI = require('openai');
// const cors = require('cors');

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import basicAuth from 'express-basic-auth';
import path from 'path';
import OpenAI from 'openai';
import cors from 'cors';
import {handler as ssrHandler} from './dist/server/entry.mjs';

// react refreshを使用
import { setGlobalRefreshHandler } from 'react-refresh';

// 現在のモジュールのファイルパスを取得(mjs仕様)
const __dirname = path.dirname(new URL(import.meta.url).pathname);

console.log(`NODE_ENV: ${process.env.NODE_ENV}`)

console.log('AUTH_USER:', process.env.ADMIN_PASSWORD);

// OpenAI APIの設定
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const PORT = process.env.PORT || 5000;
// const HOST = '0.0.0.0'

const app = express();
app.use(cors());

// リクエストボディの解析
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'dist/client')));


// Basic認証の設定
app.use(basicAuth({
  users: { [process.env.ADMIN_ID]: process.env.ADMIN_PASSWORD },
  challenge: true
}));

app.post('/api/openai', async (req, res) => {

  try {
    const { prompt } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send('内部でエラーが発生したため出力できません。');
  }
});

app.post('/api/openai2', async (req, res) => {

  try {
    const { prompt } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send('内部でエラーが発生したため出力できません。');
  }
});

// Astro SSR ハンドラー
app.use(ssrHandler);

// React Refresh runtime を使用する
function installGlobalHook(window) {
  const ReactRefreshRuntime = require('react-refresh/runtime');
  ReactRefreshRuntime.injectIntoGlobalHook(window);
  window.$RefreshReg$ = () => {};
  window.$RefreshSig$ = () => (type) => type;
  window.__vite_plugin_react_preamble_installed__ = true;
}

//  global refresh ハンドラー
setGlobalRefreshHandler(installGlobalHook);

// サーバーの起動
// app.listen(PORT,'0.0.0.0', () => {
  app.listen(PORT, () => {
  // console.log(`Server is running on http://${HOST}:${PORT}`);
  console.log(`Server is running on http://localhost:${PORT}`);
});
