# Mastermind of the Third Kind
**[Fly.io Deployment](https://matnreyes-mastermind.fly.dev/)**<br>
Aliens from the fourth dimension have landed on Earth. With your musical genius, and our state of the art deciphering software, help us decipher their language to save our planet from total destruction. 

### Instructions: 
1. Make sure Node is installed on your system. Follow these instructions:
- https://nodejs.org/
2. Open terminal and clone this repository:
``` bash
git clone https://github.com/matnreyes/Mastermind.git
```
3. Install project dependencies by running this command:
``` bash
npm install
```
4. Start Node server:
``` bash
npm run start
```
5. Open your favorite browser and visit 
- http://localhost:8080


### Design:
**Mockup of game design**<br>
#### Mobile:<br>
![mobile](https://i.ibb.co/3zvVssk/i-Phone-14-Pro-Max-1.png)

- Idea:
I decided to use musical notes instead of pegs to highlight my time as a musician. The concept of Close Encounters of the Third Kind makes this fun and highlights my geek side. The goal is to play the sound of the notes once player hits submit on guess. 

### Web sequence diagram:
**Logged in user winning game:**
![websequencediagram](https://i.ibb.co/ZHDc6nj/67-C3-BA07-61-E6-49-E3-B20-C-CADC13-A9454-B.jpg)

### Feature goals:
- [x] Users creation and login connected to DB
- [x] Leaderboard
- [x] Multiple difficulties
- [x] Server-side code generation if API fails
- [x] Sound when sending guess
- [x] Number of remaining guesses
- [ ] Hints
- [ ] Timer
- [ ] Multiplayer

### Notes
- The .env file is exposed for the sake of sharing project, otherwise, it would be gitignored

# CLI Mastermind
### Instructions: 
1. Make sure Node is running on your device (you will need at least v.16): 
  - https://nodejs.org/
2. Run the git clone command on your Terminal:
``` bash
  git clone https://github.com/matnreyes/Mastermind.git
```
3. Install the project's dependencies:
``` bash
  npm install
```
4. Run start command:
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

### Bug list:
- [x] duplicate numbers give incorrect hints.
Example:
secretCode = [3, 4, 3, 6]
guess = [3, 3, 3, 3]

Backend response = 4 correct int, 2 correct location

Date logged: 12/28/22
Date fixed: 12/28/22

- [ ] guess buttons won't reset to default state after guess is sent off

Date logged: 1/6/23
