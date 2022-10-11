<template>
    <header>
        <h1>{{title}}</h1>
        <Button 
        @btn-click="$emit('toggle-add-task')" 
        :text="showAddTask ? 'Close' : 'Add Task'" 
        :color="showAddTask ? 'darkred' : 'darkgreen'"/>
    </header>
</template>
<script>
import Button from '../components/Button.vue';
export default {
    name:'Header',
    // props:['title'],
    props:{
        title: String,
        // title:{
        //     type: String,
        //     default: 'Task tracker',
        // }
        showAddTask: Boolean,
    },
    components:{
        Button
    }
}
</script>
<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>