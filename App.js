import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import AnalysisScreen from './screens/AnalysisScreen';
import AnalysisResultScreen from './screens/AnalysisResultScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RecommendationScreen from './screens/RecommendationScreen';

// Create a stack navigator for the Analysis-related screens
const AnalysisStack = createStackNavigator();

const AnalysisStackScreen = () => (
  <AnalysisStack.Navigator>
    <AnalysisStack.Screen 
      name="AnalysisScreen"
      component={AnalysisScreen} 
      options={{ headerShown: false }}  // Hide the header for AnalysisScreen
    />
    <AnalysisStack.Screen 
      name="AnalysisResultScreen" 
      component={AnalysisResultScreen} 
      options={{ title: 'Analysis Results', headerShown: false }} // Hide the header for AnalysisResultScreen
    />
    <AnalysisStack.Screen 
      name="RecommendationScreen" 
      component={RecommendationScreen} 
      options={{ title: 'Recommendations for you' }}
    />
  </AnalysisStack.Navigator>
);

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#FF4D4D",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: true,
          tabBarStyle: [
            {
              display: "flex"
            },
            null
          ],
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Categories') {
              iconName = 'category';
            } else if (route.name === 'Analysis') {
              iconName = 'bar-chart';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        {/* Use the AnalysisStackScreen as the component for the Analysis tab */}
        <Tab.Screen name="Analysis" component={AnalysisStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;