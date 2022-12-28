# Musical Mastermind
Our last archeological dig found ancient tunes lost through the ages. Sadly, time hasn't been kind to these ancient tunes. With from our team of experts, and your musical genius, we can figure out what the missing pieces of the tune are!


# CLI Mastermind
### Instructions: 
- Make sure Node is running on your device: 
  - https://nodejs.org/
- Run the git clone command on your Terminal:
``` bash
  git clone https://github.com/matnreyes/Mastermind.git
```
- Install the project's dependencies:
``` bash
  npm install
```
- Run start command:
``` bash
  npm run mastermind
```

Run through:
I decided that using functional principles was the best way to finish this simple game.
Program consists of 4 functions.
*Functions:*
- main: runs all the processes required for running game, think of it as the session
- fetchNumbers: uses Axios library to fetch random integers from random.API while parsing them into usable array
- mapCode: creates a hashMap of code of our secretCode to keep track of indexes
- masterMind: recursive function that increases tries and passes codeMap until either 10 tries have been made or game is won
  - user input and verification is done through prompt library with regex

### Bug list
- [x] duplicate numbers give incorrect hints.
Example:
secretCode = [3, 4, 3, 6]
guess = [3, 3, 3, 3]

Backend response = 4 correct int, 2 correct location

Date logged: 12/28/22
Date fixed: 12/28/22