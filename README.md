# cloned from [preact-starter](https://github.com/gnomical/preact-starter)

### Preact 10 + FontAwesome + SCSS
Slightly modified Preact CLI initialized default template.

Modifications include:
- `FontAwesome` packages added and icon library initialized in
  src/components/app.js
- bundle analyzer command added to package definition
- `node-sass` and `sass-loader` added for scss support and all stylesheets converted to scss
- `jest` configured to proxy ./style or .scss imports with `identity-obj-proxy`
- `webpack` configured to hash css selectors
- `gitignore` setup to ignore some things by default

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# launch the webpack bundle analyzer to review dependency impact on payload sizes
npm run build:analyze

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy 
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
