# Food ordering app from scratch

Building a Food ordering app from scratch to learn advanced ReactJS techniques, TailWind CSS, new testing libraries and more!

## Issue Log

Importing image from local source in React + Parcel build

```
import logo from 'url:./assets/logo.jpg'
```

This tells Parcel to give me the bundled URL of this asset

When internet disconnects browser loses connection to the dev server websocket/assets. The image won't load in dev server, you need to build your app and then test for offline image loading.
