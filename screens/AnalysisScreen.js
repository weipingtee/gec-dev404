import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Camera, CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../analysis-style'; 

const AnalysisScreen = () => {
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
                const photo = await cameraRef.current.takePictureAsync();
                setPhoto(photo.uri);  
                setIsCameraPhoto(true); 
                setCameraVisible(false);  
            } catch (error) {
                console.error('Error taking picture:', error);
            }
        }
    };

    const handleOpenCamera = () => {
        setCameraVisible(true);
        setPhoto(null);  
    };

    const handleCloseCamera = () => {
        setCameraVisible(false);
        setPhoto(null);  
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

    const handleContinue = () => {
        // Pass image to API for prediction
    };

    return (
        <View style={styles.screen}>
            {!cameraVisible && !isCameraPhoto && (
                <>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Upload an Image</Text>
                        <Text style={styles.subHeading}>Don't worry, your data will stay safe and private.</Text>
                    </View>

                    <TouchableOpacity style={styles.imagePicker} onPress={selectImage}>
                        {photo ? (
                            <Image source={{ uri: photo }} style={styles.selectedImage} />
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
                </>
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