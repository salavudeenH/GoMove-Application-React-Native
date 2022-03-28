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
import hotel from "../Data/hotel.json"
import VueCard from "../Component/VueCard/VueCard"
import styled from 'styled-components'
import SearchBar from "react-native-dynamic-search-bar";
import Fuse from 'fuse.js'

const Hotel = ({ navigation }) => {
    const [query, setQuery] = useState('');

    const fuse = new Fuse(hotel, {
        keys: [
            "Name",
            "Ville",
            "prix"
        ]
    })

    const results = fuse.search(query);

    console.log(results);

    return (
        <SlView>
            <SearchBar
                placeholder="Rechercher"
                onChangeText={(e) => setQuery(e)}
                value={query}
                style={{ marginTop: 10 }}
            />
            <MainView>
                {
                    results.length > 0
                        ?
                        results.map(({ item }) => (
                            <VueCard
                                key={item.id}
                                details={() => navigation.navigate('Details', { id: item.id })}
                                title={item.Name}
                                urlImage={item.images}
                                info={item.prix}
                                ville={item.Ville}
                                rating={item.rating}
                            />
                        ))
                        :
                        hotel.map((item) =>
                            <VueCard
                                key={item.id}
                                details={() => navigation.navigate('Details', { id: item.id })}
                                title={item.Name}
                                urlImage={item.images}
                                info={item.prix}
                                ville={item.Ville}
                                rating={item.rating}
                            />
                        )
                }
            </MainView>
        </SlView>
    );
};


const InputT = styled.TextInput`
height:30px;
width:300px;
margin-left:20px;
font-size:17px;
border:solid 2px black;
`
const SlView = styled.ScrollView`
 backgroundColor:white`;

const MainView = styled.View`
`

export default Hotel;
