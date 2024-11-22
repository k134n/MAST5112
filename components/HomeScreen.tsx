// HomeScreen.tsx
import React from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { homeScreenStyles } from './styles';

interface HomeScreenProps {
  menuItems: MenuItem[];
  filter: string;
  navigation: any;
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

export default function HomeScreen({ menuItems, filter, navigation, setMenuItems }: HomeScreenProps) {
  const calculateAverages = () => {
    const courseData = menuItems.reduce((acc: any, item) => {
      if (!acc[item.course]) acc[item.course] = [];
      acc[item.course].push(parseFloat(item.price));
      return acc;
    }, {});

    return Object.entries(courseData).map(([course, prices]) => {
      const average = prices.reduce((sum, price) => sum + price, 0) / prices.length;
      return `${course}: R${average.toFixed(2)}`;
    });
  };

  const filterMenuItems = () => {
    if (filter === 'All') {
      return menuItems;
    }
    return menuItems.filter(item => item.course === filter);
  };

  const removeItem = (index: number) => {
    setMenuItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <View style={homeScreenStyles.container}>
      <Text style={homeScreenStyles.title}>Christoffel's Menu</Text>
      <Button title="Add Menu Item" onPress={() => navigation.navigate('AddMenuScreen')} />
      <Button title="Filter Menu Items" onPress={() => navigation.navigate('FilterMenuScreen')} />
      <Text style={homeScreenStyles.subTitle}>Average Price per Course</Text>
      {calculateAverages().map((avg, index) => (
        <Text key={index} style={homeScreenStyles.averageText}>{avg}</Text>
      ))}

      <Text style={homeScreenStyles.subTitle}>Menu Items</Text>
      <FlatList
        data={filterMenuItems()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={homeScreenStyles.menuItem}>
            <Text style={homeScreenStyles.dishName}>{item.dishName}</Text>
            <Text style={homeScreenStyles.description}>{item.description}</Text>
            <Text style={homeScreenStyles.course}>{item.course}</Text>
            <Text style={homeScreenStyles.price}>R{item.price}</Text>
            <TouchableOpacity onPress={() => removeItem(index)} style={homeScreenStyles.removeButton}>
              <Text style={homeScreenStyles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
