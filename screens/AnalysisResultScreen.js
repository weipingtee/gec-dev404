import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../analysis-result-style';

function CustomButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const AnalysisResultScreen = () => {
    // const colorTone =  this.props.navigation.getParam('colorTone', 'nothing sent');
    const colorTone = 'cool summer'; // to be updated

    if (colorTone == 'cool summer') {
        imageSource = require('../assets/cool-summer.png');
        subheadingText = 'Cool Summer';
        colorToneDescription = 'This palette is characterized by typical summer softness. The best colors are cool  shades, so blues and cool pink are heavily represented in the palette';
    } else if (colorTone == 'cool winter') {
        imageSource = require('../assets/cool-winter.png');
        subheadingText = 'Cool Winter';
        colorToneDescription = 'This palette is defined by deep, vivid colors with a cool undertone. The best colors are rich jewel tones like emerald, sapphire, and royal blue, as well as icy shades of white and gray that complement the crisp, cool appearance of winter.';
    } else if (colorTone == 'warm autumn') {
        imageSource = require('../assets/warm-autumn.png');
        subheadingText = 'Warm Autumn';
        colorToneDescription = 'This palette is marked by earthy, rich tones that echo the warmth of autumn. The best colors include deep oranges, warm browns, and olive greens, reflecting the natural hues of falling leaves and harvest time.';
    } else if (colorTone == 'Spring') {
        imageSource = require('../assets/warm-spring.png');
        subheadingText = 'Warm Spring';
        colorToneDescription = 'This palette features light, warm tones that are vibrant and fresh. The best colors are soft yellows, peach, coral, and light greens, reminiscent of blooming flowers and sunny spring days.';
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.pageContainer}>
                <Icon name="arrow-back" size={24} color="#000" />
                <Text style={styles.heading}>Your Best Colours</Text>
                <Image style={styles.colorPalette} source={imageSource} />
                <Image
                    style={styles.userImage}
                    source={require('../assets/cool-summer-user.jpg')}
                />
                <Text style={styles.subheadingText}>Cool Summer</Text>
                <View style={styles.line} />
                <Text style={styles.paragraph}>{colorToneDescription}</Text>
                <CustomButton
                    title="Get Recommendations"
                    onPress={() => navigation.navigate('RecommendationScreen')}
                />
                <CustomButton
                    title="More about Cool Summer"
                    onPress={() => navigation.navigate('CoolSummer')}
                />
            </View>
        </ScrollView>
    );
};

export default AnalysisResultScreen;