const getSleepHours = day => {
    if (day === 'Monday') {
      return 8;
    } else if (day === 'Tuesday') {
      return 7;
    } else if (day === 'Wednesday') {
      return 5;
    } else if (day === 'Thursday') {
      return 8;
    } else if (day === 'Friday') {
      return 7;
    } else if (day === 'Saturday') {
      return 5;
    } else if (day === 'Sunday') {
      return 9;
    }
  };
  
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday')+getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  
  const getIdealSleepHours = (idealHours = 7) => {
    return idealHours * 7;
  };
  
  // console.log(`${getActualSleepHours()} is my actual sleep hours. My ideal sleep hours is ${getIdealSleepHours()}`);
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
  
  
    if (actualSleepHours === idealSleepHours) {
      console.log(`You got the perfect amount of sleep.`);
    } else if (actualSleepHours > idealSleepHours) {
      const diff = actualSleepHours - idealSleepHours;
      console.log(`You got more sleep than needed. ${diff} hours of excessive sleep.`); 
      } else if (actualSleepHours < idealSleepHours) {
        const diff = idealSleepHours - actualSleepHours;
        console.log(`You should get some rest. ${diff} hours of sleep deficient.`);
      }
  };
  
  calculateSleepDebt();
  
  