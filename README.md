# tetris-fun-zone

Build a Tetris game for the browser. The game should include all standard Tetris features such as grid-based gameplay, tetromino shapes, navigation controls, scoring, collision detection, and game over conditions.

Requirements:

HTML Structure:
Create a grid-based layout using HTML elements to represent the game board.
Include placeholders for displaying score, level, and upcoming tetromino.
CSS Styling:
Style the game board, tetromino shapes, and user interface elements using CSS.
Ensure clear visual distinction between active and inactive elements.
Functionality:
Handle tetromino movement, rotation, and collision detection.
Manage scoring, level progression, and game over conditions.
Implement controls for left/right movement, soft drop, hard drop, and rotation.
Tetromino Generation:
Create functions to generate and display tetromino shapes randomly.
Ensure proper rendering and positioning of tetrominoes within the grid.
Line Clearing:
Implement logic to detect completed lines and clear them from the grid.
Update score and level based on the number of lines cleared.
Level Progression:
Increase game speed (tetromino fall rate) as the player advances through levels.
Adjust difficulty to provide a challenging gameplay experience.
User Interface:
Display current score, level, and upcoming tetromino to the player.
Provide visual feedback for game state changes such as line clears and level advancements.
Game Over:
Trigger game over condition when a tetromino collides with the top of the grid.
Display game over message and final score to the player.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/tetris-fun-zone.git
cd tetris-fun-zone
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
