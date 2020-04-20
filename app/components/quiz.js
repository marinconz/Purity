import React, { Component } from 'react';
import { Stylesheet, Text, View, Button, Dimenssions, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
//ANIMBUTTON
//vector icons
const { width, height } = Dimensions.get('window')
let arrnew = []
const jsonData = { "quiz" : {
    "quiz1" : {
        "question1" : {
            "correctOption" : "option4",
            "options" : {
                "option1" : "Marca",
                "option2" : "Precio",
                "option3" : "Color",
                "option4" : "Ingredientes"
            },
            "question" : "Al comprar un producto de limpieza o de higiene personal, ¿en qué te fijas?"
        },
        "question2" : {
            "correctOption" : "option3",
            "options" : {
                "option1" : "Si",
                "option2" : "Depende de si es grasa líquida o sólida",
                "option3" : "No, se deben desechar en lugares específicos",
            },
            "question" : "¿Es bueno echar residuos de grasas por el cifón?"
        },
        "question3" : {
            "correctOption" : "option2",
            "options" : {
                "option1" : "Los desechos orgánicos",
                "option2" : "Los detergentes, las grasas, los suavizantes de ropa, etc.",
                "option3" : "Los restos de bebidas",
                "option4" : "Todas las anteriores"
            },
            "question" : "¿Cual de estas actividades puede producir conaminación del agua?"

    }
}

}