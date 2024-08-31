import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import AnalysisScreen from './screens/AnalysisScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';



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
              iconName = 'home'; // FontAwesome icon name
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
        <Tab.Screen name="Analysis" component={AnalysisScreen} />
      </Tab.Navigator>

    </NavigationContainer>
  );
};

export default App;
