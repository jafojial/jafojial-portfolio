## Alex JIOKEU Aka Jafojial Personal Portfolio

### Visit my portfolio [Here](https://jafojial.intelso.cm)

![Portfolio Website](/public/images/jafojial_portfolio.png)

### Docker setup
#### Using the Dockerfile
Rebuild the image using the command below
Development
- Run ```docker build -f Dockerfile.dev -t app_name_dev .```
Production
- Run ```docker build -f Dockerfile.prod -t app_name_prod .```
#### Using Docker compose
- Rebuild the image using ```docker-compose up service_name — build```

### Setup for development
#### Without Docker
- Run ```npm i && npm start```
#### Using the Dockerfile
- Run ```docker run -d -p 3001:3001 app_name_dev```

#### Using Docker compose
Development
- Run ```docker-compose up dev```

### Setup for production
#### Using the Dockerfile
- Run ```docker run -d -p 3001:3001 app_name_prod```

#### Using Docker compose
- Run ```docker-compose up prod```

### Thanks [JSMASTERY](https://github.com/adrianhajdin/portfolio_website) for the great template
