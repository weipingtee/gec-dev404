import React, { useState, useEffect } from 'react';
import {
    Modal,
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
    const colorTone = route.params?.colorTone || 'nothing sent';
    const errorIcon = require('../assets/error-icon.png');
    const [description, setDescription] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    // Get user image
    const userPic = route.params?.userImage
        ? { uri: route.params.userImage }
        : require('../assets/default-user.jpg');

    let imageSource = null;
    let subheadingText = '';
    let colorToneDescription = '';

    useEffect(() => {
        const fetchDescription = async () => {
            let fileContent;
            switch (colorTone) {
                case 'cool summer':
                    fileContent = 'This palette is characterized by typical summer softness...';
                    break;
                case 'cool winter':
                    fileContent = 'This palette is defined by deep, vivid colors with a cool undertone...';
                    break;
                case 'warm autumn':
                    fileContent = 'This palette is marked by earthy, rich tones that echo the warmth of autumn...';
                    break;
                case 'warm spring':
                    fileContent = 'This palette features light, warm tones that are vibrant and fresh...';
                    break;
                default:
                    setDescription('No description available.');
                    return;
            }
            try {
                setDescription(fileContent);
            } catch (error) {
                console.error('Error setting description:', error);
                setDescription('Failed to load description.');
            }
        };
        fetchDescription();
    }, [colorTone]);
    // useEffect(() => {
    //     const fetchDescription = async () => {
    //         let fileUri;
    //         switch (colorTone) {
    //             case 'cool summer':
    //                 fileUri = Asset.fromModule(require('../assets/cool-summer.txt')).uri;
    //                 break;
    //             case 'cool winter':
    //                 fileUri = Asset.fromModule(require('../assets/cool-winter.txt')).uri;
    //                 break;
    //             case 'warm autumn':
    //                 fileUri = Asset.fromModule(require('../assets/warm-autumn.txt')).uri;
    //                 break;
    //             case 'warm spring':
    //                 fileUri = Asset.fromModule(require('../assets/warm-spring.txt')).uri;
    //                 break;
    //             default:
    //                 setDescription('No description available.');
    //                 return;
    //         }
    //         try {
    //             const fileContent = await fetch(fileUri).then(r => r.text());
    //             setDescription(fileContent);
    //         } catch (error) {
    //             console.error('Error reading file:', error);
    //             setDescription('Failed to load description.');
    //         }
    //     };
    //     fetchDescription();
    // }, [colorTone]);
    
    // Determine the color palette image and description
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
    } else if (colorTone === 'warm spring') {
        imageSource = require('../assets/warm-spring.png');
        subheadingText = 'Warm Spring';
        colorToneDescription = 'This palette features light, warm tones that are vibrant and fresh. The best colors are soft yellows, peach, coral, and light greens, reminiscent of blooming flowers and sunny spring days.';
    } else {
        // Handling error case
        colorToneDescription = 'No description available.';
        imageSource = null;
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.pageContainer}>
                <Icon
                    name="arrow-back"
                    size={24}
                    color="#000"
                    onPress={() => navigation.navigate('AnalysisScreen')} // Navigate to AnalysisScreen
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
                            title={`More about ${subheadingText}`}
                            onPress={() => setModalVisible(true)}
                        />
                    </>
                ) : (
                    <>
                        <Image style={styles.errorImage} source={errorIcon} />
                        <Text style={styles.errorText}>{"An error occurred. Please try again!"}</Text>
                    </>
                )}
            </View>

            {/* Modal for displaying the description */}
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>{description}</Text>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.modalButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

export default AnalysisResultScreen;
