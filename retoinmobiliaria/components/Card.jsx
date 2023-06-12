import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import LikeButton from './LikeButton';
import { MaterialIcons } from '@expo/vector-icons';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';

const PropertyCard = ({ name, location, bedrooms, bathrooms, space, price, image }) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.rowContainer}>
        <Image style={styles.image} source={{ uri: image }} />

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{name}</Text>

          <View style={styles.addressContainer}>
            <MaterialIcons name="location-on" size={16} color="black" />
            <Text style={styles.ubi}>{location}</Text>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.iconTextContainer}>
              <MaterialIcons name="hotel" size={16} color="black" />
              <Text style={styles.infoText}>{bedrooms}</Text>
            </View>

            <View style={styles.iconTextContainer}>
              <MaterialIcons name="bathtub" size={16} color="black" />
              <Text style={styles.infoText}>{bathrooms}</Text>
            </View>

            <View style={styles.iconTextContainer}>
              <MaterialIcons name="space-bar" size={16} color="black" />
              <Text style={styles.infoText}>{space}</Text>
            </View>
          </View>

          <Text style={styles.price}>{price}</Text>
        </View>
      </View>

      <LikeButton />
    </View>
  );
};


export default PropertyCard;
