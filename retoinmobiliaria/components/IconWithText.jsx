import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons, FontAwesome } from '@expo/vector-icons'
import { styles } from './styles'

const IconWithText = ({ iconName, iconSize, iconColor, text }) => {
  return (
    <View style={styles.iconTextContainer}>
      {iconName === 'bed-outline' && (
        <Ionicons name={iconName} size={iconSize} color={iconColor} />
      )}
      {iconName === 'shower' && (
        <MaterialCommunityIcons
        name={iconName}
        size={iconSize}
        color={iconColor}
          style={styles.mirrorIcon}
        />
      )}
      {iconName === 'floor-plan' && (
        <MaterialCommunityIcons
        name={iconName}
        size={iconSize}
        color={iconColor}
        />
      )}
      {iconName === 'location-pin' && (
        <SimpleLineIcons
        name={iconName}
        size={iconSize}
        color={iconColor}
        />
      )}
      {iconName === 'star' && (
        <FontAwesome
        name={iconName}
        size={iconSize}
        color={iconColor}
        />
      )}
      <Text style={styles.infoText}>{text}</Text>
    </View>
  )
}

IconWithText.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  iconColor: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default IconWithText
