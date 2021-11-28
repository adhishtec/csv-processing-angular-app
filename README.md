# CsvProcessingAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

Test the application locally

1. Clone the repository locally
2. open index.html file in browser.
3. The application redirects to upload a csv file, pull one for eg. from project root folder, as testFile.csv. It contains comma seperated numbers, with next set of comma separated numbers in next line.
4. On upload, the application preserves the new line format, and removes any 0 numbers from the comma separated list of numbers and presents with final output as trimed 0 numbers.
5. The application is developed in pure javascript, html and css.

## Development server

1. Clone the repository locally
2. Run `npm install`
3. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
4. The application contains a csv file in assets folter `testFile.csv`, which contains words separated by space and new lines. The application splits them on the basis of newline and space, convert them into an array, and pushes the array elements inside tree. The tree contains word value in data field, count as number of occurance, left and right branches. Tree strructure can be viewed in console, and the output extracts the count and data from the tree, and present on the scree.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
