import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { styles } from "./styles";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <View style={styles.iconHeartContainer}>
      <View style={styles.circle}>
        <Button
          icon={
            <Icon
              name={liked ? 'heart' : 'heart-o'}
              type="font-awesome"
              color="#FFFFFF"
              size={14}
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


export default LikeButton;
