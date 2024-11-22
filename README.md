# MAST5112-POE
github repository: https://github.com/k134n/MAST5112-POE.git

youtube video: https://youtu.be/6se2dIORB8k?si=PuXVUjGtkfCpYmxc

Menu App

Summary of the project

This application is created for a chef to control a menu by adding, deleting, and viewing items. It enables guests to sort items based on course (starter, main course, dessert) and shows the average price of items on the menu. 

Update History 

Changes to part 2. 

Updates on the main screen: 

Average prices of menu items are shown: A method was applied to calculate and show the average price of menu items in the starter, main, and dessert categories on the main screen. 
Code implemented: Using the reduce() method to calculate the average price in real-time from the menu items list. 

Setting up navigation:

Included a react-navigation stack navigator to toggle between different screens. 
The HomeScreen now redirects to the AddMenuScreen, allowing the chef to add or delete menu items. 

Include Menu Functionality: 

Developed features for including and deleting menu items. 
The menu consists of items stored in an array, with each item having a name and a price randomly assigned. 
Incorporating Items: A new feature was implemented, allowing the chef to enter the names of new menu items in a text input field. 
A button was added to enable the chef to delete a menu item from the list. 

Refactoring. 

Splitting of apps: 

Transferred the feature of adding menu items from the HomeScreen to a new screen named AddMenuScreen. The new task for the HomeScreen is to show the entire menu and the average price only. 
This split enhances the application's flexibility and simplifies maintenance. 

Rewrote the code into separate files: 

Divided the app into different sections: HomeScreen, FilteringMenuScreen, and AddMenuScreen. Every part has an important duty, minimising messiness in individual files. 
The functionality for adding and removing menu items was implemented in the AddMenuScreen component. 
State Management that has been rearranged or restructured. 
Employed the useState hook to handle the list of menu items and the input text for adding a new menu item. 
Divided the management of the menu items and input field in order to enhance clarity and control. 

Component Design: 

Simplified by merging connected functions into fewer, more concise parts. 
Improved the code to be easier to read and manage.
Created a separate stylesheet instead of inline styling.

Improvements made to buttons and styles. 
Corrected any unused styles and confirmed that all buttons had uniform styling. 
Increased margin and padding on buttons to enhance UI display. 

Navigation: 

Resolved problems with navigation from HomeScreen to AddMenuScreen. 
Implemented a feature on the AddMenuScreen that enables users to easily navigate back to the home screen by clicking on the Go Back button. 



