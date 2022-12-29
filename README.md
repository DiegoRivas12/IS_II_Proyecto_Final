# IS_II_Proyecto_Final

Integrantes:
- Rivas Huanca Diego Raul
- Marko Marcelo Ituccayasi Umeres
- Jeremy Manuel Alvarez Astete 
- Ana Grabriela Pilar Jimenez Lopez
- Senayda



## [Pipeline de CI/CD](jenkinsfile)

#### Requisitos

:heavy_check_mark: Jenkins Plugins
* [PipeLine](https://plugins.jenkins.io/workflow-aggregator/)
* [Jenkins NodeJS plugin v14.8](https://plugins.jenkins.io/git-parameter/)
* [Jenkins BlueOcean](https://plugins.jenkins.io/blueocean/)
* [Git Parameter](https://plugins.jenkins.io/git-parameter/)
* [SonarQube Scanner](https://plugins.jenkins.io/sonar/)

:heavy_check_mark: SonarQube

:heavy_check_mark: SonarScanner

### Pipeline 

<img src="report-screenshots/pipeline-graph-report.png" width="50%">


### Reporte Sonar Scanner

<img src="report-screenshots/sonnar-scanner-report.png" width="50%">

# Construccion Automatica
Para la construcción automática nos apoyaremos en **Webpack**.

## Instalación
Seguiremos los siguientes pasos para la instalacion de Webpack y las dependencias necesarias para el proyecto.
```
mkdir x-spreadsheet && cd x-spreadsheet
npm init -y
npm install webpack webpack-cli --save-dev

mkdir dist src
touch webpack.config.js


npm install --save-dev file-loader css-loader file-loader
npm install --save-dev html-webpack-plugin
npm install --save-dev clean-webpack-plugin
npm install --save-dev webpack-dev-server
npm install --save-dev webpack-merge

# less
npm install less --save-dev
npm install less-loader --save-dev

npm install eslint --save-dev
./node_modules/.bin/eslint --init # airbnb
```
## Configuración
En el archivo **package.json** añadimos el *script* correspondiente para poder ejecutar la construccion automatica .
- **dev:** Para el modo de desarrollo
- **build:** Para el modo de produccion

```
"scripts": {
	"dev": "webpack-dev-server --open --config build/webpack.dev.js",
    "build": "webpack --config build/webpack.prod.js",
}
```
## Ejecución
Para la construcción automática  del modo de desarrollo usamos el comando :

```
npm run dev

```
Para la construcción automática  del modo de produccion usamos el comando :

```
npm run build

```

<img src="/readme_img/build.png" width="80%">


## Integración del SonarQube en Jenkins
Primero instalamos SonarQube for Jenkins desde el Gestor del plugin.
<img src="Capturas/sonarQube_configuracion.png" width="50%">

Despues generamos un token desde SonarQube para jenkins.
<img src="Capturas/token_sonar_jenkins.png" width="50%"><br>

Despues agregamos el token para SonarQube Servers.
<img src="Capturas/sonar_server.png" width="50%">

## Instalar NodeJs
Configuramos.
<img src="Capturas/captura_nodejs.png" width="50%">