# Earth Gravity Task
### A small HTML5 canvas-based game where users can spawn balls by clicking on the canvas. The balls obey realistic physics, falling towards the bottom of the canvas and bouncing back like real-life physics.

## How to Use
##### 1. Clone the repository.
##### 2. Run webpack --config webpack.config.cjs
##### 3. Open index.html in a web browser.
##### 4. Click anywhere on the canvas to spawn a ball.
##### 5. Watch the ball fall towards the bottom, bounce, and obey realistic physics. 

## Features
##### &bull; Click to Spawn: Click anywhere on the canvas to create a new ball.
##### &bull; Realistic Physics: Balls follow gravity, fall towards the bottom, and bounce back.

## Technologies Used
#### &bull; HTML5 Canvas
#### &bull; Javascript
#### &bull; Typescript
#### &bull; Webpack
#### &bull; Physics

## Code Structure
#### &bull; index.html: Main HTML file containing the canvas and necessary scripts.
#### &bull; styles.css: CSS styles for the canvas.
#### &bull; src: Root directory

#### &emsp;animation: For animations
#### &emsp;listeners: For event listeners
#### &emsp;scripts: For Main logic
#### &emsp;types: For typescript types and interface
#### &emsp;utils: For utility functions and constants

## Description

### Sir Isaac Newton's law of universal gravitation states that every mass attracts every other mass with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.
#### Formula: F = G * (m1 * m2) / r^2

### Potential Energy:
#### In the context of gravity, potential energy is the energy an object possesses due to its position relative to other objects.
#### Formula: PE = m * g * h

### Kinetic Energy
#### Formula: KE = 0.5 * m * v^2

### Our app logic obey of this 3 laws, of course there are some low's, like inertia low, which also implemented a little bit, but the main logic of our app is based on this laws, but the main low is `
## Law of conservation of energy
### This low says, that in ideal world, if the all types of energy summary is a constant , so I've used this low, as we lived in non ideal world and there are some energy killer forces, like the air resistance force, or contact force, and our main energy decreased, so when our ball hit the bottom, or move on the contrary of the air, it loses energy and its velocity is equal to 0, and ball stopped 





# canvas
# canvas
