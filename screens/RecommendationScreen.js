import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../recommend-style';

const RecommendationScreen = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const route = useRoute();
    const colorTone = route.params?.colorTone || 'nothing sent';
    const [likedItems, setLikedItems] = useState({});

    const toggleLike = (id) => {
      setLikedItems(prevState => ({
        ...prevState,
        [id]: !prevState[id]
      }));
    };

    const get_recommendations = async () => {
        try {
            setLoading(true);
            // LOCALHOST IP ADDRESS
            const response = await fetch(`http://192.168.50.63:8000/get-recommendations/?tone=${colorTone}`, {
                method: 'GET',
            });

            if (!response.ok) {
                const errorData = await response.json();

                if (response.status === 400 && errorData.detail && errorData.detail.includes("Value Error")) {
                    Alert.alert("Error", "No recommendations found.");
                } else {
                    throw new Error(errorData.detail || 'Failed to upload image');
                }
                return;
            }
            const data = await response.json();
            setProducts(data);
            return data;
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        get_recommendations();
    }, []);

    return (
        <View>
            {
                loading ? (
                    <View style={styles.loader}><ActivityIndicator size="large" color="#FF6C00" /></View>
                ) : (
                    <ScrollView>
                        <View style={styles.recommendSection} >
                            {
                                products.map(product => {
                                    return (
                                        <View key={product.productName}>
                                            <TouchableOpacity style={styles.recommendItem}>
                                                <Image
                                                    source={{ uri: product.productImage }}
                                                    style={styles.recommendImg}
                                                />
                                                <Text style={styles.recommendProduct}>{product.productName}</Text>
                                                <Text style={styles.recommendPrice}>CN¥{(product.price * 0.0053).toFixed(2)}</Text>
                                                <TouchableOpacity
                                                    style={styles.heartIcon}
                                                    onPress={() => toggleLike(product.productName)}
                                                >
                                                    <Icon
                                                        name={likedItems[product.productName] ? 'favorite' : 'favorite-border'}
                                                        size={24}
                                                        color={likedItems[product.productName] ? '#FF6C00' : '#B0B0B0'} // Red when liked, gray otherwise
                                                    />
                                                </TouchableOpacity>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                            }
                        </View >
                        <Text style={styles.pageEnd}>End of Page</Text>
                    </ScrollView >
                )
            }
        </View>
    )
};

export default RecommendationScreen;