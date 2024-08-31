import { StyleSheet } from 'react-native';

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
    errorImage: {
        width: 100, 
        height: 100, 
        marginTop: 20,
        marginBottom: 30,
        alignSelf: 'center',
    },
    userImage: {
        width: 140,
        height: 140,
        borderRadius: 1000,
        zIndex: 1,
        position: 'absolute',
        left: '31.5%', 
        top: '28.1%',
    },
});  

export default styles;