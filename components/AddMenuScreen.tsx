// AddMenuScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { addMenuScreenStyles } from './styles';

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
      navigation.navigate('HomeScreen');
    }
  };

  const selectCourse = (selectedCourse: string) => {
    setCourse(selectedCourse);
  };

  return (
    <View style={addMenuScreenStyles.container}>
      <Text style={addMenuScreenStyles.title}>Add Menu Item</Text>
      <TextInput
        style={addMenuScreenStyles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={addMenuScreenStyles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={addMenuScreenStyles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <View style={addMenuScreenStyles.courseButtons}>
        {courses.map((courseName) => (
          <TouchableOpacity
            key={courseName}
            style={addMenuScreenStyles.button}
            onPress={() => selectCourse(courseName)}
          >
            <Text style={addMenuScreenStyles.buttonText}>{courseName}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button title="Add Item" onPress={addItem} />
    </View>
  );
}

