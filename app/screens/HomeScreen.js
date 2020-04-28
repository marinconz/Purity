import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ShadowPropTypesIOS } from 'react-native';
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
    axios.get("http://192.168.1.69:3000/ingredients")
      .then((response) => {
        setIngredients(response.data);
      });
  }, []);
  console.log(ingredients)

  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      data={ingredients}
      renderItem={({ item }) => {
        const subtitle = ` ${item.CLASIFICACIÓN} \n \n ${item.DESCRIPCIÓN}`
        return (
          <ListItem
            key= {item._id}
            title={item.NOMBRE}
            subtitle = {subtitle}
          />
        );
      }
      }
    />
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  separator: {
    height: 1,
    backgroundColor: '#CED0CE'
  }
});

