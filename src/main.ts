import { Canvas2D } from "./canvas2D";

const canvas2D = new Canvas2D(
  document.getElementById("container") as HTMLCanvasElement
);
canvas2D.drawText("123");
