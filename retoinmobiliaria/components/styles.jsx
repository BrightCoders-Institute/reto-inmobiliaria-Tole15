import { StyleSheet } from 'react-native'
import { colors } from './colors'

export const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    padding: 11,
    margin: 4,
    width: 340,
    backgroundColor: colors.cardBackground,
    marginTop: 50,
    marginBottom: -30
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 105,
    height: 100,
    borderRadius: 10
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16
  },
  title: {
    fontFamily: 'poppins-regular',
    fontWeight: '500',
    fontSize: 17,
    color: colors.name
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16
  },
  infoText: {
    marginBottom: 5,
    marginLeft: 6,
    fontWeight: 'bold',
    fontFamily: 'poppins-regular',
    color: colors.infoText,
    fontSize: 15
  },
  price: {
    left: 0,
    color: colors.price,
    fontSize: 17,
    fontFamily: 'poppins-regular',
    fontWeight: 'bold',
    marginBottom: 8
  },
  ubi: {
    fontFamily: 'poppins-regular',
    fontSize: 13,
    marginLeft: 4,
    fontWeight: '400',
    color: colors.ubi
  },
  mirrorIcon: {
    transform: [{ scaleX: -1 }],
    marginBottom: 4
  },
  mirrorIconDos: {
    transform: [{ scaleY: -1 }],
    marginBottom: 4
  },
  iconHeartContainer: {
    flexDirection: 'row',
    marginTop: 85
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 15,
    backgroundColor: colors.circle,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2
  },
  button: {
    padding: 0
  },
  containerPropertyLis: {
    flex: 1,
    padding: 16
  },
  starContainer: {
    position: 'absolute',
    top: '60%',
    right: '25%',
    backgroundColor: colors.BackStarColor,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 35,
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 8
  },

  StarText: {
    fontSize: 13,
    marginLeft: 3,
    color: colors.StarText,
    fontFamily: 'poppins-regular',
    fontWeight: 'bold'
  }
})
