let right = new Date()

let day,
    date = right.getDate(),
    month,
    year = right.getFullYear(),
    hour = right.getHours(),
    minute = right.getMinutes(),
    second = right.getSeconds()

if(right.getDay() === 0) {
    day = 'Sunday'
} else if(right.getDay() === 1) {
    day = 'Monday'
} else if(right.getDay() === 2) {
    day = 'Tuesday'
} else if(right.getDay() === 3) {
    day = 'Wednesday'
} else if(right.getDay() === 4) {
    day = 'Thursday'
} else if(right.getDay() === 5) {
    day = 'Friday'
} else {
    day = 'Saturday'
}

if (right.getMonth() === 0) {
    month = 'January'
} else if (right.getMonth() === 1) {
    month = 'February'
} else if (right.getMonth() === 2) {
    month = 'March'
} else if (right.getMonth() === 3) {
    month = 'April'
} else if (right.getMonth() === 4) {
    month = 'May'
} else if (right.getMonth() === 5) {
    month = 'June'
} else if (right.getMonth() === 6) {
    month = 'July'
} else if (right.getMonth() === 7) {
    month = 'August'
} else if (right.getMonth() === 8) {
    month = 'September'
} else if (right.getMonth() === 9) {
    month = 'October'
} else if (right.getMonth() === 10) {
    month = 'November'
} else {
    month = 'December'
}

console.log(`Hari ini ${day}, ${date} ${month} ${year}
Pukul ${hour}:${minute}:${second}`)