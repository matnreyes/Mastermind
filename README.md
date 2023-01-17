# Mastermind of the Third Kind
### [Deployment Link](https://matnreyes-mastermind.fly.dev)

### Aliens from the fourth dimension have landed on Earth. With your musical genius, and our state of the art deciphering software, help us decipher their language to save our planet from total destruction.
Inspired by:
- [This scene from Close Encounters of the Third Kind](https://www.youtube.com/watch?v=wZj7gUIO-2k&t=57s)
- My love for space and music

## Features
- Leaderboard
- Responsive design
- Audio with toggle
- User sign-up and sign-in
- User authorization
- Tests
- Multiple difficulties (easy,  medium, hard)
- Calls to random Integer API, server-side code generation if API call fails
- Timer and guess countdown
    - Timer is server and client-side
- CLI version of Mastermind
- Simple CI pipeline that saved me the trouble of running lint script

## Installation
- .env file has been provided
1. Install Node.js on your device. You will need at least Node v.16. [Follow the installer instructions here](https://nodejs.org/).
2. Run the git clone command from your Terminal:
``` bash
  git clone https://github.com/matnreyes/Mastermind.git
```
3. Install the project's dependencies:
```bash
npm install
```

## Playing the game
### Mastermind of the Third Kind
![game screen](https://i.ibb.co/GHrH5Jj/Screenshot-2023-01-10-at-12-20-23-AM.png)
1. Start the Node server:
``` bash
npm run start
```
2. Visit this page on your browser:
``` 
htttp://localhost:3000/
```
3. Sign-up and click "Game" on navbar. (WARNING: DB_URI is exposed, do not put sensitive data into application)
4. Select difficulty. Easy: 4 digits | Medium : 5 digits | Hard: 6 digits
5. Hover over spaces to reveal guess color. Click to select. When all guesses filled in, submit button appears. Guess input does not reset after each guess, you will have to start your guess over.
6. Hovering over stars explains meaning in toolbox.
7. You have 90 seconds and 10 guesses. When timer or guesses run out, you will be taken to the LoseGame screen.
8. Hint button gives you the first tone of the secret code. Mute switch can be found on top left of navbar.
9. If you win, you're taken to the WinScreen and your account is updated with the win.
10. Top ten players are shown on leaderboard.


### Mastermind CLI
1. Start the game: 
``` bash
npm run mastermind
```
2. Game fetches randomNumber or generates code client-side
3. Game will prompt you for a guess
4. Guess Format: [ (0-7), (0-7), (0-7), (0-7)]
5. Game validates guess
6. You have 10 tries

## Design
#### Personal note: 
This project was a wonderful experience as it allowed me to explore new boundaries in software development. I learned a good bit about humility and being able to step away from problems. This presented itself when building the game's visual interface. My goal was to build the interface from scratch using TailwindCSS. However, while my implementations were alright for someone who isn't a designer, I wasted too much time. I had to make the executive decision to step away from the problem and use a CSS library named DaisyUI. While hurting my ego, it gave me the opportunity to expand my knowledge-base and refocus on aspects of the game that mattered.


My journey into designing the game began by breaking down the gameplay loop on paper:
1. Get code
2. Prompt guess from user
3. Check validity of guess
4. Return results
5. Repeat 9 more times

From there I created a CLI with the following functions:
- main: runs the program 
- fetchNumbers: uses Axios library to fetch random integers from random.API while parsing them into usable array
- mapCode: creates a map of our secretCode to keep track of indexes
- masterMind: recursive function that increases tries and passes codeMap until either 10 tries have been made or game is won
- user input and verification is done through prompt library with regex

Abstracting away all the complicated logic that comes with designing a game to a simple CLI allowed me to see that this challenge could easily be solved with a simple REST API. 

#### Web sequence diagram:
![web sequence diagram](https://i.ibb.co/mywXChR/Screenshot-2023-01-10-at-1-31-57-AM.png)

#### Monogoose model structude:
``` tree
USER: 
    |_username: unique
    |_passwordBash
    |_id
    |_gameId: []

GAME:
    |_win: bool
    |_finished: bool
    |_startTIme
    |_endTime
    |_gameTime: seconds
    |_tries
    |_guesses
    |_results
    |_secretCode
    |_userId
```

#### Features missing
1. Continue game 
    - I implemented a way to load up a game saved in DB since all the information is stored, however, I ran out of time and it broke my code. If I had an extra day, I'd definitely work on implementing it. 
2. Multiplayer
    - I'd love to create a multiplayer version of the app where users can compete in a gauntlet style. Users would all have the same secretCode, there would be several rounds. Guesses, time, and wins would be considered as part of the scoring system.
3. Account page
    - An account page where a user can update their password and see their overall stats. 
4. Restructure leaderboard
    - I would like to change the leaderboard to be sorted by most consecutive wins as opposed to totalWins since that just rewards players who have more time as opposed to skill


## Technologies
#### Back end:
- Node.js
- Express
- MongoDB / Mongoose
- JSONWebToken

#### Front end:
- React
- Axios
- TailWindCSS with DaisyUI

#### Testing:
- Jest

