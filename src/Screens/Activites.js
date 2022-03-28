import React,{useState} from 'react';
import Activites from "../Data/activites.json"
import VueCard from "../Component/VueCard/VueCard"
import styled from 'styled-components'
import Fuse from 'fuse.js'
import SearchBar from "react-native-dynamic-search-bar";

 const Activite =  ({navigation}) => {
  const [query,setQuery] = useState('');

  const fuse = new Fuse (Activites, {
      keys:[
          "Name",
          "Ville",
          "prix"
      ]
  })

  const results = fuse.search(query);

   return (
  <SlView>
    <SearchBar
            placeholder="Rechercher"
            onChangeText={(e) => setQuery(e)}
            value={query}
            style={{marginTop:10}}
        />
   <MainView>
    {
       results.length > 0 ?
       results.map(({item}) => (
        <VueCard
            key={item.id}
            details={() => navigation.navigate('Details', {id: item.id})}  
            title={item.Name}
            urlImage={item.images}
            info={item.prix}
            ville={item.Ville}
            rating={item.rating}
        />
    ))
    :
    Activites.map((item) =>
        <VueCard
        key={item.id}
        details={() => navigation.navigate('Details', {id: item.id})}  
        title={item.Name}
        urlImage={item.images}
        info={item.prix}
        ville={item.Ville}
        rating={item.rating}/>
    )}
   
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

 export default Activite;
 