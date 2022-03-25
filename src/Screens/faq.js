import React,{useState} from 'react';
import styled from 'styled-components'

 const Restaurant =  ({navigation}) => {
   return (
  <SlView>
   <MainView>
    </MainView>
    </SlView>
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

 export default Restaurant;
 