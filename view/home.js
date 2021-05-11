import React, {Component} from 'react';

import {ScrollView, View} from 'react-native';
import ImageSlider from '../components/carouselSlider.js';
import Header from '../components/header.js';
import FoodCatlog from '../components/foodCatogery';
import Divider from '../components/restaurants.js';
import Cards from '../components/restCard.js';

export default class Home extends Component {
  images = {
    cat1: require('../assets/chinese.jpg'),
    cat2: require('../assets/mughal.jpg'),
    cat3: require('../assets/italy.jpg'),
    cat4: require('../assets/india.jpg'),
    cat5: require('../assets/europe.jpg'),
  };
  logo = {
    logo1: require('../assets/logo1.jpg'),
    logo2: require('../assets/logo2.jpg'),
    logo3: require('../assets/logo3.jpg'),
  };
  render(props) {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <Header></Header>
        <ImageSlider />
        <ScrollView horizontal={true}>
          <FoodCatlog
            username="Chinese"
            imageSource={this.images.cat1}></FoodCatlog>
          <FoodCatlog
            username="Mughal"
            imageSource={this.images.cat2}></FoodCatlog>
          <FoodCatlog
            username="Italian"
            imageSource={this.images.cat3}></FoodCatlog>
          <FoodCatlog
            username="Indian"
            imageSource={this.images.cat4}></FoodCatlog>
          <FoodCatlog
            username="Europian"
            imageSource={this.images.cat5}></FoodCatlog>
        </ScrollView>
        <Divider></Divider>
        <Cards
          restaurantName="Green Land Hotel"
          restaurantLogo={this.logo.logo1}></Cards>
        <Cards
          restaurantName="Ajwa Fast Food"
          restaurantLogo={this.logo.logo2}></Cards>
        <Cards
          restaurantName="johny johny Cake"
          restaurantLogo={this.logo.logo3}></Cards>
      </ScrollView>
    );
  }
}
