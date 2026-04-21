import { createScene } from './scene.js';

const app = new PIXI.Application({
  width: 1080,
  height: 1920,
  backgroundColor: 0x0a0f1a
});

document.body.appendChild(app.view);

// ⚠️ SIN JSON
createScene(app, null);
