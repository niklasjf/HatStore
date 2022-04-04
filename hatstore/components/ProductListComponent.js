import React from "react";
import styles from '../styles/style';
import {Text, View, Image, Button, Pressable, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { CartContext } from "./CartContext";

const ProductListComponent = props => { 
    const navigation = useNavigation();

    //Pass data to mainpage
    const passData = () => {
      props.sendData(props.ListData)
    }

  return(
    <View style={styles.productArea}>
        <View style={styles.productCard}>
          <Image source={{uri:`${props.ListData.displayImage}`}} resizeMode="contain" style={styles.productImage}/>
          <View style={styles.productPriceContainer}>
            <Text style={styles.productPrice}>{props.ListData.price}kr</Text>
          </View>
        </View>
        <View>
          <Text style={styles.productName}>{props.ListData.name}</Text>
        </View>
        <View style={styles.productBtnContainers}>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Camera', {url:props.ListData.arImage})}>
            <Text style={styles.btnText}>TRY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={passData}>
            <Text style={styles.btnText}>ADD</Text>
          </TouchableOpacity>
        </View>
    </View>
  ) 
}
export default ProductListComponent;