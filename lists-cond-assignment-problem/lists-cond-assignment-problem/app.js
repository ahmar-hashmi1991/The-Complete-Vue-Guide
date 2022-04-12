const app = Vue.createApp({
    data() {
        return {
            task: '',
            tasks: [],
            isTaskListVisible: true,
        }
    },
    computed: {
        buttonCaption() {
            return this.isTaskListVisible ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.task);
        },
        toggleTaskList() {
            this.isTaskListVisible = !this.isTaskListVisible;
        }
    }
});

app.mount('#assignment');