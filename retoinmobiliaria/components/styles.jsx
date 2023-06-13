import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    padding: 16,
    margin: 8,
    width: 300,
    backgroundColor: colors.cardBackground,
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
    color: colors.title,
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
    color: colors.infoText,
  },
  price: {
    position: "absolute",
    bottom: -35,
    left: 0,
    color: colors.price,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  ubi: {
    marginLeft: 4,
    fontWeight: "500",
    color: colors.ubi,
  },
});
