import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

export default function App() {
  //Key: keep track
  const [ingredient] = [
    {name: 'ingredient1', key: '1'},
    {name: 'ingredient2', key: '2'},
    {name: 'ingredient3', key: '3'},
    {name: 'ingredient4', key: '4'},
    {name: 'ingredient5', key: '5'},
    {name: 'ingredient6', key: '6'},
    {name: 'ingredient7', key: '7'},
  ];

  return (
    <View style={StyleSheet.container}>
      <ScrollView>
        {ingredient.map(item => {
          return (
            <View key={item.key}>
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'grey',
    fontSize: 24,
  },
});
