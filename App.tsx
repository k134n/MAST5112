import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AddMenuScreen from './AddMenuScreen';
import FilterMenuScreen from './FilterMenuScreen';

export interface MenuItem {
  dishName: string;
  description: string;
  course: string;
  price: string;
}




const Stack = createStackNavigator();

export default function App() {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>('All'); // Default to showing all items

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen">
          {(props) => <HomeScreen {...props} menuItems={menuItems} filter={filter} />}
        </Stack.Screen>
        <Stack.Screen name="AddMenuScreen">
          {(props) => <AddMenuScreen {...props} menuItems={menuItems} setMenuItems={setMenuItems} />}
        </Stack.Screen>
        <Stack.Screen name="FilterMenuScreen">
          {(props) => <FilterMenuScreen {...props} setFilter={setFilter} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
