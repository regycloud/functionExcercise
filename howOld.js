/*  case 
If the year is in the future, you should return a string in the following format:

'You will be [calculated age] in the year [year passed in]'
If the year is before they were born, you should return a string in the following format:

'The year [year passed in] was [calculated number of years] years before you were born'
If the year is in the past but not before the person was born, you should return a string in the following format:

'You were [calculated age] in the year [year passed in]'
*/
// Write your function here:
const howOld = (age, year) => {
    const yearDifference = year - 2021;
    const newAge = age + yearDifference;
    if (newAge > age) {
      return `You will be ${newAge} in the year ${year}`;
    } else if (newAge < 0) {
      return `The year ${year} was ${-newAge} years before you were born`;
    } else {
      return `You were ${newAge} in the year ${year}`;
    }
  }
  
  console.log(howOld(21, 2021));
  
  
  
  
  // Once your function is written, write function calls to test your code!
  