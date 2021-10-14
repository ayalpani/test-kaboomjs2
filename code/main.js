import kaboom from "kaboom";

// initialize context
kaboom();
loadPedit("player2", "sprites/player2.pedit");
loadPedit("ground", "sprites/ground.pedit");
loadPedit("gold", "sprites/gold.pedit");
loadPedit("enemy", "sprites/enemy.pedit");
// add a character to screen
const player = add([
	// list of components
	sprite("player2"),
  scale(10),
	pos(50, 50),
	area(),
  body()
]);

addLevel([
  "   $  @x",
  "   $ @ x",
  "   $   x",
  "xxxxxxxx",
], {
  width: 200,
  height: 200,
  "x": () => [sprite('ground'), scale(10),area(), solid()],
  "$": () => [sprite('gold'),   scale(10)],
  "@": () => [sprite('enemy'),  scale(10), area(), body(), 'dangerous']
})

MOVE_SPEED= 1000
keyDown('right', ()  => {
  player.move(MOVE_SPEED, 0)
})

keyDown('left', ()  => {
  player.move(-MOVE_SPEED,0)
})


keyDown('up', ()  => {
  player.move(0,-MOVE_SPEED)
})

keyDown('space', ()  => {
  player.jump()
})




player.collides('dangerous', () => {
  destroy(player)
})
