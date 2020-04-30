## React component development process
![](images/react-component-dev-process.png)


## Project structure
![](images/project-structure.png)



## Coding standard
Using eslint, add .vscode/settings.json (https://create-react-app.dev/docs/setting-up-your-editor)
```

```


## Styles system
- Color system
- Font system: header, body, link
- Form: input
- Button
- Border, shadow


```
  npm i node-sass -S

  npx node-sass styles/index.scss  index.css      # complie scss

  npx node-sass styles/_variableds.scss  vaer.css      # complie parital file start with "_" will create empty file
```


## Unit Test
```
  npm i jest -D
  npm i @testing-library/react -D        # replace Enzyme
  npm i @testing-library/jest-dom -D     # assert to DOM

  npx jest myApp.test.js --watch     # Run test
```