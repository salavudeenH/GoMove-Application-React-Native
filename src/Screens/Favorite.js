import React,{useState} from 'react';
import styled from 'styled-components'

 const SplashScreen =  ({navigation}) => {
   return (
  <SlView><Star>Salavudeen Hello</Star></SlView>
   );
 };
 
 
const SlView = styled.View`
 backgroundColor:white`;
 
const Star = styled.Text`
margin-top:5px;
font-size:12px;
font-weight:500;
`
const MainView = styled.View`
`

 export default SplashScreen;
 