export default class Cenario {
  constructor(sketch, image, velocidade, width, height) {
    this.sketch = sketch;
    this.image = image;
    this.velocidade = velocidade;
    this.width = width;
    this.height = height;
    this.x1 = 0;
    this.x2 = width;
  }

  exibe() {
    this.sketch.image(this.image, this.x1, 0, this.width, this.height);
    this.sketch.image(this.image, this.x2, 0, this.width, this.height);
  }

  move() {
    this.x1 -= this.velocidade;
    this.x2 -= this.velocidade;

    if (this.x1 < -this.width) this.x1 = this.width;

    if (this.x2 < -this.width) this.x2 = this.width;
  }
}
