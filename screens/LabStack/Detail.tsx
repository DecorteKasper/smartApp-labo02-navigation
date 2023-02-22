import { Text, View, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation, ParamListBase } from '@react-navigation/native'
import { Lab } from '../../interfaces/Lab'
import { container } from '../../styles/container'
import {lab as labStyles} from '../../styles/lab'
import { useEffect } from 'react'


export default (props: any) => {
    const { navigate, setOptions, goBack } = useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()

    const { lab, count }: { lab: Lab; count: number } = props.route.params

    //voer deze functie uit als...
    useEffect(() => {
        setOptions({ title: lab.title })
        //iets in deze array veranderd
    }, [lab])


    //Todo: vang gegevens van de params op (lab)
    return (
        <View style={container.generic}>
            <Text style={labStyles.increment}>{ count }</Text>
            <Text style={labStyles.title}>{lab.title}</Text>
            <Text style={labStyles.description}>{lab.description}</Text>
            <Text style={labStyles.rating}>{'★'.repeat(lab.rating)}</Text>
          
             <Button
                title="Go back"
                onPress={() => goBack()} />
        </View>
    )
}