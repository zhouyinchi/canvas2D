export class Canvas2D {
  public context: CanvasRenderingContext2D;
  public constructor(canvas: HTMLCanvasElement) {
    this.context = canvas.getContext("2d") as CanvasRenderingContext2D;
  }
  public drawText(text: string): void {
    this.context.save();
    this.context.textBaseline = "middle";
    this.context.textAlign = "center";

    const centerX = this.context.canvas.width * 0.5;
    const centerY = this.context.canvas.height * 0.5;

    this.context.fillStyle = "red";
    this.context.fillText(text, centerX, centerY);
    this.context.strokeStyle = "green";
    this.context.strokeText(text, centerX, centerY);
    this.context.restore();
  }
}
