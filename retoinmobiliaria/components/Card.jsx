import React from "react";
import { View, Text, Image } from "react-native";
import LikeButton from "./LikeButton";
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons";
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
            <SimpleLineIcons name="location-pin" size={22} color={colors.icons} />
            <Text style={styles.ubi}>{location}</Text>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.iconTextContainer}>
              <Ionicons name="bed-outline" size={22} color={colors.icons}/>
              <Text style={styles.infoText}>{bedrooms}</Text>
            </View>

            <View style={styles.iconTextContainer}>
              <MaterialCommunityIcons name="shower" size={22} color={colors.icons} style={styles.mirrorIcon} />
              <Text style={styles.infoText}>{bathrooms}</Text>
            </View>

            <View style={styles.iconTextContainer}>
              <MaterialCommunityIcons name="floor-plan" size={22} color={colors.icons} style={styles.mirrorIconDos} />
              <Text style={styles.infoText}>{space}</Text>
            </View>
          </View>
          <Text style={styles.price}>{price}</Text>
        </View>
        <LikeButton/>
      </View>

    
    </View>
  );
};

export default PropertyCard;
