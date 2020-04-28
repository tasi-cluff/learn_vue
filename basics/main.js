Vue.component('task', {
    template: '<li><slot></slot></li>'
});

Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks">{{task.description}}</task>
        </div>
            `,

    data() {
        return { 
            tasks: [
                { description: 'Go to store', completed: true },
                { description: 'Check email', completed: false },
                { description: 'Go farming', completed: true },
                { description: 'Slaughter the pig', completed: true },
            ]
        }
    }
});

var app = new Vue({
    el: '#root',
    data: {
        tasks: [
            { description: 'Poo', completed: true },
            { description: 'Wipe bum', completed: false },
            { description: 'Pull up pants', completed: true },
            { description: 'Jump for joy', completed: false }
        ]
    },
    methods: {

    },
    computed: {
        incompleteTasks() {
            return this.tasks.filter(task => !task.completed);
        },
        completedTasks() {
            return this.tasks.filter(task => task.completed);
        }
    }
});