import React, { useState, useContext, useEffect } from "react";
import { Button, Text, View, TouchableOpacity, Image, ScrollView,FlatList, Pressable } from "react-native";
import styles from '../styles/style';
import Modal from "react-native-modal";
import { CartContext } from "./CartContext";

const CartComponent = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [cart, setCart] = useContext(CartContext);

  //Removes items selected item from cart
  function removeCartItem(product){
    const myIndex = cart.findIndex((e) => e === product);
    const filteredItems = cart.filter((_,item) => item !== myIndex)
    setCart(filteredItems)
  }

  function totalCost(){
    var totalPrice=0
    for(let item of cart){
      totalPrice += item.price;
    }
    return totalPrice
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={toggleModal}>
        <Image style={styles.shoppingCart} resizeMode="contain" source={require('../assets/icons/cartIcon.png')}/>
        <View style={styles.cartAmountContainer}>
          {/* This makes it so the number in the cart is only visible when an item is added instead of showing 0 in the cart icon */}
          {cart.length > 0? <Text>{(cart.length)}</Text>: null }
        </View>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} scrollHorizontal={true} onBackdropPress={() => setModalVisible(false)}>
        <View>
          <View style={styles.cartContainer}>
            <Text>Your cart</Text>
              <FlatList numColumns={1}
                data={cart}
                renderItem={({item}) => 
                  <View style={styles.cartItemContainer}>
                    <Image source={{uri:`${item.displayImage}`}} resizeMode="contain" style={styles.cartHatImage}/>
                    <View style={{flexDirection:'column'}}>
                      <Text>{item.name}</Text>
                      <Text>{item.price}kr</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Pressable onPress={() => removeCartItem(item)}>
                        <Text style={styles.cartRemoveIcon}>&#10006;</Text>
                      </Pressable>
                    </View>
                  </View>
                      }
                    keyExtractor = {(item,index) => index.key}
                    extraData={cart}
                />
              <Text>Total:{totalCost()}kr</Text>
              <Pressable style={styles.button} onPress={toggleModal}>
                <Text style={styles.btnText}>CLOSE</Text>
              </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default CartComponent;