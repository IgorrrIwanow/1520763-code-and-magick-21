'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const BAR_GAP = 50;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 40;
const BAR_Y = 90;


let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let createText = function (ctx, color, font, text, x, y) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textBaseline = `hanging`;
  ctx.fillText(text, x, y);
};

let getMaxElement = function(arr) {
  let maxElement = arr[0];
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  createText(ctx, `#000`, `16px PT Mono`, `Ура Вы победили!`, 120, 30);
  createText(ctx, `#000`, `16px PT Mono`, `Список результатов:`, 120, 50);

  let barColors = [`hsla(0, 100%, 50%, 1)`, `hsla(240, 100%, 50%, 0.2)`, `hsla(240, 100%, 50%, 0.5)`, `hsla(240, 100%, 50%, 0.7)`]

  for (let i = 0; i < players.length; i++) {
    createText(ctx, `#000`, `16px PT Mono`, players[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + BAR_Y + BAR_HEIGHT);
    ctx.fillStyle = barColors[i];
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, BAR_HEIGHT);
  }
};
