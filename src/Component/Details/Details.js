import React,{useState,useEffect} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TextInput,
   TouchableOpacity,
   Touchable,
   Linking,
   KeyboardAvoidingView
 } from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";
import styled from 'styled-components';
import data from "../../Data/restaurant.json"
import DatePicker from 'react-native-date-picker'
import AvisC from "./AvisDetails"

const Details =  ({UrlImage,title,UrlImage1,UrlImage2,UrlImage3,Adress,Ville,Aller,rating,specialite,SubTitle}) => {     
  let stars = []

  const renderRating = () => {
      for (let i = 0; i < rating; i++) {
          stars.push(<Star>⭐️</Star>)
      }
  }

  renderRating()


  return ( 
<Main>
<ImageSlider 
 data={[
     {img:UrlImage},
     {img:UrlImage1},
     {img:UrlImage2},
     {img:UrlImage3},
 ]}
 autoPlay={false}
 closeIconColor="#fff"
 activeIndicatorStyle={{backgroundColor:"#5969DE"}}
 /> 
<Title>{title}</Title>
<AdresseView>
<Adresse>{Adress}, {Ville}</Adresse>
<TouchableOpacity onPress={Aller}><AdresseButton>Itinéraire</AdresseButton></TouchableOpacity>
</AdresseView>
<Star>Note : {stars}</Star>
<AproposView>
<SecondTitle>à propos</SecondTitle>
<ThirdTitle>{SubTitle}</ThirdTitle>
<Adresse>{specialite}</Adresse>
<ThirdTitle>Horaire : 12h - 23h</ThirdTitle>
<Adresse>Du Lundi au Dimanche</Adresse>
</AproposView>
<AvisC/>
</Main>
   );
 };
  
const Main = styled.View`
`
const Line = styled.View`
border-bottom-color:#9C9CA2;
border-bottom-width:1px;
width:350px;
margin-top:20px;
`
const Title = styled.Text`
font-size:35px;
font-weight:bold;
padding-left:20px;
padding-top:10px;
`
const SecondTitle=styled.Text`
font-size:25px;
font-weight:600;
padding-top:20px;
`
const ThirdTitle=styled.Text`
font-size:17px;
font-weight:600;
padding-top:5px;
`
const AproposView=styled.View`
padding-left:20px;
`
const AdresseView = styled.View`
padding-left:20px;
display:flex;
flex-direction:row;
`
const Adresse = styled.Text`
font-size:16px;
font-weight:300;
`
const AdresseButton = styled.Text`
font-size:16px;
font-weight:600;
padding-left:10px;
text-decoration-line: underline;
`
const Star = styled.Text`
margin-top:5px;
font-size:16px;
font-weight:300;
padding-left:20px
`

 export default Details;
 