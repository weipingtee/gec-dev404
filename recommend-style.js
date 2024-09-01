import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    recommendSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    recommendItem: {
        width: 110,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    recommendImg: {
        width: 110,
        height: 150,
        borderRadius: 10,
    },
    recommendProduct: {
        color: '#000',
        paddingVertical: 5,
    },
    recommendPrice: {
        color: '#FF6C00',
        paddingVertical: 5,
        fontWeight: 'bold',
    },
    pageEnd: {
        marginTop: 5,
        textAlign: 'center',
    },
    loader: {
        top: 300,
    },
    heartIcon: {
        marginTop: 10,
        alignSelf: 'flex-end', // Position the heart icon to the right
    },
});

export default styles;