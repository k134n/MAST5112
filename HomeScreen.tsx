import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { MenuItem } from '../App';

interface HomeScreenProps {
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  navigation: any;
}

export default function HomeScreen({ menuItems, setMenuItems, navigation }: HomeScreenProps) {
  const [filter, setFilter] = useState<string>('All'); // Default filter to show all items

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

  const removeItem = (index: number) => {
    setMenuItems(menuItems.filter((_, i) => i !== index));
  };

  const filterMenuItems = () => {
    if (filter === 'All') {
      return menuItems;
    }
    return menuItems.filter(item => item.course === filter);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Christoffel's Menu</Text>
      <Button title="Add Menu Item" onPress={() => navigation.navigate('AddMenuScreen')} />
      <Text style={styles.subTitle}>Average Price per Course</Text>
      {calculateAverages().map((avg, index) => (
        <Text key={index} style={styles.averageText}>{avg}</Text>
      ))}
      
      {/* Filter Button to navigate to Filter Menu Screen */}
      <Button title="Filter Menu Items" onPress={() => navigation.navigate('FilterMenuScreen', { setFilter })} />

      <Text style={styles.subTitle}>Menu Items</Text>
      <FlatList
        data={filterMenuItems()} // Use the filtered menu items
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.menuItem}>
            <Text style={styles.dishName}>{item.dishName}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.course}>{item.course}</Text>
            <Text style={styles.price}>R{item.price}</Text>
            <TouchableOpacity onPress={() => removeItem(index)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333',
  },
  title: {
    fontSize: 30,
    color: '#FFF',
    textAlign: 'center',
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 24,
    color: '#FFF',
    textAlign: 'center',
    marginVertical: 20,
  },
  menuItem: {
    backgroundColor: '#444',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  dishName: {
    fontSize: 18,
    color: '#FFF',
  },
  description: {
    fontSize: 14,
    color: '#CCC',
  },
  course: {
    fontSize: 16,
    color: '#FFF',
  },
  price: {
    fontSize: 16,
    color: '#FFF',
  },
  removeButton: {
    backgroundColor: '#FF6347', // Red color for remove button
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  removeButtonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  averageText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },
});
