const express = require('express');
const app = express();

async function quickstart() {
  //Esto importa la libreria de Google Cloud vision
  const vision = require('@google-cloud/vision');

  // Crea un cliente de Cloud Vision
  const client = new vision.ImageAnnotatorClient({
    keyFilename: '/home/santiago/Desktop/api-cloud-vision/APIKey.json'
  });

  // Detecta texto en una foto mediante la funcion textDetection
  const [result] = await client.textDetection('/home/santiago/Desktop/api-cloud-vision/tello.jpg');
  const detections = result.textAnnotations;
  return detections;
}

app.get('/', async (req, res) => {
  let palabras = {};
  let detections = await quickstart();
 //itera por las palabras detectadas y las imprime una por una 
  detections.forEach((text, i) => {
    palabras['palabra' + i] = text.description;
  });

  return res.status(200).json({
    error: false,
    palabras
  });
});

app.listen(3000, '127.0.0.1', () => console.log('Server running'));
