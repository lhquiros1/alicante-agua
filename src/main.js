const app = new PIXI.Application({
  width: 1080,
  height: 1920,
  backgroundColor: 0x0a0f1a
});

document.body.appendChild(app.view);

// TEST DIRECTO (sin imports)
const g = new PIXI.Graphics();

g.beginFill(0x4FC3F7);
g.drawCircle(0, 0, 30);
g.endFill();

g.x = 540;
g.y = 300;

app.stage.addChild(g);

// animación simple
app.ticker.add(() => {
  g.y += 1;
  if (g.y > 2000) g.y = -50;
});
