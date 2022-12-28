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

### Bug list
- [x] duplicate numbers give incorrect hints.
Example:
secretCode = [3, 4, 3, 6]
guess = [3, 3, 3, 3]

Backend response = 4 correct int, 2 correct location

Date logged: 12/28/22
Date fixed: 12/28/22