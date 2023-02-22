import { useNavigation, ParamListBase } from '@react-navigation/native'
import { Text, View, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'


export default () => {
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()

    return (
        <View>
            <Text>Home screen</Text>
            <Button
                title="Show the detail"
                onPress={() => navigate('Detail')} />
        </View>
    )
}