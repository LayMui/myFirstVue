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

3. Rendering with loop v-for directive
```
  <div class="food-item" v-for="food in foods" :key="food.name">
                <p>{{food.name}} - {{food.description}}</p>
                <img v-bind:src="food.src" width="100" height="100">
```

4. Rendering with the conditional directive v-if, v-else-if and v-else
```
 <p v-if="food.percent_carbs >= 80">This food is mostly made up of carbohydrates</p>
                <p v-else-if="food.percent_carbs >= 40 && food.percent_carbs < 80">A significant portion comes from carbohydrates</p>
                <p v-else>This food is not a significant source of carbohydrates</p>
```