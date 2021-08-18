Vue.component('my-demo-global-component', {
    data: function() {
        return {
            first_name: 'James',
            last_name: 'Barwick'
        }
    },
    template: 
        `<p>My name is {{first_name}} {{last_name}} the devOps Head not the tail</p>`
})