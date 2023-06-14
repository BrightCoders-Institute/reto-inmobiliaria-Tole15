import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    padding: 12,
    margin: 8,
    width: 340,
    backgroundColor: colors.cardBackground,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 105,
    height: 100,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontFamily: "poppins-regular",
    fontWeight: "500",
    fontSize: 17,
    color: colors.name,
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
    marginBottom: 5,
    marginLeft: 6,
    fontWeight: "bold",
    fontFamily: "poppins-regular",
    color: colors.infoText,
    fontSize: 15,
  },
  price: {
    left: 0,
    color: colors.price,
    fontSize: 17,
    fontFamily: "poppins-regular",
    fontWeight: "bold",
    marginBottom: 8,
  },
  ubi: {
    fontFamily: "poppins-regular",
    fontSize: 13,
    marginLeft: 4,
    fontWeight: "400",
    color: colors.ubi,
  },
  mirrorIcon: {
    transform: [{ scaleX: -1 }],
    marginBottom: 4,
  },
  mirrorIconDos: {
    transform: [{ scaleY: -1 }],
    marginBottom: 4,
  },
    iconHeartContainer: {
    flexDirection: 'row',
    marginTop: 85,
  },  
  circle: {
    width: 28,
    height: 28,
    borderRadius: 15,
    backgroundColor: colors.circle,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2,
  },
  button: {
    padding: 0,  
  }, 
  containerPropertyLis: {
    flex: 1,
    padding: 16,
  },
});
