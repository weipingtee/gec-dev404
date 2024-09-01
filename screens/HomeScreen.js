import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../home-style'; 

const HomeScreen = () => {
    const [isFollowing, setIsFollowing] = useState(false);
    const [collectedCoupons, setCollectedCoupons] = useState({
        coupon1: false,
        coupon2: false,
        coupon3: false,
    });

    const handleFollowPress = () => {
        setIsFollowing(!isFollowing);
    };

    const handleCollectPress = (couponKey) => {
        setCollectedCoupons(prevState => ({
            ...prevState,
            [couponKey]: !prevState[couponKey]
        }));
    };

    const hotDeals = [
        { id: '1', image: require('../assets/red-top.jpg'), price: '$35.87' },
        { id: '2', image: require('../assets/blue-dress.png'), price: '$28' },
        { id: '3', image: require('../assets/olive-top.png'), price: '$15' },
        { id: '4', image: require('../assets/denim-shorts.avif'), price: '$10' },
        { id: '5', image: require('../assets/pink-dress.jpg'), price: '$75' },
        { id: '6', image: require('../assets/grey-jacket.jpg'), price: '$100' },
        { id: '7', image: require('../assets/green-top.jpg'), price: '$20' },
        { id: '8', image: require('../assets/running-shorts.jpg'), price: '$30' },
        { id: '9', image: require('../assets/orange-skirt.jpg'), price: '$25' },
    ];

    const renderHotDealItem = ({ item }) => (
        <View style={styles.hotDealItem}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            {/* Top Section with Search Bar and Store Info */}
            <View style={styles.topSection}>
                {/* Search Bar */}
                <View style={styles.searchBarContainer}>
                    <Icon name="arrow-back" size={24} color="#FFFFFF" />
                    <View style={styles.searchBar}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search in this store"
                        />
                        <TouchableOpacity style={styles.searchButton}>
                            <Icon name="search" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <Icon name="share" size={24} color="#FFFF" style={styles.shareIcon} />
                    <Icon name="more-vert" size={24} color="#FFFF" />
                </View>

                {/* Store Info */}
                <View style={styles.storeInfo}>
                    <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.storeLogo} />
                    <View style={styles.storeDetails}>
                        <View style={styles.storeHeader}>
                            <Text style={styles.storeName}>TrendyFashion03</Text>
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
            <Text style={styles.sectionTitle}>Hot deals &gt;</Text>
            <FlatList
                data={hotDeals}
                renderItem={renderHotDealItem}
                keyExtractor={item => item.id}
                numColumns={3}
                columnWrapperStyle={styles.columnWrapper}
                showsVerticalScrollIndicator={false}
            />
        </ScrollView>
    );
};

export default HomeScreen;
