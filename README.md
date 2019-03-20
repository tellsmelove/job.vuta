# ***Smart Tools 4.0.0-beta***
Smart Tool Compiles for Nunjucks Template Engine, SCSS, & JS

## ***How to usage***

- Please run script update default library node_module before use.
```
npm install
```
or
```
yarn
```

### ***Watch for SCSS, JAVASCRIPT***
***Default Watch***
```
npm run watch
``` 
or 
```
yarn watch
```

***Watch With Custom name file for SASS or JS***
Add more flag after command

*Change scss file name watch*
```
--scss=name_file_watch
```

*Change js file name watch*
```
--js=name_file_watch
```

### ***Build SCSS, JAVASCRIPT to mode Production***
```
npm run build
``` 
or 
```
yarn build
```

### ***Watch & Compile NUNJUCKS to HTML***
```
npm run html
``` 
or 
```
yarn html
```

### ***Copy BOOTSTRAP (4.x), POPPER.JS, FONTAWESOME (4.7.3) lib to production***
Add more flag ```--copy``` when use **build** or **watch** for SCSS & JAVASCRIPT

### ***Run Server Watch***
Add more flag ```--server``` when use **build** or **watch** for SCSS & JAVASCRIPT
