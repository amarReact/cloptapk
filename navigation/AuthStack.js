import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Teacher from '../pages/Teacher';
import Header from '../component/Header';
import Footer from '../component/Footer';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <React.Fragment>
        <Stack.Navigator initialRouteName='Teacher' screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='Teacher'
          component={Teacher}
          options={{
            headerShown: true, // Show the header
            header: () => <Header user="amar" />, // Use the custom header component
          }}
        />
      </Stack.Navigator>
      {/* <Footer /> */}
</React.Fragment>
    );
};

export default AuthStack;


// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Welcome from '../pages/Welcome';
// import Login from '../pages/Login';
// import Teacher from '../pages/Teacher';
// import Header from '../component/Header';
// import CustomDrawer from '../component/CustomDrawer';

// const Drawer = createDrawerNavigator();


// const AuthStack = () => {
//     return (
//         <Drawer.Navigator initialRouteName="Home"
//         drawerContent={props => <CustomDrawer {...props} />}
//         >
//         <Drawer.Screen name="Teacher" component={Teacher} />
//         {/* <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
//       </Drawer.Navigator>
//     // <Drawer.Navigator >
//     //   <Drawer.Screen name="Teacher" component={Teacher} />
//     // </Drawer.Navigator>
//     );
// };

// export default AuthStack;
