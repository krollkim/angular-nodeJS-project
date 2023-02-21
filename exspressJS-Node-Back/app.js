import express, { request } from 'express';
import cors from 'cors';
import './sqlConnect';
import { signup } from './express-sevices/signup';
import { getLoginStatus, googleLogin, login, logout } from './express-sevices/login';
import { addTask, changeTaskLevel, changeTaskStatus, getCounterTasks, getTask, getTasks, removeTask, returnTask, updateTask } from './express-sevices/tasks';
import { addCustomer, getCustomer, getCustomers, removeCustomer, updateCustomer } from './express-sevices/customers';
const session = require('express-session');

const app = express();

app.use(cors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
}));

app.use(session({
    secret: 'my-secret',
    name: 'mySession',
    resave: false,
    saveUninitialized: false,
}));


app.use(express.json());

app.listen(3000, () => {
    console.log('listening on 3000');
});

app.get('/', (req, res) => {

    if (!req.session.attemps) {
        req.session.attemps = 0;
    }
    req.session.attemps++;
    
    res.send({
        attemps: req.session.attemps,
        message: 'Login failed after 3 attempts',
    });
});

function authGurd(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

app.get('/logout', logout);
app.get('/login', getLoginStatus);
app.post('/signup', signup)
app.post('/login', login);
app.post('/login', login);
app.post('/googleLogin', googleLogin);


app.get('/tasks/counter', authGurd, getCounterTasks);
app.get('/tasks',authGurd, getTasks);
app.get('/task/:id',authGurd, getTask);
app.post('/tasks',authGurd, addTask);
app.put('/task/:id', authGurd, updateTask);
app.put('/tasks/:taskId/status/:newStatus',authGurd, changeTaskStatus);
app.put('/tasks/:taskId/level/:newLevel',authGurd, changeTaskLevel);
app.put('/tasks/restore/:returnId',authGurd, returnTask);
app.delete('/tasks/:id',authGurd, removeTask);


app.get('/customers',authGurd, getCustomers);
app.get('/customers/:id',authGurd, getCustomer);
app.post('/',authGurd, addCustomer);
app.put('/customer/edit-customer/:id',authGurd, updateCustomer);
app.put('/customers/:id',authGurd, updateCustomer);
app.delete('/customers/:id',authGurd, removeCustomer);

