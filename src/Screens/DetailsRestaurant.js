import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Linking
} from 'react-native';
import data from "../Data/restaurant.json"
import Detail from "../Component/Details/Details"
import styled from 'styled-components';

const DetailsRestaurant =  ({route}) => {
    const {id} = route.params;

    const findData = data.filter(x => x.id === id)
    useEffect(() => {
    },[])

    const openMapDirection = (item) => {
      const latitude = item.longitude;
      const longitude = item.latitude;
        const url = Platform.select({
          ios: `comgooglemaps://?center=${latitude},${longitude}&q=${latitude},${longitude}&zoom=14&views=traffic"`,
          android: `geo://?q=${latitude},${longitude}`,
        });
        Linking.canOpenURL(url)
          .then((supported) => {
            if (supported) {
              return Linking.openURL(url);
            } else {
              const browser_url = `https://www.google.de/maps/@${latitude},${longitude}`;
              return Linking.openURL(browser_url);
            }
          })
          .catch(() => {
            if (Platform.OS === 'ios') {
              Linking.openURL(
                `maps://?q=${latitude},${longitude}`,
              );
            }
          });
      };

  return (
<View>
<ScrollView>
{findData.map((item)=>
    <Detail 
     key={item.id}
     title={item.Name}
     item={item}
     UrlImage={item.images} 
     UrlImage1={item.images1} 
     UrlImage2={item.images2}
     UrlImage3={item.images3}
     Adress={item.Adresse}
     Ville={item.Ville}
     SubTitle="Cuisine"
     Aller={() => openMapDirection(item)}
     SubTitle="Cuisine"
     rating={item.rating}     
     specialite={item.specialite}
     />
   )}
  </ScrollView>
  </View>

  );
};

const Star = styled.Text`
margin-top:5px;
font-size:15px;
font-weight:500;
padding-left:10px
`

export default DetailsRestaurant;
