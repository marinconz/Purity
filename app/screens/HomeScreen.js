import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ShadowPropTypesIOS } from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';

export default function HomeScreen() {
  const [ingredients, setIngredients] = useState([]);

  const navigationOptions = ({ navigation }) => {
    return {
      title: 'Ingredientes'
    }
  };

  useEffect(() => {
    axios.get("http://192.168.1.54:7000/ingredients")
      .then((response) => {
        setIngredients(response.data);
      });
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={ingredients}
        renderItem={({ item }) => {
          const subtitle = ` ${item.CLASIFICACIÓN} \n \n ${item.DESCRIPCIÓN}`
          return (
            <ListItem style = {styles.item}
              key={item._id}
              title ={item.NOMBRE}
              subtitle={subtitle}
            />

          );
        }
        }
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    color: '#f0ffff',
  },
  title: {
    fontSize: 40,

  },
  separator: {
    height: 1,
    backgroundColor: '#CED0CE'
  }
});

