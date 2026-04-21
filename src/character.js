export function createCharacter() {

  const graphics = new PIXI.Graphics();

  // gota simple
  graphics.beginFill(0x4FC3F7);
  graphics.drawCircle(0, 0, 20);
  graphics.endFill();

  // animación pulsante
  let t = 0;

  graphics.update = () => {
    t += 0.05;
    const scale = 1 + Math.sin(t) * 0.05;
    graphics.scale.set(scale);
  };

  PIXI.Ticker.shared.add(() => {
    graphics.update();
  });

  return graphics;
}