

import { StyleSheet } from 'react-native';

// HomeScreen Styles
export const homeScreenStyles = StyleSheet.create({
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
    backgroundColor: '#666',
    padding: 10,
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

// AddMenuScreen Styles
export const addMenuScreenStyles = StyleSheet.create({
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

// FilterMenuScreen Styles
export const filterMenuScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#666',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});
