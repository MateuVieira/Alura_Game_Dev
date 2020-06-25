import imageBackground from '../../assets/imagens/cenario/floresta.png';
import imagePersonagemCorrendo from '../../assets/imagens/personagem/correndo.png';

// import trilhaSonora from '../../assets/sons/trilha_jogo.mp3';

const initialParams = {
  position: {
    X: 0,
    Y: 270,
  },
  canvas: {
    width: window.innerWidth * 0.995,
    height: window.innerHeight * 0.996,
  },
  cenario: {
    velocidade: 0.5,
    initialPosiotion: 0,
  },
  personagem: {
    size: {
      width: 220,
      height: 270,
    },
    paramsRender: {
      initialWidth: 0,
      initialHeight: 0,
      finalWidth: 220,
      finalHeight: 270,
    },
  },
};

let backgroundImage;
let personagemImage;
// let backgroundSound;

function Sketch(p) {
  p.preload = () => {
    backgroundImage = p.loadImage(imageBackground);
    personagemImage = p.loadImage(imagePersonagemCorrendo);
  };

  p.setup = () => {
    const { width, height } = initialParams.canvas;

    p.createCanvas(width, height);
  };

  p.draw = () => {
    const { canvas, personagem, position } = initialParams;
    const { size, paramsRender } = personagem;
    const { X, Y } = position;

    const personagemPositionY = canvas.height - Y;
    p.background(backgroundImage);

    p.image(
      personagemImage,
      X,
      personagemPositionY,
      size.width,
      size.height,
      paramsRender.initialWidth,
      paramsRender.initialHeight,
      paramsRender.finalWidth,
      paramsRender.finalHeight
    );
  };
}

export default Sketch;
