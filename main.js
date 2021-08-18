var app = new Vue({
    el: '#the_food_app',
    data: {
        title: 'The food App',
        subtitle: 'This app is about food!',
        foods: [
            { name: 'apple', description: 'red and crunchy', src: 'images/apple.png'},
            { name: 'banana', description: 'yellow and soft', src: 'images/banana.png'},
            { name: 'orange', description: 'sweet and juicy', src: 'images/orange.png'},
            
        ]
    }
});