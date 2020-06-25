import React, { useEffect, useRef } from 'react';
// import Sketch from 'react-p5';
import p5 from 'p5';
// import P5Wrapper from 'react-p5-wrapper';

// import { Container } from './styles';

import Sketch from './sketch';

let sketch;

function Main() {
  const refSketch = useRef();

  useEffect(() => {
    sketch = new p5(Sketch, 'sketchDiv', refSketch);
  }, []);

  return <div id="sketchDiv" ref={refSketch} />;
  // <P5Wrapper sketch={Sketch} />;
}

export default Main;

// {/* <Sketch setup={setup} draw={draw} /> */}

// const [backgrounImage, setBackgrounImage] = useState('');
// const [personagemImage, setPersonagemImage] = useState('');
// const [backgroundSound, setBackgroundSound] = useState('');

// const [position, setPosition] = useState({
//   X: initialParams.position.X,
//   Y: initialParams.position.Y,
// });
// const [cenarioParmas, setCenarioParmas] = useState({
//   position: {
//     one: initialParams.cenario.initialPosiotion,
//     two: initialParams.canvas.width,
//     height: 0,
//   },
// });

// const preload = (p5) => {
//   setBackgrounImage(p5.loadImage(imageBackground));
//   setPersonagemImage(p5.loadImage(imagePersonagemCorrendo));
// };

// const setup = (p5, canvasParentRef) => {
//   const { width, height } = initialParams.canvas;

//   p5.createCanvas(width, height).parent(canvasParentRef);

//   preload(p5);
// };

// const moveBackground = () => {
//   setCenarioParmas({
//     position: {
//       ...cenarioParmas.position,
//       one: cenarioParmas.position.one - initialParams.cenario.velocidade,
//       two: cenarioParmas.position.two - initialParams.cenario.velocidade,
//     },
//   });

//   if (cenarioParmas.position.one < -initialParams.canvas.width)
//     setCenarioParmas({
//       position: {
//         ...cenarioParmas.position,
//         one: initialParams.canvas.width,
//       },
//     });

//   if (cenarioParmas.position.two < -initialParams.canvas.width)
//     setCenarioParmas({
//       position: {
//         ...cenarioParmas.position,
//         two: initialParams.canvas.width,
//       },
//     });
// };

// const draw = (p5) => {
//   const { canvas, personagem } = initialParams;
//   const { size, paramsRender } = personagem;
//   const { X, Y } = position;

//   const personagemPositionY = canvas.height - Y;

//   p5.image(
//     backgrounImage,
//     cenarioParmas.position.one,
//     cenarioParmas.position.height,
//     canvas.width,
//     canvas.height
//   );
//   p5.image(
//     backgrounImage,
//     cenarioParmas.position.two,
//     cenarioParmas.position.height,
//     canvas.width,
//     canvas.height
//   );
//   p5.image(
//     personagemImage,
//     X,
//     personagemPositionY,
//     size.width,
//     size.height,
//     paramsRender.initialWidth,
//     paramsRender.initialHeight,
//     paramsRender.finalWidth,
//     paramsRender.finalHeight
//   );

//   moveBackground();
// };
