import { createScene } from './scene.js';

const app = new PIXI.Application({
  width: 1080,
  height: 1920,
  backgroundColor: 0x0a0f1a
});

document.getElementById('app').appendChild(app.view);

// responsive
function resize() {
  const scale = window.innerHeight / 1920;
  app.stage.scale.set(scale);
}
window.addEventListener('resize', resize);
resize();

// cargar datos
let datos = null;

fetch('./data/alicante_metabolismo_agua_2024_difracciones.json')
  .then(res => res.json())
  .then(json => {
    datos = json;
    console.log('Datos de metabolismo del agua cargados:', {
      ciudad: datos?.metadatos?.ciudad,
      ano: datos?.metadatos?.año,
      consumoMensual: datos?.consumo?.mensual?.length ?? 0,
      bloques: Object.keys(datos ?? {})
    });
    createScene(app, datos);
  });
