import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera, CameraView, useCameraPermissions } from 'expo-camera';
import { manipulateAsync } from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../analysis-style';

const AnalysisScreen = () => {
    const navigation = useNavigation();
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [cameraVisible, setCameraVisible] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [isCameraPhoto, setIsCameraPhoto] = useState(false);
    const cameraRef = useRef(null);

    if (permission === null) {
        return (
            <View style={styles.permissionContainer}>
                <Text style={styles.permissionText}>Requesting camera permission...</Text>
            </View>
        );
    }

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.permissionContainer}>
                <Text style={styles.permissionText}>Permission to access camera required</Text>
                <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
                    <Text style={styles.permissionButtonText}>Grant Permission</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const toggleCameraFacing = () => {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    };

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setPhoto(result.assets[0].uri);
            setIsCameraPhoto(false);
        }
    };

    const takePicture = async () => {
        if (cameraRef.current) {
            try {
                const photo = await cameraRef.current.takePictureAsync({ base64: true });
                
                const manipulatedPhoto = await manipulateAsync(
                    photo.uri,
                    [{ rotate: 0 }],
                    { compress: 1, format: 'jpeg', base64: false }
                );
    
                setPhoto(manipulatedPhoto.uri);
                setIsCameraPhoto(true);
                setCameraVisible(false);
            } catch (error) {
                console.error('Error taking picture:', error);
            }
        }
    };

    const handleOpenCamera = () => {
        setCameraVisible(true);
    };

    const handleCloseCamera = () => {
        setCameraVisible(false);
    };

    const handleConfirmPhoto = () => {
        setCameraVisible(false);
        setIsCameraPhoto(false);
    };

    const handleRetakePhoto = () => {
        setPhoto(null);
        setCameraVisible(true);
        setIsCameraPhoto(false);
    };

    const handleRemovePhoto = () => {
        setPhoto(null);
        setIsCameraPhoto(false);
    };    

    const handleContinue = async () => {
        if (!photo) {
            return;
        }
    
        const formData = new FormData();
        const fileType = photo.split('.').pop();
        const fileName = `photo.${fileType}`;
    
        formData.append('file', {
            uri: photo,
            name: fileName,
            type: `image/${fileType}`,
        });
    
        try {
            // LOCALHOST IP ADDRESS
            const response = await fetch('http://30.168.0.104:8000/upload-image/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: formData,
            });
    
            if (!response.ok) {
                const errorData = await response.json();
    
                if (response.status === 400 && errorData.detail && errorData.detail.includes("Value Error")) {
                    Alert.alert("Error", "No faces detected in the image.");
                } else {
                    throw new Error(errorData.detail || 'Failed to upload image');
                }
                return;
            }
    
            const data = await response.json();
            const colorTone = data.tone || "nothing";
    
            navigation.navigate('AnalysisResultScreen', {
                colorTone: colorTone,
                userImage: photo,
            });
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    return (
        <View style={styles.screen}>
            {!cameraVisible && !isCameraPhoto && (
                <ScrollView style={styles.container}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Upload an Image</Text>
                        <Text style={styles.subHeading}>Don't worry, your data will stay safe and private.</Text>
                    </View>

                    <TouchableOpacity style={styles.imagePicker} onPress={selectImage}>
                        {photo ? (
                            <View style={styles.photoContainer}>
                                <Image source={{ uri: photo }} style={styles.selectedImage} />
                                <TouchableOpacity style={styles.removeIcon} onPress={handleRemovePhoto}>
                                    <Icon name="delete" size={24} color="#FF3B30" />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View style={styles.placeholderContainer}>
                                <Icon name="image" size={40} color="#CCC" />
                                <Text style={styles.placeholderText}>Select Image</Text>
                            </View>
                        )}
                    </TouchableOpacity>

                    <View style={styles.separatorContainer}>
                        <View style={styles.separatorLine} />
                        <Text style={styles.orText}>or</Text>
                        <View style={styles.separatorLine} />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleOpenCamera}>
                        <Icon name="camera-alt" size={20} color="#FB1D15" />
                        <Text style={styles.buttonText}>Open Camera & Take Photo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>
                </ScrollView>
            )}

            {cameraVisible && (
                <CameraView style={styles.fullScreenCamera} facing={facing} ref={cameraRef}>
                    <View style={styles.cameraOverlay}>
                        <TouchableOpacity style={styles.closeButton} onPress={handleCloseCamera}>
                            <Icon name="arrow-back-ios" size={30} color="#FFFFFF" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.captureButton} onPress={takePicture} />
                        <TouchableOpacity style={styles.flipButton} onPress={toggleCameraFacing}>
                            <Icon name="flip-camera-ios" size={30} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                </CameraView>
            )}

            {photo && isCameraPhoto && (
                <View style={styles.previewContainer}>
                    <Image source={{ uri: photo }} style={styles.previewImage} />
                    <View style={styles.previewOverlay}>
                        <TouchableOpacity style={styles.closeButton} onPress={handleRetakePhoto}>
                            <Icon name="close" size={40} color="#FFFFFF" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPhoto}>
                            <Icon name="check" size={40} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
};

export default AnalysisScreen;
