import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Telephone  from '../../components/Telephone';
import { callNumber } from '../../utility';

export default function PrescriptionsDetails ({ route, navigation }) {
  const { name, workplace, profession, phoneNumber } = route.params.prescriber;

  const onTelePhoneClick = () =>{
    callNumber(phoneNumber);
  }
  
  return (
    <View style={styles.container}>
      <Text style={[styles.name, styles.text]}>{name}</Text>
      <Text style={[styles.text]}>{workplace}</Text>
      <Text style={[styles.text]}>{profession}</Text>
      <Telephone onPress = {onTelePhoneClick}> {phoneNumber} </Telephone>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding : 10
  },  
  text:{
      textAlign: 'left',
      paddingBottom:4
  },
  name:{
    fontWeight: 'bold',
  }
});