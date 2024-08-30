import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../home-style';

const AnalysisScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.screen}>
            <Text>Analysis Screen</Text>
            {/* Testing purposes for recommendation screen remove if not needed */}
            <TouchableOpacity
                style={styles.analysisButton}
                onPress={() => navigation.navigate('Recommendations for you')}
            >
                <Text style={styles.analysisButtonText}>Get Recommendations</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AnalysisScreen;