var app = new Vue({
    el: '#the_food_app',
    data: {
        title: 'The food App',
        subtitle: 'This app is about food!',
        favourites: 0,
        foods: [
            { name: 'apple', description: 'red and crunchy', src: 'images/apple.png', percent_carbs: 96, is_fav:false},
            { name: 'banana', description: 'yellow and soft', src: 'images/banana.png', percent_carbs: 93, is_fav:true},
            { name: 'orange', description: 'sweet and juicy', src: 'images/orange.png', percent_carbs: 53, is_fav:true},
            
        ]
    },
    methods: {
        updateFavourite: function(name, value) {
            let f = _.find(this.foods, function(f) { return f.name === name})

            if (f) {
                f.is_fav = value;

                let fav = 0;
                this.foods.forEach(f => {
                    if(f.is_fav) {
                        fav++;
                    }
                })

                this.favourites = fav;
            }
        }
    },

    components: {
        MyDemoLocalComponent
    }
});