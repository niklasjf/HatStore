import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground, ColorPropType,Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './screens/mainpage';
import CameraPage from './screens/camerapage';
import styles from './styles/style';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Modal from "react-native-modal";
import CartComponent from './components/CartComponent';
import { CartContext, CartProvider } from './components/CartContext';
import StackNavigatorComponent from './components/StackNavigatorComponent';


const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <StackNavigatorComponent></StackNavigatorComponent>
      </CartProvider>
    </NavigationContainer>
  );
}
