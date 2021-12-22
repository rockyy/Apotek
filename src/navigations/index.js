import {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app-navigator';

export default function RootNavigator ({ navigation }) {
  useEffect(() => {
  }, []);
  return (    
    <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>      
  )
};
