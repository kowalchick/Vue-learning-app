# Vue-learning fullstack app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production 

#### To deploy to the server:

###### To create dist folder:
```
npm run build 
```
###### To test it, use serve dist folder on a new localhost page:
```
npm i -g serve
serve -s dist
```
### DevServer Backup
###### To install json server
```
npm i json-server
serve -s dist
```
###### To start server backup
After creating a db.json file and a corresponding script in the package.json file  which is "json-backend": "json-server --watch db.json --port 5000" to run the server:
```
npm run json-backend
```


