var moment = require('moment');

function getDaysUntillNewYear(){
     var current = parseInt(moment().format('DDD'));
     var untilYear = moment().format('YYYY');
     var yearVal = moment([untilYear]).isLeapYear();
        if(yearVal === false){
            var daysUntil = 365 - current;
          } else{
            var daysUntil = 366 - current;
         }
        return daysUntil;
}

module.exports = getDaysUntillNewYear;