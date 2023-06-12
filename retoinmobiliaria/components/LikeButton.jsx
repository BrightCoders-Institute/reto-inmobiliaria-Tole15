import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Button
          icon={
            <Icon
              name={liked ? 'heart' : 'heart-o'}
              type="font-awesome"
              color="#FFFFFF"
              size={16}
            />
          }
          buttonStyle={styles.button}
          type="clear"
          onPress={handleLike}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#00B074',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
  button: {
    backgroundColor: 'transparent',
    padding: 0,  
  },
});

export default LikeButton;
