import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
const Cards = props => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,

        borderRadius: 10,

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 10,
        elevation: 2,
      }}>
      <Image
        source={props.restaurantLogo}
        style={{
          width: 80,
          height: 80,
          backgroundColor: 'black',
          borderRadius: 10,
        }}
      />
      <View style={{justifyContent: 'flex-start', marginHorizontal: 10}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          {props.restaurantName}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            justifyContent: 'space-evenly',
          }}>
          <Image
            source={require('../assets/user.png')}
            style={{width: 18, height: 18}}
          />
          <Text style={{color: '#636e72', fontWeight: 'bold'}}>
            {' '}
            ₹300 for Two
          </Text>
          <Image
            source={require('../assets/clock.png')}
            style={{width: 18, height: 18, marginHorizontal: 5}}
          />
          <Text style={{color: '#636e72', fontWeight: 'bold'}}> 30min</Text>
        </View>
      </View>
    </View>
  );
};
export default Cards;
