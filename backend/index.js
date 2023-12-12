const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sat@1973kri',
    database: 'employee_database',
});

app.post('/submit', (req, res) => {
    const { eid, username, dob, doj, dept, address, salary } = req.body;
    console.log('Received data:', req.body);

    if (eid && username) {
        const sql = 'INSERT INTO employee_table (employeeid, username, dateofbirth, dateofjoining, department, address, salary) VALUES (?, ?, ?, ?, ?, ?, ?)';

        db.query(sql, [eid, username, dob, doj, dept, address, salary], (err, result) => {
            if (err) {
                console.error('Error inserting into database: ', err);
                res.status(500).json({ success: false, error: err.message });
            } else {
                console.log('Record inserted into database');
                res.status(200).json({ success: true });
            }
        });
    } else {
        res.status(400).json({ success: false, error: 'Invalid data' });
    }
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
