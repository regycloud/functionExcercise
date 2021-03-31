const getUserChoice = userInput => { 
    userInput = userInput.toLowerCase(); 
    if (userInput === 'rock') {
      return userInput;
    } else if (userInput === 'paper') {
      return userInput;
    } else if (userInput === 'scissors') {
      return userInput;
    } else if (userInput === 'bomb') {
      return userInput; // This is a secret cheat code
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissors';
      break;
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'The user WON!'
    }
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'scissors') {
        return 'You won!';
      } else {
        return 'The computer won!';
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'You won!';
      } else {
        return 'The computer won!';
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'paper') {
        return 'You won!';
      } else {
        return 'The computer won!';
      }
    }
  };
  
  // Test the function
  // console.log(determineWinner('paper','paper'));
  
  const playGame = () => {
    userChoice = getUserChoice('bomb');
    computerChoice = getComputerChoice();
    console.log(`User choice: ${userChoice}, The computer choice: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();