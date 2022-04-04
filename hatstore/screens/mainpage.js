import React, {useState, useContext} from 'react';
import {View,Text, Button, FlatList, useEffect,Alert, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/style';
import ProductListComponent from '../components/ProductListComponent';
import SelectDropdown from 'react-native-select-dropdown'
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import CartComponent from '../components/CartComponent';
import { CartContext } from "../components/CartContext";
import style from '../styles/style';




function MainPage({navigation},props){

    //Gets the sampledata from the json file
    const sampledata = require('../assets/sampledata.json')
    const sortOptions = ["Alphabetical", "Price Descending", "Price Ascending"]
    var productHolder =(sampledata.hats);

    const [selectedSortOpt, setSelectedSortOpt] = useState();
    const [cart, setCart] = useContext(CartContext);
    
    //Recieve data from productlistcomponent and adds them to the cart
    const sendData = (itemSelected) =>{
        setCart(cart => [itemSelected,...cart] );
    }

    return(
        <View style={{backgroundColor:"#fff"}}>
            <View style={styles.headerHatContainer}>
                <TouchableOpacity>
                    <Image source={require('../assets/hats/BowlerHat.png')} resizeMode='contain' style={styles.headerHat}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/caps/trucker-hat.png')} resizeMode='contain' style={styles.headerHat}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/knithat/patagonia-knithat.png')} resizeMode='contain' style={styles.headerHat}></Image>
                </TouchableOpacity>
            </View>

            <View style={styles.dropdownContainer}>
                <SelectDropdown
                    buttonStyle={styles.dropdownBtn}
                    rowStyle={styles.dropdownRow}
                    rowTextStyle={{color:"#EBAB34", fontSize:18}}
                    data={sortOptions}
                    defaultButtonText='Sort By'
                    onSelect={(selectedItem, index) => {
                        switch(selectedItem) {
    
                            case 'Alphabetical':
                                productHolder.sort(function(a, b){return a.name.localeCompare(b.name)});
                                setSelectedSortOpt(selectedItem)
                            break;
                            
                            case 'Price Descending':
                                productHolder.sort(function(a, b){return b.price-a.price});
                                setSelectedSortOpt(selectedItem)

                            break;
                    
                            case 'Price Ascending':
                                productHolder.sort(function(a, b){return a.price-b.price});
                                setSelectedSortOpt(selectedItem)
                            break;
                        }
                        

                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // Changes button text from sort by to choosen alternative
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // Each option in the dropdown menu
                        return item
                    }}
                />
            </View>


            <View style={{height:'100%', backgroundColor:'#FFF'}}>
                <FlatList numColumns={3}
                    data={productHolder}
                    renderItem={({item}) => 
                    <ProductListComponent ListData={item} sendData={sendData}/>
                    }
                keyExtractor = {item => item.id}
                
                />
            </View>

        </View>
        
    )
}
export default MainPage;