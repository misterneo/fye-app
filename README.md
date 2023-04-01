# FYE Mobile Application

A mobile application to enhance the first-year experience of AUI students and aid in a successful transition to college life.

## Prerequisites

Before installing the FYE Mobile Application, please make sure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/en/)
- [Expo](https://expo.io/) (optional)
- [Laravel](https://laravel.com/)
- [Composer](https://getcomposer.org/)
- [MySQL](https://www.mysql.com/)

## Project Structure

The FYE Mobile Application is divided into two folders: `client` and `server`.

The client folder contains the frontend code of the application, which is developed using Expo and React Native. The client folder includes all the necessary code and assets to build the user interface of the FYE Mobile Application. It contains the screens, components, styles, and assets that make up the frontend of the application. The client folder also includes the configuration files for Expo, such as app.json and package.json, which define the project settings and dependencies.

The server folder, on the other hand, contains the backend logic of the application, which is developed using Laravel. The backend is responsible for handling data storage, data retrieval, and data manipulation.

## Installation

To install the FYE Mobile Application, follow the steps below:

1. Clone the repository

```zsh
git clone https://github.com/misterneo/fye-app.git
```

2. Install dependencies

- Laravel

```zsh
composer install
```

- React Native

```zsh
npm install
```

3. Start the application

Before starting the application, make sure to start the MySQL server and set up your environment.

- Laravel

```zsh
cp .env.example .env
```

Update the .env file with your MySQL database credentials. Then run the following commands:

```zsh
php artisan key:generate
```

```zsh
php artisan migrate
```

```zsh
php artisan serve
```

- React Native

```zsh
npm start
```

## Auth Integration

Currently, the server folder only implements the authentication logic using Laravel Sanctum. Sanctum is a lightweight authentication system for Laravel applications that provides a simple way to authenticate users and issue API tokens. The AuthService class is responsible for handling the authentication logic, such as registering a user, logging in a user, generating tokens, and verifying user credentials.

The integration of the back-end into the React Native app involved setting up a context provider to manage the user state and authentication flow of the application. The context provider exposes methods for authentication and logout, which are used to make requests to the Laravel backend API using Axios. Upon successful authentication, the user token is stored in AsyncStorage, and the user state is updated within the AuthContext.

## Contributing

We welcome contributions to the FYE Mobile Application. To contribute, please open a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT license. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for more details.
