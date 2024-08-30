import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './home-style'; 

const HomeScreen = () => {
  // Define state for each coupon
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowPress = () => {
    setIsFollowing(!isFollowing);
  };
  const [collectedCoupons, setCollectedCoupons] = useState({
    coupon1: false,
    coupon2: false,
    coupon3: false,
  });

  // Handle collect button press
  const handleCollectPress = (couponKey) => {
    setCollectedCoupons(prevState => ({
      ...prevState,
      [couponKey]: !prevState[couponKey]
    }));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Top Section with Search Bar and Store Info */}
      <View style={styles.topSection}>
        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Icon name="arrow-back" size={24} color="#000" />
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search in this store"
            />
            <TouchableOpacity style={styles.searchButton}>
              <Icon name="search" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <Icon name="share" size={24} color="#000" style={styles.shareIcon} />
          <Icon name="more-vert" size={24} color="#000" />
        </View>

        {/* Store Info */}
        <View style={styles.storeInfo}>
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.storeLogo} />
          <View style={styles.storeDetails}>
            <View style={styles.storeHeader}>
              <Text style={styles.storeName}>Toyouth</Text>
              <TouchableOpacity
                style={[styles.followButton, isFollowing ? styles.followingButton : styles.followButton]}
                onPress={handleFollowPress}
              >
                <Text style={styles.followButtonText}>
                  {isFollowing ? 'Following' : 'Follow'}
                </Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.storeStatsContainer}>
              <Text style={styles.storeStatsText}>
                4.9 <Text style={styles.topTag}>Top</Text> {' | '}
                4.8 <Text style={styles.topTag}>Top</Text> {' | '}
                97.7% <Text style={styles.topTag}>Top</Text>
              </Text>
              <Text style={styles.storeStatsLabels}>
                store rating {' | '} communication {' | '} positive reviews
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Tabs Section (below the store info) */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>All items</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>New arrivals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Sale</Text>
        </TouchableOpacity>
      </View>

      {/* Banner for Discounts and Coupons */}
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>Discounts and Coupons &gt;</Text>
      </View>


      {/* Discounts & Coupons Section */}
      <View style={styles.couponsContainer}>
        <TouchableOpacity style={styles.coupon}>
          <Text style={styles.couponText}>$88</Text>
          <Text style={styles.couponSubText}>Spend $888</Text>
          <Text style={styles.couponCodeText}>SALE88</Text>
          <TouchableOpacity
            style={[
              styles.collectButton,
              collectedCoupons.coupon1 && styles.collectedButton
            ]}
            onPress={() => handleCollectPress('coupon1')}
          >
            <Text style={[
              styles.collectButtonText,
              collectedCoupons.coupon1 && styles.collectedButtonText
            ]}>
              {collectedCoupons.coupon1 ? 'Collected' : 'Collect'}
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.dottedLine}></View>
        <TouchableOpacity style={styles.coupon}>
          <Text style={styles.couponText}>$11</Text>
          <Text style={styles.couponSubText}>Spend $111.11</Text>
          <Text style={styles.couponCodeText}>SINGLES11</Text>
          <TouchableOpacity
            style={[
              styles.collectButton,
              collectedCoupons.coupon2 && styles.collectedButton
            ]}
            onPress={() => handleCollectPress('coupon2')}
          >
            <Text style={[
              styles.collectButtonText,
              collectedCoupons.coupon2 && styles.collectedButtonText
            ]}>
              {collectedCoupons.coupon2 ? 'Collected' : 'Collect'}
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.dottedLine}></View>
        <TouchableOpacity style={styles.coupon}>
          <Text style={styles.couponText}>$100</Text>
          <Text style={styles.couponSubText}>Spend $1,000</Text>
          <Text style={styles.couponCodeText}>GSS2024</Text>
          <TouchableOpacity
            style={[
              styles.collectButton,
              collectedCoupons.coupon3 && styles.collectedButton
            ]}
            onPress={() => handleCollectPress('coupon3')}
          >
            <Text style={[
              styles.collectButtonText,
              collectedCoupons.coupon3 && styles.collectedButtonText
            ]}>
              {collectedCoupons.coupon3 ? 'Collected' : 'Collect'}
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>


      {/* Hot Deals Section */}
      <Text style={styles.sectionTitle}>Hot deals</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.hotDeals}>
        <View style={styles.hotDealItem}>
          <Image
            source = {require('./assets/red-top.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemPrice}>SG$35.87</Text>
        </View>
        <View style={styles.hotDealItem}>
          <Image
            source={require('./assets/blue-dress.png')}
            style={styles.itemImage}
          />
          <Text style={styles.itemPrice}>SG$28</Text>
        </View>
        <View style={styles.hotDealItem}>
          <Image
            source={require('./assets/olive-top.png')}
            style={styles.itemImage}
          />
          <Text style={styles.itemPrice}>SG$15</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

// Additional Screens for Tab Navigation
const ItemsScreen = () => (
  <View style={styles.screen}>
    <Text>Items Screen</Text>
  </View>
);
const CategoriesScreen = () => (
  <View style={styles.screen}>
    <Text>Categories Screen</Text>
  </View>
);
const AnalysisScreen = () => (
  <View style={styles.screen}>
    <Text>Analysis Screen</Text>
  </View>
);
const ContactScreen = () => (
  <View style={styles.screen}>
    <Text>Contact Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Items') iconName = 'shopping-bag';
            else if (route.name === 'Categories') iconName = 'category';
            else if (route.name === 'Analysis') iconName = 'bar-chart';
            else if (route.name === 'Contact') iconName = 'contact-phone';

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FF4D4D',
          inactiveTintColor: 'gray',
          showLabel: true,
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Items" component={ItemsScreen} />
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen name="Analysis" component={AnalysisScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
