# Getting started with Vue

1. Setting up a Vue instance 
```
At the root of our Vue app
main.js: use a Vue constructor which is exposed to us by the framework
What you pass to the constructor determine how the app runs
el: element is where the Vue app is going to be place at runtime

Setup the data property which is going to allow us to pass in an object
with many key value pairs which then become available to us in the Vue instance
```
2. Attribute binding
```
one way data bind where we set as HTML attribute based on a value coming from the Vue instance
if the values changes in the Vue app then the appropriate attributes are going to be updated
and the DOM is going to be re-rendered to reflect that.
```