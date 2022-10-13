<template>
    <!-- <div :key="task.id" v-for="task in tasks"> -->
    <div :key="task.id" v-for="task in allTasks">
        <Task 
        @toggle-reminder = "$emit('toggle-reminder', task.id)" 
        @delete-task="$emit('delete-task',task.id)" 
        :task="task"
        />
    </div>

</template>
<script>
import {mapGetters, mapActions} from 'vuex';
import Task from "../components/Task.vue";
export default {
    name: 'Tasks',
    computed: mapGetters(['allTasks']),
    created(){
        this.fetchTasks();
    },
    methods:{
        ...mapActions(['fetchTasks']),
    },
    props: {
        tasks:Array,
    },
    components:{
        Task
    },
    emits:['delete-task', 'toggle-reminder',],
}
</script>