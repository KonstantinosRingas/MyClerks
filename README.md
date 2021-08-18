# MyClerks

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Code 

In this App I created 2 components and 1 service.

MainApp Component: This component is used like an outer container in order to house the profiles fetched. In this particular component we have the logic behind the color background changes as well as the carousel for the profiles. In Mobile version we choose to simply fetch one profile at the time in order to eliminate the endless scrolling.

Profile Component: This component is used to display the variables for individual's profile. In order to have a smoother ui/ux we have predeterminded the height of each variable cell so we can ensure that the profiles all share the same height. In addition we added a Edit button which now is a dummy. 

In both components we have solved the accessibility issues at least for tab navigation.

The HttpService allows us to fetch the profiles from the API.

Use npm install then ng run serve
