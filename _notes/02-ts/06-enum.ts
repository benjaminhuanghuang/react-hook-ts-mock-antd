enum Direction {
  Up = 10, // from 0 by default
  Down,
  Left,
  Right,
}


console.log(Direction.Up);
console.log(Direction[0]);


const enum Dir {
  Up = 'UP',
  Down="DOWN",
  Left="LEFT",
  Right="RIGHT",
}


console.log(Dir.Up === 'UP');