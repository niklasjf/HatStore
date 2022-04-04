import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground, ColorPropType,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from '../screens/mainpage';
import CameraPage from '../screens/camerapage';
import styles from '../styles/style'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Modal from "react-native-modal";
import CartComponent from './CartComponent';



const Stack=createNativeStackNavigator();
export default function StackNavigatorComponent() {

  return (
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainPage}
        options={{ 
          headerTitle: (props) => ( 
           <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
            <View style={{flex:1}}/>
            <View >
              <Image
                style={styles.storeIcon}
                source={require('../assets/icons/ICONex.png')}
              />
            </View>
            <View style={{flex:1}}>
              <CartComponent/>
            </View>
           </View>
         ),
         headerTitleStyle: { textAlign: 'center'},
         headerStyle:{backgroundColor:'#ebab34'}
        }}></Stack.Screen>

        <Stack.Screen name="Camera" component={CameraPage}
          options={{ 
          headerTitle: (props) => ( 
          <View style={{flexDirection:'row', width:'100%', alignItems:'center', paddingRight:40}}>
            <View style={{flex:1}}>
              <Image
                style={styles.storeIcon}
                source={require('../assets/icons/cameraIcon.png')}
              />
            </View>
            <View>
              <CartComponent/>
            </View>
          </View>
         ),
         headerTitleStyle: { textAlign: 'center'},
         headerStyle:{backgroundColor:'#ebab34'}
        }}></Stack.Screen>
      </Stack.Navigator>
  );
}