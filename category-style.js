// // styles.js
// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#F5F5F5', // Light gray background for contrast
//     padding: 10,
//   },
//   categoryContainer: {
//     marginBottom: 20,
//     backgroundColor: '#FFFFFF', // White background for categories
//     borderRadius: 10, // Rounded corners
//     overflow: 'hidden', // Ensures the border radius is applied to child components
//     elevation: 3, // Shadow for Android
//     shadowColor: '#000000', // Shadow color for iOS
//     shadowOffset: { width: 0, height: 2 }, // Shadow offset
//     shadowOpacity: 0.1, // Shadow opacity
//     shadowRadius: 4, // Shadow radius
//   },
//   categoryTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     padding: 5,
//     backgroundColor: '#FF6C00', // Alibaba orange for the title background
//     color: '#FFFFFF', // White text color
//   },
//   gridContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between', // Even spacing between items
//   },
//   itemContainer: {
//     width: '30%', // Adjust based on the number of items per row
//     marginBottom: 15, // Space between rows
//     borderRadius: 10, // Rounded corners for images
//     overflow: 'hidden', // Ensures the border radius is applied to the image
//     backgroundColor: '#FFFFFF', // White background for each item
//     elevation: 2, // Shadow for Android
//     shadowColor: '#000000', // Shadow color for iOS
//     shadowOffset: { width: 0, height: 1 }, // Shadow offset
//     shadowOpacity: 0.1, // Shadow opacity
//     shadowRadius: 2, // Shadow radius
//   },
//   itemImage: {
//     width: '100%',
//     height: 120, // Adjust height as needed
//     resizeMode: 'cover', // Ensures the image covers the container
//   },
// });

// export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F8F8F8', // Light background color for the whole screen
    padding: 10,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Dark text color for category titles
  },
  gridContainer: {
    justifyContent: 'space-between', // Ensure items are spaced evenly
  },
  itemContainer: {
    width: '30%', // Adjust width to fit 3 items per row
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 5,
    alignItems: 'center',
  },
  itemImage: {
    width: '100%',
    height: 120, // Adjust height as needed
    resizeMode: 'cover',
    borderRadius: 8,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#333', // Dark text color for item names
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 2,
    color: '#FF6C00', // Orange color for prices
  },
  heartIcon: {
    marginTop: 10,
    alignSelf: 'flex-end', // Position the heart icon to the right
  },
});

export default styles;
