var express = require('express');
var router = express.Router();
//Import Cloud Vision library
const vision = require('@google-cloud/vision');

async function quickstart() {
  
  // Create Cloud Vision client
  const client = new vision.ImageAnnotatorClient({
    keyFilename: './APIKey.json'
  });

  // Detect text in a picture using textDetection function
  const [result] = await client.textDetection('/home/marinconz/Programming/ProyectoIntegrador/Purity/server/public/jabonsito.jpeg');
  const detections = result.textAnnotations;
  return detections;
}

router.get('/', async (req, res) => {
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

module.exports = router;
