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
