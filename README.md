🎲 Dicee Game

An interactive, browser-based Dicee Game built with HTML, CSS, and JavaScript. This fun and simple game lets two players roll virtual dice, and the page instantly declares the winner based on the higher roll. Perfect for demonstrating beginner-to-intermediate JavaScript skills, DOM manipulation, and random number generation.

📜 Overview

The Dicee Game is a quick-play web application designed to simulate rolling two dice. With every refresh (or click of a "Play Again" button, if implemented), each die is assigned a random value between 1 and 6. The game then determines which player rolled the higher number, and displays the result directly on the page.

This project showcases random number generation, dynamic image rendering, and real-time DOM updates, making it a perfect learning resource for understanding how JavaScript can bring interactivity to static HTML and CSS designs.

🛠️ Technologies Used

HTML5 – Structure and layout of the game.

CSS3 – Styling, layout design, and visual enhancements.

JavaScript (ES6) – Logic for dice rolling, randomization, and DOM updates.

🎮 How It Works

Roll the Dice – When the game loads or refreshes, JavaScript generates two random numbers between 1 and 6.

Update the UI – The dice images change based on the random numbers generated.

Declare Winner – The script compares the two numbers:

If Player 1's roll is higher → Player 1 Wins!

If Player 2's roll is higher → Player 2 Wins!

If both rolls are the same → It's a Draw!

📂 Project Structure
/dicee-game
│── index.html      # Main game structure
│── styles.css      # Game styling
│── script.js       # Game logic
└── images/         # Dice face images (dice1.png to dice6.png)

🚀 Features

🎲 Randomized Dice Rolls every time the game runs.

🎯 Instant Result Display with winner announcement.

🖼️ Dynamic Image Switching for each dice face.

📱 Responsive Design for mobile and desktop play.

🔮 Future Enhancements

Add a "Roll Again" button without page reload.

Track score over multiple rounds.

Add sound effects for rolling dice.

Multiplayer online support.
