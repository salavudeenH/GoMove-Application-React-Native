import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../../Screens/Home"
import Details from "../../Screens/DetailsRestaurant"
import Tab from "./Tab"
import FlashMessage from "react-native-flash-message";
import DetailsRestaurant from '../../Screens/DetailsRestaurant';
import DetailsActivites from '../../Screens/DetailsActivites';
import DetailsHotel from '../../Screens/DetailsHotel';
import Search from '../../Screens/Search';
import Favorite from '../../Screens/Favorite';
import faq from "../../Screens/faq";

const MyStack = () => {
const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator>
         <Stack.Screen
          name="Favorite"
          component={Favorite}
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
  );
};

export default MyStack;