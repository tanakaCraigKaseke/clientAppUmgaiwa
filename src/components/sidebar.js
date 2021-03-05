import React, {useState, useContext} from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, Text} from "react-native";
import {Avatar, Divider} from 'react-native-elements';
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import {useFonts,Nunito_200ExtraLight, Nunito_600SemiBold,Nunito_400Regular,Nunito_300Light} from '@expo-google-fonts/nunito';
import Loading from '../components/loading';

const Sidebar = ({navigation}) =>{
   let [fontsLoaded] = useFonts({Nunito_200ExtraLight, Nunito_600SemiBold,Nunito_300Light,Nunito_400Regular});
   const stateAuth = {name:'Moses', surname:'Ncube', phoneNumber:'+27 8595841215', email:'agromoss@umgaiwa.co.za',gender:'Male'}
   if(fontsLoaded){
    return(
       <ScrollView style={{flexDirection:'column', backgroundColor:"#ddd"}}>
           <View style={styles.bioContainer}>
               <Text style={styles.name}>{stateAuth.name} {stateAuth.surname}</Text>
               <Divider style={styles.divider} />
               <Text style={styles.mail}>{stateAuth.email}</Text>
               <Text style={styles.mail}>{stateAuth.phoneNumber}</Text>
               <TouchableOpacity style={styles.edits}>
                  <Text style={styles.edit}>edit</Text>
               </TouchableOpacity>
           </View>

          <View style={{paddingVertical:15, paddingHorizontal:15, backgroundColor:'#fff',height:420, flex:5}}>
                 
               <TouchableOpacity onPress={()=>{navigation.closeDrawer();navigation.navigate("Home")}} style={styles.linkContainer}>
                  <Text style={styles.link}>my umgaiwa</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={()=>{navigation.closeDrawer();navigation.navigate("account")}} style={styles.linkContainer}>
                  <Text style={styles.link}>my account</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={()=>{navigation.closeDrawer();navigation.navigate("myOrders")}} style={styles.linkContainer}>
                  <Text style={styles.link}>my orders</Text>
               </TouchableOpacity>

               <TouchableOpacity  onPress={()=>{navigation.closeDrawer();navigation.navigate("notifications")}} style={styles.linkContainer}>
                  <Text style={styles.link}>my notifications</Text>
               </TouchableOpacity>

               <TouchableOpacity  onPress={()=>{navigation.closeDrawer();navigation.navigate("notifications")}} style={styles.linkContainer}>
                  <Text style={styles.link}>recipes</Text>
               </TouchableOpacity>


               <Divider style={styles.dividers} />

               <TouchableOpacity onPress={()=>{navigation.closeDrawer();navigation.navigate("crm")}} style={styles.linkContainer}>
                  <Text style={styles.link}>support</Text>
               </TouchableOpacity>

               <Divider style={styles.dividers} />

               <TouchableOpacity onPress={()=>{console.log("we shall log the user out here")}} style={styles.linkContainer}>
                  <Text style={styles.link}>logout</Text>
               </TouchableOpacity>
               


          </View>

 

          <View style={{flex:1}}>
               <Text style={styles.copyright}>Copyright Umgaiwa foods (Pty) Ltd 2021</Text>
          </View>
          
       </ScrollView>
    )
   }
   return <Loading />
}

const styles = StyleSheet.create({
    bioContainer:{
       backgroundColor:'#94a720',
       height:190,
       flex:2,
       paddingHorizontal:15,
       paddingTop:40
    },
    name:{
       fontSize:10,
       color:'#fff',
       fontFamily:'Nunito_600SemiBold'
    },
    mail:{
       fontSize:10,
       color:'#fff',
       fontFamily:'Nunito_600SemiBold'
    },
    edit:{
       fontSize:10,
       color:'#fff',
       fontFamily:'Nunito_400Regular'
    },
    edits:{
      fontSize:10,
       color:'#fff',
       position:'absolute',
       bottom:15,
       right:15,
       fontFamily:'Nunito_400Regular'
    },
    divider:{
       marginVertical:10,
       borderWidth:1,
       borderColor:'#fff'
    },
    copy:{
       position:'absolute',
       fontSize:8,
       textAlign:'center',
       bottom:0,
       left:0,
       right:0
    },
    link:{
       fontSize:14,
       fontFamily:'Nunito_300Light',
       color:'grey'
      },
    
    linkContainer:{
       marginVertical:10
    },
    copyright:{
       fontSize:8,
       textAlign:'center',
       justifyContent:'center',
       marginTop:5,
       fontFamily:'Nunito_300Light'
    },
})

export default Sidebar;