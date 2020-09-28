'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 50;
const TEXT_WIDTH = 50;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 40;


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

window.renderStatistics = function (ctx) {
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

  createText(ctx, `#000`, `16px PT Mono`, `Вы`, 150, 250);
  ctx.fillStyle = `rgba(255, 0, 0, 1)`;
  ctx.fillRect(150, 90, 40, 150);

  createText(ctx, `#000`, `16px PT Mono`, `Кекс`, 240, 250);
  ctx.fillStyle = `hsla(240, 100%, 49%, 1)`;
  ctx.fillRect(240, 90, 40, 150);

  createText(ctx, `#000`, `16px PT Mono`, `Катя`, 330, 250);
  ctx.fillStyle = `hsla(240, 100%, 49%, 0.5)`;
  ctx.fillRect(330, 90, 40, 150);

  createText(ctx, `#000`, `16px PT Mono`, `Игорь`, 420, 250);
  ctx.fillStyle = `hsla(240, 100%, 49%, 0.7)`;
  ctx.fillRect(420, 90, 40, 150);
};
