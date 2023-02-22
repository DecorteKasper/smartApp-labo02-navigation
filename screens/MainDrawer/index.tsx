import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerNavigationOptions, DrawerScreenProps } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';
import Overview from './Overview';
import Settings from './Settings';
import { colors } from '../../styles/colors';
import { View, Text } from 'react-native';
import { lab } from '../../styles/lab';

const Drawer = createDrawerNavigator();

const screenOptions: DrawerNavigationOptions = {
    headerStyle: {
        backgroundColor: colors.alpha,
    },
    headerTintColor: colors.light,
    // header: (props: DrawerScreenProps<ParamListBase>) => {
    //     return (
    //         <View style={{
    //                 alignItems: 'center',
    //                 justifyContent: 'flex-end',
    //                 height: 100,
    //                 backgroundColor: 'orange',
    //             }}
    //         >
    //             <Text>{ props.route.name}</Text>
    //         </View>
    //     )
    // }

}
    
export function MainDrawer() {
  return (
    <Drawer.Navigator screenOptions={screenOptions}>
      <Drawer.Screen name="Overview" component={Overview} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  )
}