import {View, Text, StatusBar, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={{margin: 20}}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="white"
        showHideTransition="none"
      />

      <TouchableOpacity style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/location.png')}
          style={{width: 26, height: 26, marginVertical: 5}}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: '#0984e3',
            margin: 5,
          }}>
          Add Address
        </Text>
      </TouchableOpacity>

      <Text style={{fontSize: 16}}>
        Get your food safely delivered at doorstep
      </Text>
    </View>
  );
};
export default Header;
