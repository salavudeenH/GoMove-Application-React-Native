import React,{useState,useEffect,useRef} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TextInput,
   Image,
   ImageBackground,
   TouchableOpacity
 } from 'react-native';
import styled from 'styled-components'

 const VueCard =  ({urlImage,title,info,ville,rating,details}) => {
    let stars = []

    const renderRating = () => {
        for (let i = 0; i < rating; i++) {
            stars.push(<Star>⭐️</Star>)
        }
    }

    renderRating()

   return (
   <MainView>
    <TouchableOpacity onPress={details}>
    <ImagesView>
    <Images source={{uri:urlImage}}/>
    <TextView>
    <Title>{title}</Title>
    <Info>{info}</Info>
    <Ville>{ville}</Ville>
    <Star>{stars}</Star>
    </TextView>
    </ImagesView>
    <Line />
    </TouchableOpacity>
    </MainView>
   );
 };
 
 
const SlView = styled.ScrollView`
 backgroundColor:white`;

 const ImagesView = styled.View`
 margin-top:20px;
 margin-left:20px;
 flex-direction:row;
 `
 const Line = styled.View`
border-bottom-color:#9C9CA2;
border-bottom-width:1px;
margin-left:20px
width:350px;
margin-top:20px;
`
const Images = styled.Image`
height:120px;
width:120px
`
const Star = styled.Text`
margin-top:5px;
font-size:12px;
font-weight:500;
`
const Info = styled.Text`
margin-top:10px;
font-size:18px;
font-weight:300;
`

const Ville = styled.Text`
font-size:18px;
font-weight:300;
`
const Title = styled.Text`
font-size:20px;
font-weight:700;
`
const TextView= styled.View`
margin-left:10px;
`

const MainView = styled.View`
`

 export default VueCard;
 