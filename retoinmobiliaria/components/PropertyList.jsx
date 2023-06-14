import React from 'react';
import { FlatList } from 'react-native';
import PropertyCard from './Card';
import properties from '../data/properties.json';
import { styles } from "./styles";

const PropertyList = () => {
  const renderProperty = ({ item }) => (
    <PropertyCard
      name={item.Name}
      location={item.Details[0].Location}
      bedrooms={item.Details[0].Bedrooms}
      bathrooms={item.Details[0].Bathrooms}
      space={item.Details[0].Space}
      price={item.Details[0].Price}
      image={item.Details[0].image}
    />
  );

  return (
    <FlatList
      style={styles.containerPropertyList}
      data={properties.Properties}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderProperty}
    />
  );
};


export default PropertyList;
