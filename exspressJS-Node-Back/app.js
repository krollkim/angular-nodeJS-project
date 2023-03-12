const express = require('express');
const cors = require('cors');
require('./sqlConnect');
const signup = require('./express-sevices/signup');
const login = require('./express-sevices/login');
const tasks = require('./express-sevices/tasks');
const customers = require('./express-sevices/customers');
const contacts = require('./express-sevices/contacts');
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

if (process.env.NODE_ENV == 'development') {
    app.listen(3000, () => {
        console.log('listening on 3000');
    });
} else {
    app.listen(() => {
        console.log('listening...');
    });
}

app.use('/', (req, res, next) => {
    setTimeout(next, 500);
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

// login, logout, signup, google services
app.get('/logout', login.logout);
app.get('/login', login.getLoginStatus);
app.post('/signup', signup.signup)
app.post('/login', login.login);
app.post('/login', login.login);
app.post('/googleLogin', login.googleLogin);


// tasks
app.get('/tasks/counter', authGurd, tasks.getCounterTasks);
app.get('/tasks',authGurd, tasks.getTasks);
app.get('/task/:id',authGurd, tasks.getTask);
app.post('/tasks',authGurd, tasks.addTask);
app.put('/task/:id', authGurd, tasks.updateTask);
app.put('/tasks/:taskId/status/:newStatus',authGurd, tasks.changeTaskStatus);
app.put('/tasks/:taskId/level/:newLevel',authGurd, tasks.changeTaskLevel);
app.put('/tasks/restore/:returnId',authGurd, tasks.returnTask);
app.delete('/tasks/:id',authGurd, tasks.removeTask);

// customers
app.get('/customers',authGurd, customers.getCustomers);
app.get('/customers/:id',authGurd, customers.getCustomer);
app.post('/customer',authGurd, customers.addCustomer);
app.put('/customer/edit-customer/:id',authGurd, customers.updateCustomer);
app.put('/customers/:id',authGurd, customers.updateCustomer);
app.delete('/customers/:id',authGurd, customers.removeCustomer);

// contacts
app.get('/contacts',authGurd, contacts.getContacts);
app.get('/contacts/:id',authGurd, contacts.getContact);
app.post('/contact',authGurd, contacts.addContact);
app.put('/contact/edit-contact/:id',authGurd, contacts.updateContact);
app.put('/contacts/:id',authGurd, contacts.updateContact);
app.delete('/contacts/:id',authGurd, contacts.removeContact);


