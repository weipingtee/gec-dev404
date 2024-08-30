import {
    TouchableOpacity,
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    pageContainer: {
        marginHorizontal: 30, // Adds margin on the left and right sides
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 20,
    },
    subheadingText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    line: {
        borderBottomColor: '#c0c0c0', // Line color
        borderBottomWidth: 1,
        marginVertical: 15, // Space above and below the line
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#E52F20',
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 30,
        marginTop: 10,
        alignSelf: 'center',
        width: 250,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    colorPalette: {
        marginTop: 20,
        marginBottom: 30,
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
    userImage: {
        width: 135,
        height: 135,
        borderRadius: 1000,
        zIndex: 1,
        position: 'absolute',
        left: 117,
        top: 215,
    },
});  