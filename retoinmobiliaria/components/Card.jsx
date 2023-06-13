import React from "react";
import { View, Text, Image } from "react-native";
import LikeButton from "./LikeButton";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { styles } from "./styles";
import { colors } from "./colors";

const PropertyCard = ({
  name,
  location,
  bedrooms,
  bathrooms,
  space,
  price,
  image,
}) => {
  const [fontsLoaded] = useFonts({
    "poppins-regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.rowContainer}>
        <Image style={styles.image} source={{ uri: image }} />

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{name}</Text>

          <View style={styles.addressContainer}>
            <MaterialIcons name="location-on" size={16} color={colors.title} />
            <Text style={styles.ubi}>{location}</Text>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.iconTextContainer}>
              <MaterialIcons name="hotel" size={16} color={colors.title} />
              <Text style={styles.infoText}>{bedrooms}</Text>
            </View>

            <View style={styles.iconTextContainer}>
              <MaterialIcons name="bathtub" size={16} color={colors.title} />
              <Text style={styles.infoText}>{bathrooms}</Text>
            </View>

            <View style={styles.iconTextContainer}>
              <MaterialIcons name="space-bar" size={16} color={colors.title} />
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
