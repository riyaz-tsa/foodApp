import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Dimensions, View, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper/src';
var {width} = Dimensions.get('window');

const ImageSlider = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      'https://graphicsfamily.com/wp-content/uploads/2020/10/Restaurant-logo-design-free-template-scaled.jpg',
      'https://webneel.com/sites/default/files/images/blog/thumb-restaurant.jpg',
      'https://assets.turbologo.com/blog/en/2019/11/19084912/Restaurant-logo-design.png',
    ]);

    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            activeDotColor="black"
            style={{height: width / 2}}
            showButtons={false}
            autoplay={true}
            autoplayTimeout={3}>
            {bannerData.map(item => {
              return (
                <Image
                  key={item}
                  style={styles.imageBanner}
                  resizeMode="contain"
                  source={{uri: item}}
                />
              );
            })}
          </Swiper>
          <View style={{height: 20}}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  swiper: {
    width: width,

    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 8,
    marginHorizontal: 20,
  },
});

export default ImageSlider;
