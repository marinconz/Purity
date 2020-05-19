import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native'
import { questions, resultTexts} from '../quiz/quiz'

export default function TestScreen() {

    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const onQuestionAnswer = value => {
        setQuestionIndex(questionIndex+1);
        setScore(score+value); 
    }

    return (
        <View>
            
            {questionIndex < questions.length ? (
                <>
                <Text>
                {questions[questionIndex].question}
                </Text>
                {questions[questionIndex].answers.map(answer => {
                    return (
                        <TouchableOpacity onPress={() => onQuestionAnswer(answer.value)}>
                            <Text>
                                {answer.text}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
                </>
            ):(
                <>
                <Text>¡Gracias por tomar el test!</Text>
                <Text>Tu puntaje es: {score}</Text>
                <Text>
                    {resultTexts[Math.floor(score/((questions.length+1)/4))]}
                </Text>
                </>
            )}
            

            

        </View>
    );
}