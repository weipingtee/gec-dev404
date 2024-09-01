import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import styles from '../home-style';

const RecommendationScreen = () => {
    const [products, setProducts] = useState([]);
    const colorTone = route.params?.colorTone || 'nothing sent';

    const get_recommendations = async () => {
        try {
            // LOCALHOST IP ADDRESS
            const response = await fetch(`http://localhost:8000/get-recommendations/?tone=${colorTone}`, {
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
        }
    }

    useEffect(() => {
        get_recommendations();
    }, []);

    return (
        <ScrollView>
            <View style={styles.recommendSection}>
                {products.map(product => {
                    return (
                        <View key={product.productName}>
                            <TouchableOpacity style={styles.recommendItem}>
                                <Image
                                    source={{ uri: product.productImage }}
                                    style={styles.recommendImg}
                                />
                                <Text style={styles.recommendProduct}>{product.productName}</Text>
                                <Text style={styles.recommendPrice}>CN¥{(product.price * 0.0053).toFixed(2)}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
            <Text style={styles.pageEnd}>End of Page</Text>
        </ScrollView>
    )
};

export default RecommendationScreen;