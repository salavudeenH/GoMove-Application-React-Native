import React,{useEffect,useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from "../../Screens/Home"
import Favorite from "../../Screens/Favorite"
import Search from "../../Screens/Search"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
//ajouter ça en cas de problem avec fontawesome

Icon.loadFont();
const Routes = () => {
  const Tab = createBottomTabNavigator();
return (
<Tab.Navigator>
<Tab.Screen name="Explorer" options={{ tabBarIcon: ({size, color}) => (<Ionicons name={'git-merge-outline'} color={color} size={size} />),headerShown: false,}} component={HomeScreen} />
<Tab.Screen name="Rechercher" options={{ tabBarIcon: ({size, color}) => (<Ionicons name={'search-outline'} color={color} size={size} />),headerShown: true,}} component={Search} />
<Tab.Screen name="Favoris" options={{ tabBarIcon: ({size, color}) => (<Ionicons name={'heart-outline'} color={color} size={size} />),headerShown: true,}} component={Favorite} />
</Tab.Navigator>
);
}

export default Routes;