import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screen: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 40,
      backgroundColor: '#FFFFFF',
  },
  fullScreenCamera: {
      flex: 1,
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
  },
  textContainer: {
      width: 280,
      alignItems: 'flex-start',
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
  },
  subHeading: {
      fontSize: 18,
      color: '#666',
      marginBottom: 20,
      textAlign: 'left',
  },
  imagePicker: {
      width: 280,
      height: 180,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: '#FF7E5F',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
  },
  placeholderContainer: {
      justifyContent: 'center',
      alignItems: 'center',
  },
  placeholderText: {
      fontSize: 16,
      color: '#999',
      marginTop: 10,
  },
  selectedImage: {
      width: '100%',
      height: '100%',
      borderRadius: 18,
  },
  separatorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
      width: 280,
      marginBottom: 40,
  },
  separatorLine: {
      flex: 1,
      height: 1,
      backgroundColor: '#CCC',
  },
  orText: {
      marginHorizontal: 10,
      fontSize: 16,
      color: '#666',
  },
  button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFDAC5',
      paddingHorizontal: 20,
      paddingVertical: 20,
      borderRadius: 30,
      width: 280,
      marginBottom: 80,
  },
  buttonText: {
      color: '#FB1D15',
      fontSize: 16,
      marginLeft: 10,
  },
  continueButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FB1D15',
      paddingHorizontal: 20,
      paddingVertical: 20,
      borderRadius: 30,
      width: 280,
  },
  continueButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
  },
  cameraOverlay: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: 20,
  },
  closeButton: {
      position: 'absolute',
      left: 20,
      bottom: 40,
  },
  captureButton: {
      width: 70,
      height: 70,
      backgroundColor: '#FFFFFF',
      borderRadius: 35,
      borderWidth: 5,
      borderColor: '#FADCCB',
      marginBottom: 20,
  },
  flipButton: {
      position: 'absolute',
      right: 20,
      bottom: 40,
  },
  previewContainer: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
  },
  previewImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
  },
  previewOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingBottom: 20,
  },
  confirmButton: {
      position: 'absolute',
      right: 20,
      bottom: 40,
  },
  closeButton: {
      position: 'absolute',
      left: 20,
      bottom: 40,
  },
  permissionContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#FFFFFF',
  },
  permissionText: {
      fontSize: 18,
      color: '#666',
      textAlign: 'center',
      marginBottom: 20,
  },
  permissionButton: {
      backgroundColor: '#FB1D15', // Red background color matching the Continue button
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderRadius: 30,
      width: 200, // Fixed width for the button
      alignItems: 'center',
  },
  permissionButtonText: {
      color: '#FFFFFF', // White text color
      fontSize: 16,
  },
});

export default styles;