import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, FlatList, LogBox} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


import {useFonts,Nunito_200ExtraLight, Nunito_600SemiBold,Nunito_400Regular,Nunito_300Light} from '@expo-google-fonts/nunito';
import Loading from '../components/loading';

import {Products} from "../providers/products"; 

LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.'])


const Product = ({navigation})=>{
    let [fontsLoaded] = useFonts({Nunito_200ExtraLight, Nunito_600SemiBold,Nunito_300Light,Nunito_400Regular});
    if(fontsLoaded){
    return(
         <View style={{marginBottom:25}}>
            <FlatList
                data={Products}
                keyExtractor={key=>key._id.toString()}
                renderItem={({item})=>{
                    return(
                    <View style={styles.locationModel}>
                        <View style={styles.insideContainer}>
                                <View style={styles.nameContainer}>
                                    <TouchableOpacity onPress={()=>console.log(item.Image)}>
                                         <Image style={styles.Image} source={item.Image} />
                                    </TouchableOpacity>
                                </View> 
                                <TouchableOpacity>
                                    <View style={styles.addressContainer}>
                                        <Text style={styles.address}>{item.name.substring(0,15)}</Text>
                                        <Text style={styles.address}>{item.name.substring(15,25)}</Text>
                                        <Text style={styles.address}>{item.kg} KG</Text>
                                        <Text style={styles.price}>R {parseFloat(item.price).toFixed(2)}</Text>
                                        <Text style={styles.address}></Text>
                                        <Text style={styles.address}></Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>navigation.navigate('order',{itemName:item.name})} style={{position:'absolute', bottom:0, right:0}}>
                                    <AntDesign name="arrowright" size={24} color="#c05555" />
                                </TouchableOpacity>
            
                            </View>
                    </View> 
                    )
                }}
            />
        </View>
    )
    }
    return <Loading />
}

const styles = StyleSheet.create({
    locationModel:{
        height:185,
        backgroundColor:'#ddd',
        marginHorizontal:15,
        marginTop:20,
        borderRadius:20,       
    },
    insideContainer:{
        margin:15,
        flexDirection:'row',
    },
    nameContainer:{
        justifyContent:'center',
        height:110,
        flex:5
    },
    addressContainer:{
        justifyContent:'center',
    },
    name:{
        fontSize:10,
        color:'#68823b',
        textAlign:'center',
        fontFamily:'Nunito_400Regular',
        flexWrap:'wrap'
    },
    address:{
        fontSize:10,
        color:'#68823b',
        fontFamily:'Nunito_400Regular',
    },
    price:{
        fontSize:13,
        color:'#c05555',
        fontFamily:'Nunito_600SemiBold',
        marginVertical:15,
    },
    Image:{
        height:150,
        width:150,
        marginTop:40,
        marginRight:15
    }
});

export default Product