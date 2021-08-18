var app = new Vue({
    el: '#the_food_app',
    data: {
        title: 'The food App',
        subtitle: 'This app is about food!',
        foods: [
            { name: 'apple', description: 'red and crunchy', src: 'images/apple.png', percent_carbs: 96, is_fav:false},
            { name: 'banana', description: 'yellow and soft', src: 'images/banana.png', percent_carbs: 93, is_fav:true},
            { name: 'orange', description: 'sweet and juicy', src: 'images/orange.png', percent_carbs: 53, is_fav:true},
            
        ]
    }
});