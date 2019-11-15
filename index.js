const express = require('./app');
try {
    express.listen(3000, () => console.log('Running express'));
} catch (err) {
    console.log(err);
}