import React, {useContext} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import {useFonts,Nunito_200ExtraLight, Nunito_600SemiBold,Nunito_400Regular,Nunito_300Light} from '@expo-google-fonts/nunito';
import Loading from '../components/loading';

import Header from "../components/headers"; 
import Product from "../components/product";
import LocationContext from "../context/locationContext";
const homeScreen = ({navigation})=>{
    let [fontsLoaded] = useFonts({Nunito_200ExtraLight, Nunito_600SemiBold,Nunito_300Light,Nunito_400Regular});
    const {stateLocation} = useContext(LocationContext);
    const addressObject = stateLocation.address[0];
    const stateAuth = {name:'Moses', surname:'Ncube', phoneNumber:'+27 8595841215', email:'agromoss@umgaiwa.co.za',gender:'Male'}
    if(fontsLoaded){
        return(
            <View style={{flex:1}}>
                <StatusBar animated={true}  backgroundColor="#94a720" />   
                <Header navigation={navigation} title="Umgaiwa foods" />
                <ScrollView>

                    <View style={styles.locationModel}>
                        <View style={styles.insideContainer}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.name}>Hi {stateAuth.name}</Text>
                            </View> 
                            <View style={styles.addressContainer}>
                                <Text style={styles.address}>{addressObject.name} {addressObject.street}</Text>
                                <Text style={styles.address}>{addressObject.district}</Text>
                                <Text style={styles.address}>{addressObject.city}</Text> 
                                <Text style={styles.address}>{addressObject.region}</Text>
                                <Text style={styles.address}>{addressObject.postalCode}</Text>
                                <Text style={styles.address}>{addressObject.isoCountryCode}</Text>
                            </View>
                            <TouchableOpacity onPress={()=>navigation.navigate('location')} style={{position:'absolute', bottom:0, right:0}}>
                                <AntDesign name="arrowright" size={24} color="#c05555" />
                            </TouchableOpacity>

                        </View>
                    </View>

                <Product />


                </ScrollView> 
            </View>
        )
    }
    return <Loading />
}

const styles = StyleSheet.create({
    locationModel:{
        height:155,
        backgroundColor:'#68823b',
        marginHorizontal:25,
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
        flex:2
    },
    addressContainer:{
        justifyContent:'center'
    },
    name:{
        fontSize:10,
        color:'#fff',
        fontFamily:'Nunito_300Light',
        textAlign:'center',
    },
    address:{
        fontSize:10,
        color:'#fff',
        fontFamily:'Nunito_300Light'
    }

})

homeScreen.navigationOptions = ({navigation})=>{
    navigation.isFocused(()=>console.log("Hello from the outside"))
    return{
        title:'Home',
        tabBarIcon:({tintColor})=><FontAwesome5 name="home" size={24} color={tintColor} />,
    }
}


export default homeScreen;