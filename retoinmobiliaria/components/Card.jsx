import React from "react";
import { View, Text, Image } from "react-native";
import LikeButton from "./LikeButton";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

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

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    padding: 16,
    margin: 8,
    width: 300,
    backgroundColor: "F5FDFF",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
    marginTop: -36,
  },
  title: {
    fontFamily: "poppins-regular", 
    fontSize: 18,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  infoText: {
    marginLeft: 4,
    fontWeight: "500",
    fontFamily: "poppins-regular",
  },
  price: {
    position: "absolute",
    bottom: -35,
    left: 0,
    color: "black", 
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  ubi: {
    marginLeft: 4,
    fontWeight: "500",
    color: "#737373",
  },
});

export default PropertyCard;
