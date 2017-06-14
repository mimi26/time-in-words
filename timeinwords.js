// Given the time in numerals we may convert it into words, as shown below:

// 5:00 -> five o'clock 
// 5:01 -> one minute past five
// 5:10 -> ten minutes past five
// 5:15 -> quarter past five
// 5:30 -> half past five
// 5:40 -> twenty minutes to six 
// 5:47 -> thirteen minutes to six
// 5:28 -> twenty eight minutes past five

// Write a program which prints the time in words for the input given in the format mentioned above.

function timeInWords (time) {
  const h = parseInt(time.match(/^.*(?=(\:))/g).join());//match everything before the ":" to get the hours
  const timeArr = time.split('');
  const colonIndex = timeArr.indexOf(':');//find the index of the ":"
  const minuteArr = [];
  for (let i = colonIndex + 1; i < timeArr.length; i ++) { //loop through everything after the colon
    minuteArr.push(timeArr[i]);//push into a minute array
  }
  const m = parseInt(minuteArr.join(''));//join the minute array to get the minutes
  const timeConvert = {
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine'
  }
  if (m <=30) {
    hourInWords = timeConvert[h];
  } else if (m > 30 && h !== 12){
    hourInWords = timeConvert[h + 1];
  } else if (m > 30 && h === 12) {
    hourInWords = timeConvert[1];
  }
  if (m < 30) {
    minutesInWords = timeConvert[m];
  } else if (m > 30) {
    minutesInWords = timeConvert[60 - m];
  }
  if (m === 0) {
    timeString = `${hourInWords} o' clock`;
  } else if (m === 15) {
    timeString = `quarter past ${hourInWords}`;
  } else if (m === 30) {
    timeString = `half past ${hourInWords}`;
  } else if (m === 45) {
    timeString = `quarter to ${hourInWords}`;
  } else if (m === 1) {
    timeString = `one minute past ${hourInWords}`;
  } else if (m < 30) {
    timeString = `${minutesInWords} minutes past ${hourInWords}`;
  } else if (m === 59) {
    timeString = `one minute to ${hourInWords}`;
  } else if (m > 30) {
    timeString = `${minutesInWords} minutes to ${hourInWords}`;
  }
  console.log(timeString);
}
