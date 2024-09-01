import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    backgroundColor: '#333',
    padding: 10,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  searchButton: {
    padding: 5,
  },
  shareIcon: {
    marginLeft: 10,
  },
  storeInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  storeLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
    marginRight: 15,
  },
  storeDetails: {
    flex: 1,
  },
  storeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Space between store name and follow button
    marginBottom: 10, // Add margin below the store header
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 10, // Add margin to the right of the store name
  },
  storeStatsContainer: {
    marginTop: 8,
},
  storeStatsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
storeStatsItem: {
  flexDirection: 'row',
  alignItems: 'center',
  marginRight: 12,  // Adds spacing between items
},

storeStatsText: {
  fontSize: 16,
  color: '#FFFFFF',
  lineHeight: 20,  // Ensures consistent line height
},

storeStatsLabels: {
  color: '#888888',
  fontSize: 12,
  marginTop: 4,
},
topTag: {
  color: '#FFA500',  // Adjust color as needed
  fontWeight: 'bold',
  marginLeft: 4,  // Adds space between the rating and the "Top" label
  lineHeight: 20,  // Ensures consistent line height
},
  statsLabel: {
    color: '#fff',
    fontSize: 12,
    flex: 1, // Allows label to take remaining space
  },
  followButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#FF4D4D',
  },
  followingButton: {
    backgroundColor: '#4CAF50',
  },
  followButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bannerContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  couponsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  coupon: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#FFF5CC',
    borderRadius: 10,
    borderColor: '#FFD700',
    borderWidth: 1,
  },
  couponText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF4D4D',
  },
  couponSubText: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
  },
  couponCodeText: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
    fontWeight: 'bold'
  },
  collectButton: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#000',
    borderRadius: 5,
  },
  collectButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  dottedLine: {
    width: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
    marginHorizontal: 5,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  },
  hotDeals: {
    paddingHorizontal: 25,
    backgroundColor: '#fff',
  },
  hotDealItem: {
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 10,
    flex: 1, 
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  itemPrice: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  columnWrapper: {
    justifyContent: 'space-between', 
    paddingHorizontal: 10, 
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mockImageContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  mockImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  analysisButton: {
    marginTop: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#FB1D14',
    borderRadius: 50,
    width: '70%',
  },
  analysisButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
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
    color: '#E31A1A',
    paddingVertical: 5,
  },
  pageEnd: {
    marginTop: 5,
    textAlign: 'center',
  }
});

export default styles;