import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../../Screens/Home"
import Details from "../../Screens/DetailsRestaurant"
import Tab from "./Tab"
import FlashMessage from "react-native-flash-message";
import DetailsRestaurant from '../../Screens/DetailsRestaurant';
import DetailsActivites from '../../Screens/DetailsActivites';
import DetailsHotel from '../../Screens/DetailsHotel';
import Hotel from '../../Screens/Hotel';
import Activites from '../../Screens/Activites';
import Restaurant from '../../Screens/Restaurant';
import faq from "../../Screens/faq";
import styled from 'styled-components';

const MyStack = () => {
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Accueil"
          component={Tab}
          options={{  headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{  headerShown: false}}
        />
         <Stack.Screen
          name="Hôtel"
          component={Hotel}
          options={{
            headerBackTitle:"",
            headerTintColor: 'black',
            headerTitleStyle:{
              color:"black",
              fontSize:18
            }
          }}
        />
         <Stack.Screen
          name="Activités"
          component={Activites}
          options={{
            headerBackTitle:"",
            headerTintColor: 'black',
            headerTitleStyle:{
              color:"black",
              fontSize:18
            }
          }}
        />
         <Stack.Screen
          name="Restaurant"
          component={Restaurant}
          options={{
            headerBackTitle:"",
            headerTintColor: 'black',
            headerTitleStyle:{
              color:"black",
              fontSize:18
            }
          }}
        />
        <Stack.Screen
          name="DetailsRestaurant"
          component={DetailsRestaurant}
          options={{
            headerBackTitle:"",
            headerTintColor: 'black',
            headerTitleStyle:{
              color:"white"
            }
          }}
        />
        <Stack.Screen
          name="DetailsActivites"
          component={DetailsActivites}
          options={{
            headerBackTitle:"",
            headerTintColor: 'black',
            headerTitleStyle:{
              color:"white"
            }
          }}
        />
         <Stack.Screen
          name="DetailsHotel"
          component={DetailsHotel}
          options={{
            headerBackTitle:"",
            headerTintColor: 'black',
            headerTitleStyle:{
              color:"white"
            }
          }}
        />
         <Stack.Screen
          name="FAQ"
          component={faq}
          options={{
            headerBackTitle:"",
            headerTintColor: 'black',
            headerTitleStyle:{
              color:"black",
              fontSize:18
            }
          }}
        />
      </Stack.Navigator>
      <FlashMessage position='top' />
      </NavigationContainer>
  );
};

export default MyStack;