import React,{useState} from 'react';
import styled from 'styled-components'
import FaqCard from "../Component/Faq/index"
import faqQuestion from "../Data/faq.json"
 const Faq =  ({}) => {    
   return (
    <SlView>
   <MainView>
   <Title>Questions fréquemment posées</Title>
       {faqQuestion.map((item)=>
       <FaqCard question={item.title} reponse={item.content}/>
       )}
    </MainView>
    </SlView>
   );
 };
 
 
const SlView = styled.ScrollView`
 backgroundColor:white`;
 
const Title = styled.Text`
margin-top:10px;
font-size:28px;
font-weight:500;
text-align:center;
`
const MainView = styled.View`
align-items:center
backgroundColor:white
`
const Reponse = styled.Text`
margin-left:10px;
font-size:16px;
margin-right:10px
`
const Button = styled.TouchableOpacity`
`
const Question = styled.Text`
font-size:18px;
text-align:center;
align-items:center;
font-weight:500;
`
const ForumView = styled.View`
border:solid 2px black;
height:50px;
align-items:center;
margin-top:10px;
border-radius:20px;
justify-content:center;
width:350px;
`

 export default Faq;
 