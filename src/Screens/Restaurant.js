import React, { useState, useEffect, useRef } from 'react';
import data from "../Data/restaurant.json"
import VueCard from "../Component/VueCard/VueCard"
import styled from 'styled-components'
import SearchBar from "react-native-dynamic-search-bar";
import Fuse from 'fuse.js'
const Restaurant = ({ navigation }) => {
    const [query, setQuery] = useState('');

    const fuse = new Fuse(hotel, {
        keys: [
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
                style={{ marginTop: 10 }}
            />
            <MainView>
                {
                    results.length > 0
                        ?
                        results.map(({ item }) => (
                            <VueCard
                                key={item.id}
                                details={() => navigation.navigate('DetailsRestaurant', { id: item.id })}
                                title={item.Name}
                                urlImage={item.images}
                                info={item.prix}
                                ville={item.Ville}
                                rating={item.rating}
                            />
                        ))
                        :
                        data.map((item) =>
                            <VueCard
                                key={item.id}
                                details={() => navigation.navigate('DetailsRestaurant', { id: item.id })}
                                title={item.Name.length < 20 ? item.Name : `${item.Name.substring(0, 20)}...`}
                                urlImage={item.images}
                                info={item.specialite}
                                ville={item.Ville}
                                rating={item.rating}
                            />
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

export default Restaurant;
