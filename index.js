// Import stylesheets
import './style.css';
import three from 'three';
// Write Javascript code!
const appDiv = document.getElementById('app');
drawGuitar();
function drawGuitar() {
  const canvas = document.querySelector('#guitar');
  const ctx = canvas.getContext('2d');
  // 开启抗锯齿
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  const w = canvas.width;
  const h = canvas.height;
  const drawArc = (ctx, x, y) => {
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.beginPath();
    ctx.fillStyle = '#c6c5c3';
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.shadowColor = null;
    ctx.shadowOffsetX = null;
    ctx.shadowOffsetY = null;
    ctx.shadowBlur = null;
  };

  /**
   *
   */
  const drawChord = ({
    ctx,
    lineWidth,
    strokeStyle = '#c6c5c3',
    x,
    xoffset,
    y,
    isActive = false,
  }) => {
    ctx.beginPath();
    if (isActive) {
      strokeStyle = '#ffffff';
      ctx.shadowColor = 'rgba(255,255,255,0.8)';
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 20;
    }
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;

    ctx.moveTo(x, y);
    ctx.lineTo(x + xoffset, 1000);
    ctx.lineTo(x + xoffset, 1300);
    ctx.stroke();
    if (isActive) {
      ctx.shadowColor = null;
      ctx.shadowOffsetX = null;
      ctx.shadowOffsetY = null;
      ctx.shadowBlur = null;
    }
  };

  const drawGuitarHead = () => {
    ctx.strokeStyle = '#9f5346';

    ctx.lineWidth = 0;
    ctx.translate(w / 2, 0);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-100, 20);
    ctx.quadraticCurveTo(-200, 130, -300, 160);
    ctx.quadraticCurveTo(-230, 500, -280, 800);
    ctx.lineTo(-280, 800);
    ctx.quadraticCurveTo(-180, 850, -150, 1000);

    ctx.lineTo(-150, 1300);
    ctx.lineTo(0, 1300);
    ctx.lineTo(150, 1300);
    ctx.lineTo(150, 1000);
    ctx.quadraticCurveTo(180, 850, 280, 800);
    ctx.quadraticCurveTo(230, 500, 300, 160);
    ctx.quadraticCurveTo(200, 130, 100, 20);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = '#9f5346';
    ctx.fill();

    ctx.fillStyle = '#fefefe';
    ctx.fillRect(-150, 1000, 300, 40);

    ctx.fillStyle = '#000';
    ctx.fillRect(-150, 1040, 300, 260);

    const arcX = 180;

    let chordColor = '#c6c5c3';

    drawChord({
      ctx,
      lineWidth: 5,
      strokeStyle: chordColor,
      x: -arcX,
      xoffset: 160,
      y: 260,
    });
    drawChord({
      ctx,
      lineWidth: 6,
      strokeStyle: chordColor,
      x: -arcX + 10,
      xoffset: 100,
      y: 460,
    });
    drawChord({
      ctx,
      lineWidth: 7,
      strokeStyle: chordColor,
      x: -arcX + 20,
      xoffset: 50,
      y: 660,
    });
    drawChord({
      ctx,
      lineWidth: 4,
      strokeStyle: chordColor,
      x: arcX,
      xoffset: -160,
      y: 260,
    });
    drawChord({
      ctx,
      lineWidth: 3,
      strokeStyle: chordColor,
      x: arcX - 10,
      xoffset: -100,
      y: 460,
      isActive: true,
    });
    drawChord({
      ctx,
      lineWidth: 2,
      strokeStyle: chordColor,
      x: arcX - 20,
      xoffset: -40,
      y: 660,
    });

    drawArc(ctx, -arcX, 260);
    drawArc(ctx, -arcX + 10, 460);
    drawArc(ctx, -arcX + 20, 660);
    drawArc(ctx, arcX, 260);
    drawArc(ctx, arcX - 10, 460);
    drawArc(ctx, arcX - 20, 660);

    const drawBtn = ({ x, y, direction = 'left' }) => {
      ctx.strokeStyle = '#ffffff';
      ctx.fillStyle = '#c6c5c1';
      ctx.beginPath();
      ctx.moveTo(x, y);
      if (direction === 'left') {
        ctx.lineTo(x - 35, y);
        ctx.quadraticCurveTo(x - 35, y - 30, x - 45, y - 40);
        ctx.lineTo(x - 45, y - 40);
        ctx.lineTo(x - 85, y - 40);
        ctx.quadraticCurveTo(x - 115, y + 10, x - 85, y + 60);
        ctx.lineTo(x - 85, y + 60);
        ctx.lineTo(x - 45, y + 60);
        ctx.quadraticCurveTo(x - 35, y + 60, x - 35, y + 20);
        ctx.lineTo(x - 35, y + 20);
        ctx.lineTo(x - 5, y + 20);
      } else if (direction === 'right') {
        ctx.lineTo(x + 35, y);
        ctx.quadraticCurveTo(x + 35, y - 30, x + 45, y - 40);
        ctx.lineTo(x + 45, y - 40);
        ctx.lineTo(x + 85, y - 40);
        ctx.quadraticCurveTo(x + 115, y + 10, x + 85, y + 60);
        ctx.lineTo(x + 85, y + 60);
        ctx.lineTo(x + 45, y + 60);
        ctx.quadraticCurveTo(x + 35, y + 60, x + 35, y + 20);
        ctx.lineTo(x + 35, y + 20);
        ctx.lineTo(x + 5, y + 20);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    };

    drawBtn({ x: -295, y: 260 });

    drawBtn({ x: -285, y: 460 });

    drawBtn({ x: -285, y: 660 });

    drawBtn({ x: 295, y: 260, direction: 'right' });

    drawBtn({ x: 285, y: 460, direction: 'right' });

    drawBtn({ x: 285, y: 660, direction: 'right' });
  };

  drawGuitarHead();
}
