import React, { useState, useEffect, useRef } from 'react';
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
  ImageBackground
} from 'react-native';

import data from "../Data/restaurant.json"
import Activites from "../Data/activites.json"
import hotel from "../Data/hotel.json"
import image from "../Assets/home2.png"
import TopButton from "../Component/Button/Button"
import Card from "../Component/Card/Card"
import styled from 'styled-components'
import social from "../Assets/social.png"
import montagne from "../Assets/montagne.png"
import hotels from "../Assets/hotel.png"
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import readFavorite from '../utils/readFavorite'
import addToFavorite from '../utils/addToFavorite'

const Home = ({ navigation }) => {
     const [isFav, setIsFav] = useState(false);
    // AsyncStorage.clear();

  return (
    <SlView>
      <MainView>
        <BgImage source={image} resizeMode="cover">
          <View>
            <TopButton
              hotel={() => navigation.navigate('Hôtel')}
              Activites={() => navigation.navigate('Activités')}
              Restaurant={() => navigation.navigate('Restaurant')}
            />
            <Title>Explorer</Title>
          </View>
        </BgImage>
      </MainView>
      <Title2>Nos Meilleurs Restaurant</Title2>
      <ScrollView vertical={false} horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item) =>
          <Card key={item.id} item={item} title={item.Name.length < 18 ? item.Name : `${item.Name.substring(0, 15)}...`}
            details={() => navigation.navigate('Details', { id: item.id })}
            city={item.Ville} urlImage={item.images}
            specialite={item.specialite.length < 25 ? item.specialite : `${item.specialite.substring(0, 15)}...`}
            rating={item.rating}
             />
        )}
      </ScrollView>
      <ImageView>
        <Images source={montagne}>
          <Title3>Explorer les magnifiques paysage</Title3>
        </Images>
      </ImageView>
      <Title2>Nos Meilleurs Activités</Title2>
      <ScrollView vertical={false} horizontal={true} showsHorizontalScrollIndicator={false}>
        {Activites.map((item) =>
          <Card
          key={item.id} item={item} title={item.Name.length < 18 ? item.Name : `${item.Name.substring(0, 15)}...`}
            details={() => navigation.navigate('Details', { id: item.id })}
            city={item.Ville} urlImage={item.images}
            specialite={item.prix.length < 25 ? item.prix : `${item.prix.substring(0, 15)}...`}
            rating={item.rating}
          />
        )}
      </ScrollView>
      <ImageView>
        <Images source={hotels}>
          <Title3>Se déconnecter du quotidien</Title3>
        </Images>
      </ImageView>
      <Title2>Nos Meilleurs Hôtels</Title2>
      <ScrollView vertical={false} horizontal={true} showsHorizontalScrollIndicator={false}>
        {hotel.map((item) =>
          <Card
          key={item.id} item={item} title={item.Name.length < 18 ? item.Name : `${item.Name.substring(0, 15)}...`}
            details={() => navigation.navigate('Details', { id: item.id })}
            city={item.Ville} urlImage={item.images}
            specialite={item.prix.length < 25 ? item.prix : `${item.prix.substring(0, 15)}...`}
            rating={item.rating}
          />
        )}
      </ScrollView>
      <Title2>Retrouvez tout avec notre Communauté</Title2>
      <ImageView>
        <Images source={social}><Buttons><ButtonText><Ionicons name={'help-circle-outline'} size={30} /> Questions</ButtonText></Buttons>
        </Images>
      </ImageView>
      <View>
      </View>
    </SlView>
  );
};


const SlView = styled.ScrollView`
 backgroundColor:white`;

const Star = styled.Text`
margin-top:5px;
font-size:12px;
font-weight:500;
padding-left:10px
`
const Title = styled.Text`
 font-size:30px;
 font-weight:bold;
 margin-left:20px;
 color:black`;
const BgImage = styled.ImageBackground`
 height:500px;
 width:400px;
 `
const Title2 = styled.Text`
 font-size:26px;
 font-weight:600;
 margin-left:20px;
 margin-top:10px;
 color:black;`

const Title3 = styled.Text`
 font-size:30px;
 font-weight:bold;
 margin-left:20px;
 color:white;
 margin-top:20px;`

const MainView = styled.View`
 margin-top:-10px;
 `
const ImageView = styled.View`
 height:300px;
 width:450px;
 margin-top:10px;
 `
const Images = styled.ImageBackground`
 height:300px;
 width:400px;
 `
const Buttons = styled.TouchableOpacity`
 background-color:white;
 margin-top:20px
 height:40px;
 width:160px;
 margin-left:30px;
 border-radius:20px;
 align-items:center;
 `
const ButtonText = styled.Text`
 font-size:22px;
 font-weight:400;
 padding-left:10px;
 text-align:center;
 padding-right:10px;
 align-items:center;
 `;



export default Home;
