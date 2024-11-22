// FilterMenuScreen.tsx
import React from 'react';
import { View, Button } from 'react-native';
import { filterMenuScreenStyles } from './styles';

interface FilterMenuScreenProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  navigation: any;
}

export default function FilterMenuScreen({ setFilter, navigation }: FilterMenuScreenProps) {
  return (
    <View style={filterMenuScreenStyles.container}>
      <Button title="Starters" onPress={() => { setFilter('Starters'); navigation.goBack(); }} />
      <Button title="Mains" onPress={() => { setFilter('Mains'); navigation.goBack(); }} />
      <Button title="Desserts" onPress={() => { setFilter('Desserts'); navigation.goBack(); }} />
      <Button title="All" onPress={() => { setFilter('All'); navigation.goBack(); }} />
    </View>
  );
}
