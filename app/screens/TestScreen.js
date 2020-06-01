import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { questions, resultTexts} from '../quiz/quiz'

export default function TestScreen() {

    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const onQuestionAnswer = value => {
        setQuestionIndex(questionIndex+1);
        setScore(score+value); 
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#f0f8ff',
        },
        questions: {
          color: '#2f4f4f',
          fontWeight: 'bold',
          fontSize: 35,
          alignContent: 'center',
        },
        answers: {
            marginTop: 25,
          color: '#808080',
          fontSize: 25,
        },
        result: {
            color: '#5f9ea0',
            fontSize: 35,
            paddingTop: 30,
            fontWeight: 'bold',
        },
        mensaje : {
            fontSize: 25,
            color: '#808080',
            paddingTop: 45,
            
        }
      });

    return (
        <View style={styles.container}>
            
            {questionIndex < questions.length ? (
                <>
                <Text style={styles.questions} >
                {questions[questionIndex].question}
                </Text>
                {questions[questionIndex].answers.map(answer => {
                    return (
                        <TouchableOpacity onPress={() => onQuestionAnswer(answer.value)}>
                            <Text style={styles.answers}>
                                {answer.text}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
                </>
            ):(
                <>
                <Text style = {styles.questions}>¡Gracias por tomar el test!</Text>
                <Text style = {styles.result}>Tu puntaje es: {score}</Text>
                <Text style = {styles.mensaje}>
                    {resultTexts[Math.floor(score/((questions.length+1)/4))]}
                </Text>
                </>
            )}
            

            

        </View>
    );
    
}