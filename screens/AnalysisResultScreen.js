import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../analysis-result-style';

function CustomButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const AnalysisResultScreen = ({ navigation }) => {
    const route = useRoute();
    const colorTone = route.params?.colorTone || 'nothing sent'; // Use optional chaining
    let imageSource = null;
    let subheadingText = '';
    let colorToneDescription = '';
    let userPic = require('../assets/cool-summer-user.jpg');
    const errorIcon = require('../assets/error-icon.png'); // Ensure this path is correct

    if (colorTone === 'cool summer') {
        imageSource = require('../assets/cool-summer.png');
        subheadingText = 'Cool Summer';
        colorToneDescription = 'This palette is characterized by typical summer softness. The best colors are cool shades, so blues and cool pink are heavily represented in the palette.';
    } else if (colorTone === 'cool winter') {
        imageSource = require('../assets/cool-winter.png');
        subheadingText = 'Cool Winter';
        colorToneDescription = 'This palette is defined by deep, vivid colors with a cool undertone. The best colors are rich jewel tones like emerald, sapphire, and royal blue, as well as icy shades of white and gray that complement the crisp, cool appearance of winter.';
    } else if (colorTone === 'warm autumn') {
        imageSource = require('../assets/warm-autumn.png');
        subheadingText = 'Warm Autumn';
        colorToneDescription = 'This palette is marked by earthy, rich tones that echo the warmth of autumn. The best colors include deep oranges, warm browns, and olive greens, reflecting the natural hues of falling leaves and harvest time.';
    } else if (colorTone === 'Spring') {
        imageSource = require('../assets/warm-spring.png');
        subheadingText = 'Warm Spring';
        colorToneDescription = 'This palette features light, warm tones that are vibrant and fresh. The best colors are soft yellows, peach, coral, and light greens, reminiscent of blooming flowers and sunny spring days.';
    } else {
        // Handling error case
        subheadingText = "An error occurred. Please try again!";
        colorToneDescription = '';
        imageSource = null;
        userPic = null; // No user pic if there's an error
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.pageContainer}>
                <Icon
                    name="arrow-back"
                    size={24}
                    color="#000"
                    onPress={() => navigation.navigate('AnalysisScreen')} // Navigate to AnalysisPage
                />
                <Text style={styles.heading}>Your Best Colours</Text>

                {/* Conditionally render the color palette or error icon */}
                {imageSource ? (
                    <>
                        <Image style={styles.userImage} source={userPic} />
                        <Image style={styles.colorPalette} source={imageSource} />
                        <Text style={styles.subheadingText}>{subheadingText}</Text>
                        <View style={styles.line} />
                        <Text style={styles.paragraph}>{colorToneDescription}</Text>

                        {/* Render buttons only if imageSource is not null */}
                        <CustomButton
                            title="Get Recommendations"
                            onPress={() => navigation.navigate('RecommendationScreen')}
                        />
                        <CustomButton
                            title="More about Cool Summer"
                            onPress={() => navigation.navigate('CoolSummer')}
                        />
                    </>
                ) : (
                    <>
                        <Image style={styles.errorImage} source={errorIcon} />
                        <Text style={styles.subheadingText}>{subheadingText}</Text>
                    </>
                )}
            </View>
        </ScrollView>
    );
};

export default AnalysisResultScreen;
