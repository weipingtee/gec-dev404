import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../profile-style';
import profilePic from '../assets/profile-pic.png';

const UserProfileScreen = ({ navigation }) => {
  const userData = {
    name: 'John Lim',
    email: 'johnlim@mail.com',
    phoneNumber: '+13063897221',
    address: '123 Xixi St, Hangzhou, China',
    profilePicture: profilePic,
    membershipLevel: 'Gold',
    loyaltyPoints: 1500,
    accountCreationDate: 'January 1, 2021',
    recentOrders: [
      { id: 1, item: 'Wireless Earbuds', date: '2024-08-30', status: 'Delivered' },
      { id: 2, item: 'Smart Watch', date: '2024-08-25', status: 'Shipped' },
    ],
    colorAnalysisTone: 'Warm Autumn',
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          style={styles.profileImage}
          source={userData.profilePicture }
        />
        <Text style={styles.userName}>{userData.name}</Text>
        <Text style={styles.userEmail}>{userData.email}</Text>
        <Text style={styles.userPhone}>{userData.phoneNumber}</Text>
        <Text style={styles.userAddress}>{userData.address}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Details</Text>
        <Text style={styles.detailItem}>Membership Level: {userData.membershipLevel}</Text>
        <Text style={styles.detailItem}>Loyalty Points: {userData.loyaltyPoints}</Text>
        <Text style={styles.detailItem}>Account Created: {userData.accountCreationDate}</Text>
        <Text style={styles.detailItem}>Color Analysis Tone: {userData.colorAnalysisTone}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Information</Text>
        <Text style={styles.subSectionTitle}>Recent Orders</Text>
        {userData.recentOrders.map(order => (
          <View key={order.id} style={styles.orderItem}>
            <Text style={styles.orderItemText}>{order.item}</Text>
            <Text style={styles.orderItemDate}>Date: {order.date}</Text>
            <Text style={styles.orderItemStatus}>Status: {order.status}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="history" size={24} color="#FF6A00" />
          <Text style={styles.menuItemText}>Order History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="map-marker-path" size={24} color="#FF6A00" />
          <Text style={styles.menuItemText}>Order Tracking</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="credit-card-outline" size={24} color="#FF6A00" />
          <Text style={styles.menuItemText}>Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="truck-delivery-outline" size={24} color="#FF6A00" />
          <Text style={styles.menuItemText}>Shipping Addresses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="bell-outline" size={24} color="#FF6A00" />
          <Text style={styles.menuItemText}>Notification Preferences</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Other</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="heart-outline" size={24} color="#FF6A00" />
          <Text style={styles.menuItemText}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="bookmark-outline" size={24} color="#FF6A00" />
          <Text style={styles.menuItemText}>Saved Items</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} >
          <Icon name="eye-outline" size={24} color="#FF6A00" />
          <Text style={styles.menuItemText}>Recently Viewed Items</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UserProfileScreen;
