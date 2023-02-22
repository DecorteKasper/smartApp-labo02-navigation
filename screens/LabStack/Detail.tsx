import { Text, View, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation, ParamListBase } from '@react-navigation/native'


export default () => {
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()

    return (
        <View>
            <Text>Detail screen</Text>
             <Button
                title="Go home"
                onPress={() => navigate('Home')} />
        </View>
    )
}