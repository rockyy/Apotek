import { Text, TouchableOpacity } from 'react-native';
const Telephone = ({ onPress, children }) => {
return (
    <TouchableOpacity onPress={onPress} >
        <Text >
            {children}
        </Text>
    </TouchableOpacity>
)};
export default Telephone;
