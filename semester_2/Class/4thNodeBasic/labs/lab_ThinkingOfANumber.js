// function guessNumber(n) {
//     let number = Math.floor (Math.random() * Math.floor(n));
//     return (guess) => {
//         if (guess === number) {
//             return true;
//         } else {
//           return ('false')
//         }
        
//     }

// }

// const guessingGame = guessNumber(10)



function createGuesingGame(n) {
  
    let number = Math.floor(Math.random() * Math.floor(n)); // this generates a whole number between 0 and n
    let i = 0;
    
          return (guess) => {
            i++;
          // within this new function we still have access to that number which was generated.
          if (guess > number) {
            console.log(guess, '   ', number);
            return "Your guess is out of bounds. Must be within 0 and 10" + n;
          }
          if (guess === number) {
            console.log(`You've guessed the correct number after ${i} attempts`);
            return true;
          } else {
            if (guess > number) {
              return "your guess was too high"
            } else {
              return "your guess was too low"
            }
          }
        }
    
  }
  
  const guessingGame = createGuesingGame(8);

