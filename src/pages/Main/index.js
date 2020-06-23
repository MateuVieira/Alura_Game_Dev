import React, { useState } from 'react';
import Sketch from 'react-p5';

import { Container } from './styles';

const initialParams = {
  position: {
    X: 0,
    Y: 0,
  },
  canvas: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
};

function Main() {
  const [posistion, setPosition] = useState({
    x: initialParams.position.X,
    y: initialParams.position.Y,
  });

  const setup = (p5, canvasParentRef) => {
    const { width, height } = initialParams.canvas;

    p5.createCanvas(width, height).parent(canvasParentRef);
  };

  const draw = (p5) => {
    const { X, Y } = posistion;

    p5.background(220);
    // p5.ellipse(X, Y, 70, 70);
    // setPosition({
    //   ...posistion,
    //   x: X + 1,
    // });
  };

  return (
    <Container>
      <Sketch setup={setup} draw={draw} />
    </Container>
  );
}

export default Main;
