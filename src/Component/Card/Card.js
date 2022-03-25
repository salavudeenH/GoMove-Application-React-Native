import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components';
import data from "../../Data/restaurant.json"
import AsyncStorage from '@react-native-async-storage/async-storage'
import readFavorite from '../../utils/readFavorite'
import addToFavorite from '../../utils/addToFavorite'
import removeFromFavorite from "../../utils/removeFromFavorite"
// data.find(x => x.id === 1)


const Card = ({ details, urlImage, title, specialite, city, rating,item}) => {
  const [isFav, setIsFav] = useState(false)
  let stars = []

  const renderRating = () => {
    for (let i = 0; i < rating; i++) {
      stars.push(<Star key={i}>⭐️</Star>)
    }
  }
  renderRating();
  
  const checkIsFav = async() =>{
    const allFav = await readFavorite();
    let test = allFav.filter(element => element.id === item.id)
    setIsFav(test.length > 0)
  }

  useEffect(()=>{
    checkIsFav();
  },[])


  const checkFavorite = async item => {
    const allFav = await readFavorite()

    const index = allFav.map(f => f.id).findIndex(itemId => itemId === item.id)
    if (index === -1) {
     await addToFavorite(item)
     checkIsFav();
    } else {
     await removeFromFavorite(item)
     checkIsFav();
    }
    
  }
  

  return (
    <TouchableOpacity onPress={details}>
      <Main>
        <View style={{ position: 'relative' }}>
          <Image source={{ uri: urlImage }} />
          <TouchableOpacity
            onPress={() => checkFavorite(item)}
            style={{ position: "absolute", bottom: 10, right: 10, backgroundColor: "white", padding: 10, borderRadius: 10 }}>
            <Ionicons size={18} name={`${isFav ? 'heart' : 'heart-outline'}`} color={`${isFav ? 'red' : 'black'}`} />
          </TouchableOpacity>
        </View>
        <ImageTitle>{title}</ImageTitle>
        <City>{specialite}</City>
        <City>{city}</City>
        <Star>{stars}</Star>
      </Main>
    </TouchableOpacity>
  );
};

const Main = styled.View`
height:250px;
padding-left:10px;
padding-top:10px;
`
const Image = styled.Image`
height:140px;
width:200px;
border-radius:20px;
background-color:#C7C7D4
`
const ImageTitle = styled.Text`
margin-top:5px;
font-size:18px;
font-weight:500;
padding-left:10px
`
const Star = styled.Text`
margin-top:5px;
font-size:12px;
font-weight:500;
padding-left:10px
`
const City = styled.Text`
font-size:17px;
color:#918B8B;
font-style: italic;
padding-left:10px
`
export default Card;

//  <TouchableOpacity
//  onPress={() => setIsFav(prevState => !prevState)}
//  style={{ position: "absolute", bottom: 10, right: 10, backgroundColor: "white", padding: 10, borderRadius: 10}}>
//  <Ionicons size={18} name={`${isFav ? 'heart' : 'heart-outline'}`} color={`${isFav ? 'red' : 'black'}`}/>
// </TouchableOpacity>