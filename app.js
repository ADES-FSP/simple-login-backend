const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// keys are the username, values are the user's password
const users = {
    tom: 'password',
    jerry: 'PASSword',
    davie: '504',
    brett: 'eddie',
    eddie: 'brett',
};

// Add middleware to handle login
/**
 * method: POST
 * path: /login
 * query: ?username=USERNAME
 * body: { password: PASSWORD }
 *
 * console.log "Success" if the given credential matches the records we have
 * console.log "Failure" otherwise.
 */

app.listen(3030, function () {
    console.log('app listening on port 3030');
});
