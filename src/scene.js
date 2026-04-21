import { createCharacter } from './character.js';

export function createScene(app, datos) {

  const container = new PIXI.Container();
  app.stage.addChild(container);

  // personaje (gota)
  const gota = createCharacter();
  container.addChild(gota);

  gota.x = 540;
  gota.y = 200;

  let velocidad = 1;

  // usar consumo para velocidad
  const mesActual = 7; // prueba
  const consumo = datos?.consumo?.mensual?.find(m => m.mes === mesActual);

  if (consumo) {
    velocidad = consumo.total / 1500000; // normalización simple
  }

  app.ticker.add(() => {
    gota.y += velocidad;

    // loop vertical
    if (gota.y > 2000) {
      gota.y = -100;
    }
  });
}