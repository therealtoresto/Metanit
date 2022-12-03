'use strict';

const display = (data, cb) => {
    const randInt = Math.random() * (10 - 1) + 1;
    const err = randInt > 5 ? new Error('Error: randInt > 5') :
        setTimeout(() => cb(err, data), 10);
};

console.log('Application is started');

// display('Data processing...', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

console.log('Program completion');

const displaySync = ( cb ) => cb();

console.log('App is started...');

setTimeout(() => console.log('timeout 500'), 500);
setTimeout(() => console.log('timeout 100'), 100);

displaySync(() => console.log('without timeout'));
console.log('App is finished');