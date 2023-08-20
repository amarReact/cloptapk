import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Home from './pages/Home';
import Teacher from './pages/Teacher';
import store from './redux/store';
import AppNav from './navigation/AppNav';
import { AuthProvider } from './utility/AuthContext';


const Stack = createStackNavigator();

export default function App() {
  return (
   <AuthProvider>
     <AppNav />
   </AuthProvider>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //    <Stack.Screen name="Login" options={{ title: "User Login" }} component={Login} />
    //     <Stack.Screen name="Teacher" component={Teacher} /> 
    //     <Stack.Screen name="Cloftware" component={Welcome} />
    //     <Stack.Screen name="Login" options={{ title: "User Login" }} component={Login} />
    //   </Stack.Navigator> 
    // </NavigationContainer>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
