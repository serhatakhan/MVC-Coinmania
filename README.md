# Coinmania

This project is a React-based cryptocurrency tracking application. The application is developed based on the Model-View-Controller (MVC) architecture. Project allows users to track the cryptocurrency market and obtain detailed information about cryptocurrency units. The use of MVC architecture ensures that the code is modular, easy to maintain, and extendable.

## MVC Architecture

MVC is a commonly used design pattern in software development. This project is structured according to MVC principles:

**Model:** Represents the data structure of the application. Models such as MainModel and DetailModel handle the processing of coin data and details.

**View:** Represents the user interface. View components like MainView and DetailView allow users to view the data.

**Controller:** Facilitates interaction between the model and the view. Controller components such as MainController and DetailController handle user interactions and facilitate data communication between the model and the view.

## Features

**`Cryptocurrency List:`** The MainController displays the user's cryptocurrency list. Data is fetched from the API through MainModel and presented to the user via MainView.

**`Detailed Cryptocurrency Information:`** The DetailController displays detailed information about the selected cryptocurrency. Data is fetched from the API through DetailModel and presented to the user via DetailView.

**`User Authentication:`** The LoginController component allows users to log in. Formik and Yup libraries are used for form handling. This component enables users to log in and validates login credentials.

## Used Technologies

* **Formik:** A React library used for form management. It is utilized in the LoginController component for user authentication and form handling.

* **Yup:** A JavaScript library used for schema-based validation. It is used in conjunction with Formik for form validation, employing a validation schema named schema.

* **Axios:** Axios is utilized in this project to fetch cryptocurrency data from external APIs. Thanks to Axios's simple and reliable HTTP client structure, data exchange operations are easily facilitated.
  
* **Cartjs:** Chart.js is employed to visualize cryptocurrency prices or market data for the user. This library enables the creation of dynamic and impressive charts.
  
* **React Router Dom:** React Router Dom is employed for page routing and navigation in single-page applications (SPAs). Users can seamlessly navigate between different pages and view details of various cryptocurrencies.

* **Millify:** Millify is used to make large numbers more readable for the user. Particularly, it is employed to format large numbers such as cryptocurrency prices.

## Live

https://mvc-coinmania.vercel.app/

## Screen Gif

![k222-ezgif com-video-to-gif-converter](https://github.com/serhatakhan/MVC-Coinmania/assets/147662915/102708a0-9a3f-4203-9510-69c311afbbd2)





