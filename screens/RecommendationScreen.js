import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import styles from '../home-style';

const RecommendationScreen = () => (
    <ScrollView>
        <View style={styles.recommendSection}>
            <TouchableOpacity style={styles.recommendItem}>
                <Image
                    source={require('../assets/red-top.jpg')}
                    style={styles.recommendImg}
                />
                <Text style={styles.recommendProduct}>Royal Blue Cotton Shirt</Text>
                <Text style={styles.recommendPrice}>SG$35.87</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recommendItem}>
                <Image
                    source={require('../assets/blue-dress.png')}
                    style={styles.recommendImg}
                />
                <Text style={styles.recommendProduct}>Royal Blue Cotton Shirt</Text>
                <Text style={styles.recommendPrice}>SG$28</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recommendItem}>
                <Image
                    source={require('../assets/olive-top.png')}
                    style={styles.recommendImg}
                />
                <Text style={styles.recommendProduct}>Royal Blue Cotton Shirt</Text>
                <Text style={styles.recommendPrice}>SG$15</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recommendItem}>
                <Image
                    source={require('../assets/red-top.jpg')}
                    style={styles.recommendImg}
                />
                <Text style={styles.recommendProduct}>Royal Blue Cotton Shirt</Text>
                <Text style={styles.recommendPrice}>SG$35.87</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recommendItem}>
                <Image
                    source={require('../assets/blue-dress.png')}
                    style={styles.recommendImg}
                />
                <Text style={styles.recommendProduct}>Royal Blue Cotton Shirt</Text>
                <Text style={styles.recommendPrice}>SG$28</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recommendItem}>
                <Image
                    source={require('../assets/olive-top.png')}
                    style={styles.recommendImg}
                />
                <Text style={styles.recommendProduct}>Royal Blue Cotton Shirt</Text>
                <Text style={styles.recommendPrice}>SG$15</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recommendItem}>
                <Image
                    source={require('../assets/red-top.jpg')}
                    style={styles.recommendImg}
                />
                <Text style={styles.recommendProduct}>Royal Blue Cotton Shirt</Text>
                <Text style={styles.recommendPrice}>SG$35.87</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recommendItem}>
                <Image
                    source={require('../assets/blue-dress.png')}
                    style={styles.recommendImg}
                />
                <Text style={styles.recommendProduct}>Royal Blue Cotton Shirt</Text>
                <Text style={styles.recommendPrice}>SG$28</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recommendItem}>
                <Image
                    source={require('../assets/olive-top.png')}
                    style={styles.recommendImg}
                />
                <Text style={styles.recommendProduct}>Royal Blue Cotton Shirt</Text>
                <Text style={styles.recommendPrice}>SG$15</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.pageEnd}>End of Page</Text>
    </ScrollView>
);

export default RecommendationScreen;
