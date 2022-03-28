import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import { useFocusEffect } from '@react-navigation/native'
import readFavorite from '../utils/readFavorite'
import VueCard from "../Component/VueCard/VueCard"

 const SplashScreen =  ({navigation}) => {
    const [fav, setFav] = useState([])

    const addFavToState = async () => {
      const allFav = await readFavorite()
      setFav(allFav)
    }
  
    useFocusEffect(() => {
      addFavToState()
    })
  
    useEffect(() => {
      addFavToState()
    }, [])
  
    useEffect(() => {
      console.log(fav)
    }, [fav])
    
   return (
  <SlView>
   {fav.map(item => (
        <VueCard
        key={item.id}
        details={() => navigation.navigate('Details', { id: item.id })}
        title={item.Name}
        urlImage={item.images}
        info={item.prix || item.specialite} 
        ville={item.Ville}
        rating={item.rating}
    />
      ))}</SlView>
   );
 };
 
 
const SlView = styled.ScrollView`
 backgroundColor:white`;
 
const Star = styled.Text`
margin-top:5px;
font-size:12px;
font-weight:500;
`
const MainView = styled.View`
`

 export default SplashScreen;
 