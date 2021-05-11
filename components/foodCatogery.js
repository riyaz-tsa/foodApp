import {View, Text, StatusBar, TouchableOpacity, Image} from 'react-native';
import React from 'react';
const FoodCatlog = props => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={props.imageSource}
        style={{
          width: 65,
          height: 65,
          margin: 15,
          borderRadius: 65 / 2,
        }}></Image>
      <Text style={{fontWeight: 'bold'}}>{props.username}</Text>
    </View>
  );
};
export default FoodCatlog;
