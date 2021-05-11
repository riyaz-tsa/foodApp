import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import Home from './view/home';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RestaurantPage from './view/restaurantPage';
import SearchPage from './view/searchPage';
import Profile from './view/profilePage';
const Tab = createBottomTabNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'restaurant' : 'restaurant-outline';
              } else if (route.name === 'Search') {
                iconName = focused ? 'search' : 'search-outline';
              } else if (route.name === 'Restaurant') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'md-person' : 'md-person-outline';
              }
              return (
                <View>
                  <Icon name={iconName} size={size} color={color} />
                </View>
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#fcd34c',
            inactiveTintColor: 'black',
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={SearchPage} />
          <Tab.Screen name="Restaurant" component={RestaurantPage} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
