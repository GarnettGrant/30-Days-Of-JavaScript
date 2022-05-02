"use strict";

//1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//e.g. YYYY-MM-DD HH:mm eg. 2012-01-02 07:05

let newDate = new Date();

function dateFormater(date, separator){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let hour = date.getHours();
    let minute = date.getMinutes();

    //Day format
    if (day < 10){
        day = '0' + day;
    }

    ///Month format
    if (month < 10){
        month = '0' + month;
    }

    //Hour format
    if (hour < 10){
        hour = '0' + hour;
    }

    //Minute format
    if (minute < 10){
        minute = '0' + minute;
    }

    return (`${year}${separator}${month}${separator}${day} ${hour}:${minute}`);
}

console.log(dateFormater(newDate,'-'));