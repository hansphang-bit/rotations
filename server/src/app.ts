import express from 'express';
import UserController from './controllers/UserController';
import { getAPIData } from './controllers/apiController';

const app = express();
const PORT = 3000;

const userController = new UserController();

app.get('/users/:username', userController.getUser);
app.get("/api/data", getAPIData)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
