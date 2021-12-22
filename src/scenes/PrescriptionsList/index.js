import React, { useEffect, useCallback }  from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const prescriptions = require('../../assets/prescriptions.json');

export default function PrescriptionsList ({ navigation }) {

  useEffect(() => {
    // Update the document title using the browser API

  },[]);

  function PrescriptionItem ({item}) {    
    const outStock = item.article.stockStatus.toLowerCase() === "outofstock";
    return(
      <View style={[styles.item, outStock && styles.outStock]}>
        <TouchableOpacity
          style={styles.button}        
          onPress={() => onPress( item )}>
          <Text style={[styles.text, styles.productName]}> {item.article.productName }</Text>
          <Text style={styles.text}> {item.article.preamble }</Text>
        </TouchableOpacity>
      </View>
    )
  }

const renderItem = useCallback(({item}) => <PrescriptionItem item={item}/>,[]);
const keyExtractor = useCallback((item) => item.prescriptionId.toString(), []);

const onPress = ( prescription ) => {
  const {prescriber} = prescription
  navigation.navigate('Details', {prescriber: prescriber})
}
  return (
    <View style={styles.container}>      
      <FlatList 
        data={prescriptions}        
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        maxToRenderPerBatch={8}
        initialNumToRender={10}
         />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  item: {
    flex: 1,
    backgroundColor: '#AFD7AD',
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 10,
  },
  button:{
    flex: 1
  },
  outStock:{
    backgroundColor: '#FF0000',
  },
  text:{
    textAlign: 'left',
    paddingBottom:4
  },
  productName:{
    fontWeight: 'bold',
  }
});