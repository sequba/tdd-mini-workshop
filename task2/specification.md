# Rock - Paper - Scissors

Your team is starting a new project: the rock-paper-scissors game.
You don't know yet what platform it will run on (console app, web app, desktop app), but you know the game's rules, so you start building the module responsible for the game mechanics in `TypeScipt`.

## Gameplay

- 2-player game (both human players)
- The game consists of a single round:
  1. Each player makes a choice
  2. The game calculates the result of the round
  3. The game ends

## Rules

- Possible choices of the players: `rock`, `paper`, `scissors`
- Who wins?
  - `rock` beats `scissors`
  - `scissors` beats `paper`
  - `paper` beats `rock`
  - same choices of each player result in a draw

## Task

Knowing the requirements and the context, implement the game mechanics. For all unspecified matters, you are free to make your design decisions, but keep in mind that new requirements might arrive at any time. Anticipate the change of specification and make the solution open for modifications.

When you're done with the basic version of a game, you can start working on phase 2 and - then - phase 3.

## Phase 2: single-player mode

Add a single-player mode, where the human player can play against an AI. The AI player should make random choices. The human player should see the AI player's choices.

## Phase 3: multi-round game

Now, the game consists of multiple rounds. The number of rounds should be configured before the start of the game. The game calculates each player's score according to the table:

- `WIN` = 3 point
- `DRAW` = 1 point
- `LOOSE` = 0 point
