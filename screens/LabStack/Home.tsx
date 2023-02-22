import { useNavigation, ParamListBase } from '@react-navigation/native'
import { Text, View, Button, Pressable } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { FlatList } from 'react-native-gesture-handler'

import labs from '../../assets/data/labs.json'
import { Lab as ILab } from '../../interfaces/Lab'
import { lab } from '../../styles/lab'
import {container} from '../../styles/container'

export default () => {
    let count = 0
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()

    //1. haal iets uit object
    //2. geef aan wat het is
    const showLab = ({ item }: { item: ILab }) => { 
        count++
        const localCount = count.toString().padStart(2, '0')

        return (
            <Pressable style={lab.container} onPress={() => {
                navigate('Detail', {
                    lab: item,
                    count: localCount,
                })
            }}>
                <Text style={lab.increment}>{localCount}</Text>
                <Text style={lab.title}>{item.title}</Text>
                <Text style={lab.rating}>{'★'.repeat(item.rating)}</Text>
            </Pressable>
        )
    }

    return (
        <View style={container.generic}>
            <FlatList
                data={labs}
                renderItem={showLab}
            />
        </View>
    )
}