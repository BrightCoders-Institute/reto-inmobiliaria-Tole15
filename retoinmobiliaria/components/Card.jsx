import React from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import LikeButton from './LikeButton'
import {
  SimpleLineIcons,
  FontAwesome
} from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { styles } from './styles'
import { colors } from './colors'
import IconWithText from './IconWithText'

const PropertyCard = ({
  name,
  location,
  bedrooms,
  bathrooms,
  space,
  price,
  image,
  rate
}) => {
  const [fontsLoaded] = useFonts({
    'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.rowContainer}>
        <View>
          <Image style={styles.image} source={{ uri: image }} />

          <View style={styles.starContainer}>
            <FontAwesome name="star" size={13} color={colors.StarIcon} />
            <Text style={styles.StarText}>{rate}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{name}</Text>

          <View style={styles.addressContainer}>
            <SimpleLineIcons
              name="location-pin"
              size={22}
              color={colors.icons}
            />
            <Text style={styles.ubi}>{location}</Text>
          </View>

          <View style={styles.rowContainer}>
            <IconWithText
              iconName="bed-outline"
              iconSize={22}
              iconColor={colors.icons}
              text={bedrooms}
            />

            <IconWithText
              iconName="shower"
              iconSize={22}
              iconColor={colors.icons}
              text={bathrooms}
            />

            <IconWithText
              iconName="floor-plan"
              iconSize={22}
              iconColor={colors.icons}
              text={space}
            />
          </View>
          <Text style={styles.price}>{price}</Text>
        </View>
        <LikeButton />
      </View>
    </View>
  )
}

PropertyCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  space: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired
}

export default PropertyCard
