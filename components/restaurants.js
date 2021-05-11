import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
const Divider = props => {
  return (
    <View
      style={{
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Image
        source={require('../assets/food.png')}
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#ff7979',
          borderRadius: 10,
        }}
      />
      <View style={{justifyContent: 'center', right: 25}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>All Restaurants</Text>
        <Text style={{color: '#636e72', fontWeight: 'bold', marginVertical: 5}}>
          Discover unique tastes near you
        </Text>
      </View>
      <Icon style={{alignSelf: 'center'}} size={25} name="arrow-forward" />
    </View>
  );
};
export default Divider;
