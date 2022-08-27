# js-homework-framework

    A basic example of a homework framework using node, jest, jest-html-reporter to deliver the student live updates on their tests, in browser

# WARNING

    Please don't mess with the file structure, or modify the files.

    Your assignment will mention any files you need to work in.

# Assignment

    After you complete the setup instructions below, open homework.js.

    Follow the commented instructions in the file.

# Setup

1. Install node.js on your machine.
    1. Link is here: [nodejs](https://nodejs.org/en/download/)
    2. Download the Installer
    3. Open the Installer
    4. Follow the instructions
    ---
2. Open the terminal
    - There is a terminal in vsCode, you can see it in the top bar.
    - Terminal -> New Terminal
    ---
3. In the terminal (below), type one of the following commands (they are the same) and press enter:

    > npm install

    or

    > npm i
    ---

4. In the terminal, type the following command and press enter:

    > npm run test
    
    - The command should open your browser, and show you a test result page!
    - Your goal is to follow the assignment instructions and write code that passes the test. If you get stuck, keep moving on and come back. Don't worry about any single test. Progress is better than perfection.

<br>
<br>


# The following section is optional to read.

## Details

### Node.js

    This is not a file, it's the program you need to download to your computer in order to do this homework. It's in the instructions above.

    Node.js is a program the compiles and runs Javascript code in the terminal.

### NPM

    NPM stands for Node Package Manager.

    It's used to download "libraries" from the NPM service. They keep a collection of many people's work, and you can download it to use.

### package.json

    This file is created by NPM, which stands for Node Package Manager. NPM is a program that connects to the internet and finds useful libraries for you, and downloads them into this folder.

    A record of what files, commands, instructions, etc... you need to run your project is put in "package.json". This includes a list of libraries that NPM will download for you.

### node_modules folder

    This folder contains all the libraries you downloaded for this project.

### package-lock.json

    This file keeps a record of exactly what you downloaded. NPM uses it, but you don't need to worry about it.

### README.md

    Readme files are common in projects. They usually will describe details about what the project is about, how to set it up, how to use it, or any other details. 

    It's basically a message from the programmer to you to help you out.

### jest.config.json

    This file works with the Jest library. It lets it know some things it should do.

### .gitignore

    Git is a program the keep track of your work. It's complicated, and worth spending some real time to learn to use it. You will need to learn it at some point.

    The .gitignore file tells git which parts of your project NOT to track. This usually includes the node_modules folder since you can just go download that with a simple command ("npm i").

### ./tests/###.test.js

    This folder contains all the tests that are run. They are written specifically for the assignment.