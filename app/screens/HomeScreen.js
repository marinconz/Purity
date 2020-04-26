import * as React from 'react';
import { StyleSheet, Text, View, FlatList, ShadowPropTypesIOS } from 'react-native';

export default function HomeScreen() {
  
    const list = 
    [{key:'Ingrediente 0', classification: 'Toxic', decription: ''},
    {key:'Ingrediente 1', des: 'Toxic'},
    {key:'Ingrediente 2', des: 'Toxic'},
    {key:'Ingrediente 3', des: 'Toxic'},
    {key:'Ingrediente 4', des: 'Toxic'},
    {key:'Ingrediente 5', des: 'Toxic'},
    {key:'Ingrediente 6', des: 'Toxic'},
    {key:'Ingrediente 7', des: 'Toxic'},
    {key:'Ingrediente 8', des: 'Toxic'},
  ];
  
    return (
      <View style={styles.container}>
        
        { list.length > 0 ?
          <FlatList data={list}
          renderItem={({item})=> (
            <View style = {{borderBottomColor: '#999', padding: 10}}>
            <Text style = {{fontSize: 50, fontWeight: 'bold', color:'#333'}}>
              {item.key}
            </Text>
            <Text style={{fontSize:36, color: '#999'}}>
              {item.des}
            </Text>
            </View>

          ) }/>
          :

          <Text style = {{fontSize:48, color: 'red'}}>
            Sorry, no ingredients avaliable.
          </Text>
        }
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20
  },
  listitem: {
    fontSize:45,
    fontWeight: 'bold',
    color: '#333',
    borderBottomWidth: 2,
    borderBottomColor: '#999'
  }
});

