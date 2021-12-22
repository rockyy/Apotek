import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PrescriptionsList from '../scenes/PrescriptionsList';
import PrescriptionsDetails from '../scenes/PrescriptionsDetails';

const Stack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={PrescriptionsList} options={{ title: 'Prescriptions' }}/>
        <Stack.Screen name="Details" component={PrescriptionsDetails} options={{ title: 'Prescriber' }}/>
      </Stack.Navigator>
  );
}
export default function AppNavigator({}) {
    return <HomeStackScreen />;
}
