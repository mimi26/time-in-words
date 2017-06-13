// Given the time in numerals we may convert it into words, as shown below:

// 5:00 -> five o' clock 
// 5:01 -> one minute past five
// 5:10 -> ten minutes past five
// 5:15 -> quarter past five
// 5:30 -> half past five
// 5:40 -> twenty minutes to six 
// 5:47 -> thirteen minutes to six
// 5:28 -> twenty eight minutes past five

// Write a program which prints the time in words for the input given in the format mentioned above.

function timeInWords (time) {
  let h = time.match(/^.*(?=(\:))/g).join();//match everything before the ":" to get the hours
  let timeArr = time.split('');
  let colonIndex = timeArr.indexOf(':');//find the index of the ":"
  let minuteArr = [];
  for (i = colonIndex + 1; i < timeArr.length; i ++) { //loop through everything after the colon
    minuteArr.push(timeArr[i]);//push into a minute array
    }
    let m = minuteArr.join('');//join the minute array to get the minutes
    let timeConvert = {
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
    if (parseInt(m) <=30) {
      hourInWords = timeConvert[parseInt(h)];
    } else if (parseInt(m) > 30 && parseInt(h) !== 12){
      hourInWords = timeConvert[parseInt(h) + 1];
    } else if (parseInt(m) > 30 && parseInt(h) === 12) {
      hourInWords = timeConvert[1];
    }
    if (parseInt(m) < 30) {
      minutesInWords = timeConvert[parseInt(m)];
    } else if (parseInt(m) > 30) {
      minutesInWords = timeConvert[60 - parseInt(m)];
    }
    if (parseInt(m) === 0) {
      timeString = `${hourInWords} o' clock`;
    } else if (parseInt(m) === 15) {
      timeString = `quarter past ${hourInWords}`;
    } else if (parseInt(m) === 30) {
      timeString = `half past ${hourInWords}`;
    } else if (parseInt(m) === 45) {
      timeString = `quarter to ${hourInWords}`;
    } else if (parseInt(m) === 1) {
      timeString = `one minute past ${hourInWords}`;
    } else if (parseInt(m) < 30) {
      timeString = `${minutesInWords} minutes past ${hourInWords}`;
    } else if (parseInt(m) === 59) {
      timeString = `one minute to ${hourInWords}`;
    } else if (parseInt(m) > 30) {
      timeString = `${minutesInWords} minutes to ${hourInWords}`;
    }
    console.log(timeString);
}