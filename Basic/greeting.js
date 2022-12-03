'use strict';

const currentDate = new Date();

global.date = currentDate;

module.exports.getGreeting = function(){
    const hour = currentDate.getHours();
    if (hour > 16) return 'Good evening, ' + global.name;
    else if (hour > 10) return 'Good day, ' + global.name;
    else return 'Good morning, ' + global.name;
};

module.exports.name = 'Alice';