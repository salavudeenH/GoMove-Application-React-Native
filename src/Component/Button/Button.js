import React,{useState,useEffect,useRef} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
 import {ScrollView} from 'react-native';
 // import Icon from 'react-native-vector-icons/FontAwesome';
// Icon.loadFont();
 import styled from 'styled-components'
 
 const Button =  ({hotel,Activites,Restaurant}) => {
   return (
    <ScrollView vertical={false} horizontal={true} showsHorizontalScrollIndicator={false}>
    <ButtonView>
        <Buttons onPress={hotel}><ButtonText><Ionicons name={'bed-outline'} size={30}/> Hôtels</ButtonText></Buttons>
        <Buttons onPress={Activites}><ButtonText><Ionicons name={'help-buoy-outline'}  size={30} /> Activités</ButtonText></Buttons>
        <Buttons onPress={Restaurant}><ButtonText><Ionicons name={'restaurant-outline'}  size={30} /> Restaurant</ButtonText></Buttons>
    </ButtonView>
    </ScrollView>
   );
 };
 

 const ButtonView = styled.View`
 display:flex;
 flex-direction:row;
 margin-left:10px;
 padding-right:20px;
 margin-top:70px;
 `
 const Buttons = styled.TouchableOpacity`
 background-color:white;
 height:40px;
 width:160px;
 padding-top:2px;
 border-radius:20px;
 margin-right:10px;
 `

 const ButtonText = styled.Text`
 font-size:22px;
 font-weight:400;
 padding-left:10px;
 text-align:center;
 padding-right:10px
 `;

 export default Button;
 