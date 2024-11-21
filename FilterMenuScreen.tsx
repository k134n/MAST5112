import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

interface FilterMenuScreenProps {
  navigation: any;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function FilterMenuScreen({ navigation, setFilter }: FilterMenuScreenProps) {
  return (
    <View style={styles.container}>
      <Button title="Starters" onPress={() => { setFilter('Starters'); navigation.goBack(); }} />
      <Button title="Mains" onPress={() => { setFilter('Mains'); navigation.goBack(); }} />
      <Button title="Desserts" onPress={() => { setFilter('Desserts'); navigation.goBack(); }} />
      <Button title="All" onPress={() => { setFilter('All'); navigation.goBack(); }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333',
    justifyContent: 'center',
  },
});
