import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { MenuItem } from '../App';

interface AddMenuScreenProps {
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  navigation: any;
}

export default function AddMenuScreen({ menuItems, setMenuItems, navigation }: AddMenuScreenProps) {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('Select Course');

  const courses = ['Starters', 'Mains', 'Desserts'];

  const addItem = () => {
    if (dishName && description && price && course !== 'Select Course') {
      setMenuItems([...menuItems, { dishName, description, course, price }]);
      setDishName('');
      setDescription('');
      setPrice('');
      setCourse('Select Course');
      navigation.navigate('HomeScreen');  // Go back to HomeScreen after adding the item
    }
  };

  const selectCourse = (selectedCourse: string) => {
    setCourse(selectedCourse);  // Update the selected course when button pressed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Menu Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <View style={styles.courseButtons}>
        {courses.map((courseName) => (
          <TouchableOpacity
            key={courseName}
            style={styles.button}
            onPress={() => selectCourse(courseName)}  // Set course when selected
          >
            <Text style={styles.buttonText}>{courseName}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button title="Add Item" onPress={addItem} />
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
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#666',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  courseButtons: {
    marginVertical: 10,
  },
});
