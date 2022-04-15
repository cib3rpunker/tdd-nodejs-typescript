// export {};
const express = require('express');
// import express from 'express';

// const app = express();
const application = express();

application.post('/api/1.0/users', (req, res) => {
  return res.send({ message: 'User created' });
});

// export default app;
module.exports = application;
