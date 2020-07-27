# Walmart API

Web application for product search. This is a repository for Dockerizing a Angular 9 Application.

## Getting Started

Clone repository to local environment.

### Prerequisites

What things you need to install the software:

- [Angular CLI](https://github.com/angular/angular-cli)
- [Docker](https://www.docker.com/get-docker)

### Deploy in local environment

Enter to folder:
```shell script
cd walmart-web
```
Install dependencies:
```shell script
npm install
```
Run project:
```shell script
ng serve --proxy-config proxy.conf.json
```

### Running project with Docker

We need to build the image by executing and create a container for Web application.
```
docker-compose up
```
The application will start now you test in your browser by going to:
```
http://localhost:80
```

## Built With

* [Visual Studio Code](https://code.visualstudio.com) - The IDE used
* [Angular](https://angular.io)
* [Docker](https://www.docker.com/get-docker)

## Authors

* **Pablo Galvis** - [paangaflo](https://github.com/paangaflo)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details