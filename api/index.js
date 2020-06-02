const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
const connectionString ='mongodb+srv://stellor:yU9Ulk9k1DARdiet@puritycluster-uscoz.mongodb.net/test?retryWrites=true&w=majority';

const DB_NAME="purity";
var database, collection;
async function quickstart() {
  //Esto importa la libreria de Google Cloud vision
  const vision = require('@google-cloud/vision');

  // Crea un cliente de Cloud Vision
  const client = new vision.ImageAnnotatorClient({
    keyFilename: '/home/santiago/Documents/purity/Purity/api/APIKey.json'
  });

  // Detecta texto en una foto mediante la funcion textDetection
  const [result] = await client.textDetection('/home/santiago/Documents/purity/Purity/api/tello.jpg');
  const detections = result.textAnnotations;
  return detections;
}

async function buscar(palabraActual){
  return await collection.findOne({"NOMBRE":palabraActual});
}

app.get('/', async (req, res) => {
  let palabras = [];
  let detections = await quickstart();
  palabras = detections[0].description.replace(/\n/g, '').split(',')
  palabras = palabras.map(function(a){return a.trim()})  
  let resultados = []
    for (let i = 0; i < palabras.length; i++) {
      let palabraActual = palabras[i];
      let resultadoActual = await buscar(palabraActual)
      resultados.push(resultadoActual)
    }
    var resultadosFiltrados = resultados.filter(Boolean);
    console.log(palabras)
  return res.status(200).json({
    error: false,
    resultadosFiltrados
  });
}); 

app.listen(3000, '127.0.0.1', () => {
  console.log('Server running')
  MongoClient.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true } , (error, client)=>{
    if (error){
      throw error;
    }
    database = client.db(DB_NAME);
    collection = database.collection('ingredients')
    console.log("Conectado a " + DB_NAME);
});
});
