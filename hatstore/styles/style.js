import {StyleSheet} from 'react-native';


export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      camera: {
        height: '100%',
        width: '100%',
      },
      button:{
        height:50,
        width:75,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius:25,
      },
      productArea:{
        borderRadius:20,
        backgroundColor: '#EBAB34',
        overflow:'hidden',
        margin:5,
        flex:1,
        height:160,
        width:150,
        borderWidth:1,
        borderColor:"black"
      },
      productCard:{
        height:'60%', 
        width:'100%', 
        backgroundColor:"#FFC252", 
        justifyContent:'center', 
        alignItems:'center', 
        borderBottomRightRadius:25
      },
      productImage:{
        height:'65%', 
        width:'65%', 
        overflow:'visible'
      },
      productPriceContainer:{
        flex:0,
        backgroundColor:'#EBAB34',
        borderTopLeftRadius:20, 
        borderTopRightRadius:-20,
        borderBottomRightRadius:-50, 
        marginBottom:-15, 
        alignSelf:'flex-end'
      },
      productPrice:{
        padding:5, 
        fontWeight:'500'
      },
      productName:{
        fontWeight:'400'
      },
      productBtnContainers:{
        flexDirection:'row', 
        margin:5, 
        justifyContent:'center'
      },
      shoppingCart:{
        width: 30, 
        height: 25,  
        marginTop:7,
        overflow:'visible', 
        alignSelf:'flex-end', 
        marginRight:30
      },
      storeIcon:{
        width: 150, 
        height: 40, 
        marginBottom:10, 
        alignSelf:'center'
      },
      button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 22,
        borderRadius: 4,
        borderColor:'black',
        borderWidth:2,
        backgroundColor: '#EBAB34',
        borderBottomWidth:0
        
      },
      btnText:{
        color:'white',
      },
      dropdownBtn:{
        width: "31%",
        height: 40,
        backgroundColor: "#EBAB34",
        borderRadius: 10,
        
      },
      dropdownRow:{
        backgroundColor: "#fff", 
        borderBottomColor: "#C5C5C5", 
        justifyContent:'flex-start'
      },
      headerHat:{
        width:100, 
        height:100, 
        margin:10
      },
      headerHatContainer:{
        backgroundColor:'#fff', 
        height:150, 
        flexDirection:'row', 
        justifyContent:'center', 
        borderWidth:2, 
        borderRadius:20, 
        borderColor:"#EBAB34", 
        margin:15, 
        height:120
      },
      dropdownContainer:{
        paddingLeft:5, 
        paddingBottom:5, 
        backgroundColor:"#fff", 
        flexDirection:'row'
      },
      cartAmountContainer:{
        position:'absolute', 
        right:40.5, 
        bottom:0, 
        justifyContent:'center'
      },
      cartContainer:{
        backgroundColor:'#FFF', 
        margin:50,
        padding:(10,20,10,20), 
        overflow:"hidden", 
        maxHeight:500
      },
      cartItemContainer:{
        flexDirection:'row', 
        borderWidth:2, 
        borderColor:"black", 
        margin:10
      },
      cartRemoveIcon:{
        color:'black', 
        textAlign:'right', 
        paddingRight:5
      },
      cartHatImage:{
        height:50, 
        width:50, 
        overflow:'visible'
      }
    });