# MAST5112-POE
github repository: https://github.com/k134n/MAST5112-POE.git

youtube video:

Menu App

Summary of the project

This application is created for chefs to control a menu by adding, deleting, and viewing items. It enables guests to sort items based on course (starter, main course, dessert) and shows the average price of items on the menu. 

Update History 

Changes to part 2. 

Updates on the main screen: 

Average prices of menu items are shown: A method was applied to calculate and show the average price of menu items in the starter, main, and dessert categories on the main screen. 
Code implemented: Utilising the reduce() method to calculate the average price in real-time from the menu items list. 

Setting up navigation:

Included a react-navigation stack navigator to toggle between different screens. 
The HomeScreen now redirects to the AddMenuScreen, allowing the chef to add or delete menu items. 

Include Menu Functionality: 

Developed features for including and deleting menu items. 
The menu consists of items stored in an array, with each item having a name and a price randomly assigned. 
Incorporating Items: A new feature was implemented, allowing the chef to enter the names of new menu items in a text input field. 
A button was added to enable the chef to delete a menu item from the list. 

Changes relating to refactoring. 

Division of responsibilities: 

Transferred the feature of adding menu items from the HomeScreen to a new screen named AddMenuScreen. The new task for the HomeScreen is to show the entire menu and the average price only. 
This division enhances the application's modularity and simplifies future maintenance. 

Rewritten the code into separate files: 

Divide the app into different sections: HomeScreen and AddMenuScreen. Every part has a distinct duty, minimizing messiness in individual files. 
The functionality for adding and removing menu items was implemented in the AddMenuScreen component. 
State Management that has been rearranged or restructured. 
Employed the useState hook to handle the list of menu items and the input text for adding a new menu item. 
Divided the management of the menu items and input field in order to enhance clarity and control. 

Basic Component Design: 

Simplified by consolidating connected functions into fewer, more concise parts. 
Improved the code to be easier to read and manage. 

Improvements made to buttons and styles. 
Corrected any unused styles and confirmed that all buttons had uniform styling. 
Increased margin and padding on buttons to enhance UI display. 

Techniques for finding your way: 

Resolved problems with navigation from HomeScreen to AddMenuScreen. 
Implemented a feature on the AddMenuScreen that enables users to easily navigate back to the home screen by clicking on the Go Back button. 



