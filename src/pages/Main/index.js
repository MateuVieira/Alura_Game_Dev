import React, { useState, useEffect } from 'react';
import Sketch from 'react-p5';
// import p5 from 'p5;'

import { Container } from './styles';

import imageBackground from '../../assets/imagens/cenario/floresta.png';
import imagePersonagemCorrendo from '../../assets/imagens/personagem/correndo.png';

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

function Main() {
  const [position, setPosition] = useState({
    X: initialParams.position.X,
    Y: initialParams.position.Y,
  });
  const [backgrounImage, setBackgrounImage] = useState('');
  const [personagemImage, setPersonagemImage] = useState('');
  const [cenarioParmas, setCenarioParmas] = useState({
    position: {
      one: initialParams.cenario.initialPosiotion,
      two: initialParams.canvas.width,
      height: 0,
    },
  });

  const preload = (p5) => {
    setBackgrounImage(p5.loadImage(imageBackground));
    setPersonagemImage(p5.loadImage(imagePersonagemCorrendo));
  };

  const setup = (p5, canvasParentRef) => {
    const { width, height } = initialParams.canvas;

    p5.createCanvas(width, height).parent(canvasParentRef);

    preload(p5);
  };

  const moveBackground = () => {
    setCenarioParmas({
      position: {
        ...cenarioParmas.position,
        one: cenarioParmas.position.one - initialParams.cenario.velocidade,
        two: cenarioParmas.position.two - initialParams.cenario.velocidade,
      },
    });

    if (cenarioParmas.position.one < -initialParams.canvas.width)
      setCenarioParmas({
        position: {
          ...cenarioParmas.position,
          one: initialParams.canvas.width,
        },
      });

    if (cenarioParmas.position.two < -initialParams.canvas.width)
      setCenarioParmas({
        position: {
          ...cenarioParmas.position,
          two: initialParams.canvas.width,
        },
      });
  };

  const draw = (p5) => {
    const { canvas, personagem } = initialParams;
    const { size, paramsRender } = personagem;
    const { X, Y } = position;

    const personagemPositionY = canvas.height - Y;

    p5.image(
      backgrounImage,
      cenarioParmas.position.one,
      cenarioParmas.position.height,
      canvas.width,
      canvas.height
    );
    p5.image(
      backgrounImage,
      cenarioParmas.position.two,
      cenarioParmas.position.height,
      canvas.width,
      canvas.height
    );
    p5.image(
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

    moveBackground();
  };

  return (
    <Container>
      <Sketch setup={setup} draw={draw} />
    </Container>
  );
}

export default Main;
