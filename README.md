# Open Homescreen
An open source, cross platform, launching pad for your favorite progressive web applications (PWA).

### What is a PWA?
A PWA, or progressive web application, is at its foundation nothing more than a website. With the evolution of the internet we have seen the capabilities of websites reach new heights. These new heights have enabled developers to choose between manifesting their idea in the form of a desktop application, mobile 'app', or now more commonly, a website. When these websites are created with a deep attention to detail and take into consideration the best practices for user experience on multiple devices, connection speeds, internet restrictions, and so on - that website is then considered a progressive web application. At this level, given the proper environment, websites can become nearly indistinguishable from the native applications we have come to rely on since the advent of mobile devices.

### Why would I use this instead of a traditional app store?
- Privacy 
    - None of the installs or user preferences/actions are stored on ANYTHING except the devices you choose
- Freedom
    - The public can decide what is and isn't available in the ecosystem
- Portability
    - Available on all your devices
- Transparency
    - Open Source means every decision and feature is documented publicly
- Security
    - Since web browsers are the most heavily used applications on modern devices, they are also heavily updated. Significant engineering resources are dedicated to 'sandboxing' web browsers to keep them from interfering with higher level system processes. This makes the code running inside a PWA encapsulated to a degree that cannot be matched by other forms of applications, and therefor, makes them more secure by nature.

### How do I get my app on this platform?
Easy! Just submit a pull request that adds a json object to `/data/apps.json`  
The json should provide 3 properties about your app. For example:
```json
{
    "categories": ["games"],
    "title": "My Awesome Game",
    "url": "https://myawesomegame.example.com"
}
```
> Please, no trailing slashes in the url.

#### To allow the app to work in our ecosystem:
- Make sure your server does not add the X-Frame-Options header when the referrer is `https://www.openhomescreen.com`
- Make sure your server adds the following Content-Security-Policy header
    ```
    Content-Security-Policy: frame-ancestors 'self' https://www.openhomescreen.com;
    ```
    More Info:  
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors  

#### For the best experience:
- make sure your pwa has a proper manifest.json file.  
More Info:  
https://developer.mozilla.org/en-US/docs/Web/Manifest


---
## Technical Details for Contributors
## cloned from [preact-starter](https://github.com/gnomical/preact-starter)
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

For detailed explanation on how things work, checkout the [Preact CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
