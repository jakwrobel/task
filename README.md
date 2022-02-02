# Getting started

This project is written in React. I used create-react-app and one additional package - node-sass
You can open live version of the project here: https://jakwrobel.github.io/task
Bundled and minified files are in: build->static->js (bundled js) and build->static->css (bundled css)

# About the project:

All required tasks have been done:

- data from API is displayed as a list
- You can filter data by country or by industry. Moreover, you can filter by both criteria combined together and if you leave specific input
  empty filtering by this criteria will be turned off
- You can sort data by name or number of employees (either ascending or descending)
- Layout is designed in the way described in email

# Files structure

Folder "src" consists of 3 folders:

- components -> here are all components used on the page. They are grouped in folders. In each folder you can find:
  - .js file with jsx structure and logic
  - .module.scss file - it contains style for the .js file
- styles -> here are:
  - all global styles. In fact only styles for "html" and "body" + imported fonts
  - scss variables
- utils -> here is API call and function responsible for error handling
