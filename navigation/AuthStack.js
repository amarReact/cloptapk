import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Teacher from '../pages/Teacher';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Home from '../pages/Home';
import Resetpassword from '../pages/Resetpassword';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const AuthStack = () => {
    return (
        <NavigationContainer independent={true}>
          <Drawer.Navigator initialRouteName="Teacher">
            <Drawer.Screen name="Teacher" component={Teacher} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Resetpassword" component={Resetpassword} />
          </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default AuthStack;


