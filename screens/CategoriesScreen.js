import React, { useState } from 'react';
import { View, Text, FlatList, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../category-style'; 

const images = {
  'top1.jpg': require('../assets/green-top.jpg'),
  'top2.jpg': require('../assets/stripe-blue-top.jpg'),
  'top3.jpg': require('../assets/grey-jacket.jpg'),
  'top4.jpg': require('../assets/red-top.jpg'),
  'top5.jpg': require('../assets/olive-top.png'),
  'top6.jpg': require('../assets/green-top.jpg'),
  'bottom1.jpg': require('../assets/denim-shorts.avif'),
  'bottom2.jpg': require('../assets/running-shorts.jpg'),
  'bottom3.jpg': require('../assets/long-skirt.jpg'),
  'bottom4.jpg': require('../assets/pink-skirt.jpg'),
  'bottom4.jpg': require('../assets/mens-jeans.jpg'),
  'accessory1.jpg': require('../assets/gold-earrings.jpg'),
  'accessory2.jpg': require('../assets/hat.jpg'),
  'accessory3.jpg': require('../assets/shawl.jpg'),
  'shoe1.jpg': require('../assets/shoe1.jpg'),
  'shoe2.jpg': require('../assets/shoe2.jpg'),
  'shoe3.jpg': require('../assets/shoe3.jpg'),
};

// Sample data for categories and items
const categories = [
  {
    id: '1', title: 'Tops', items: [
      { id: 'top1', name: 'Green Top', price: '$35.00', image: 'top1.jpg' },
      { id: 'top2', name: 'Blue Flannel', price: '$40.00', image: 'top2.jpg' },
      { id: 'top3', name: 'Grey Jacket', price: '$55.00', image: 'top3.jpg' },
      { id: 'top4', name: 'Red Polo', price: '$30.00', image: 'top4.jpg' },
      { id: 'top5', name: 'Olive Halter', price: '$45.00', image: 'top5.jpg' },
      { id: 'top6', name: 'Green Top', price: '$35.00', image: 'top6.jpg' },
    ]
  },
  {
    id: '2', title: 'Bottoms', items: [
      { id: 'bottom1', name: 'Denim Shorts', price: '$25.00', image: 'bottom1.jpg' },
      { id: 'bottom2', name: 'Running Shorts', price: '$25.00', image: 'bottom2.jpg' },
      { id: 'bottom3', name: 'Green Skirt', price: '$25.00', image: 'bottom3.jpg' },
      { id: 'bottom4', name: 'Washed Jeans', price: '$20.00', image: 'bottom4.jpg' },
    ]
  },
  {
    id: '3', title: 'Accessories', items: [
      { id: 'accessory1', name: 'Gold earrings', price: '$25.00', image: 'gold-earrings.png' },
      { id: 'accessory2', name: 'Polo cap', price: '$25.00', image: 'bottom4.jpg' },
      { id: 'accessory3', name: 'Blue shawl', price: '$25.00', image: 'shawl.jpg' },
    ]
  },
  {
    id: '4', title: 'Shoes', items: [
      { id: 'shoe1', name: 'Mexico 66', price: '$25.00', image: 'shoe1.jpg' },
      { id: 'shoe2', name: 'Birks arizona', price: '$25.00', image: 'shoe2.jpg' },
      { id: 'shoe3', name: 'Veja Campo', price: '$25.00', image: 'shoe3.jpg'},
    ]
  },
  // Add more categories and items as needed
];

const CategoriesScreen = () => {
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        source={images[item.image]} // Use the static image imports
        style={styles.itemImage}
      />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <TouchableOpacity
        style={styles.heartIcon}
        onPress={() => toggleLike(item.id)}
      >
        <Icon
          name={likedItems[item.id] ? 'favorite' : 'favorite-border'}
          size={24}
          color={likedItems[item.id] ? '#FF6C00' : '#B0B0B0'} // Red when liked, gray otherwise
        />
      </TouchableOpacity>
    </View>
  );

  const renderCategory = ({ item }) => (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{item.title}</Text>
      <FlatList
        data={item.items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3} // Number of columns in the grid
        columnWrapperStyle={styles.gridContainer} // Style for the grid layout
        showsVerticalScrollIndicator={false}
      />
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};

export default CategoriesScreen;

