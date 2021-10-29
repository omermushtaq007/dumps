import express from 'express';
const app = express(); // entire app
const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
