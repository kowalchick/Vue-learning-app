import axios from 'axios';
import axiox from 'axios';

const state ={
    tasks:[] //uzupelnic
};
const getters = {
    allTasks:(state)=>state.tasks
};
const actions = {
    async fetchTasks({commit}){
        const response = await axiox.get('api/tasks');

        commit('setTasks',response.data);
    },
    async addTask({commit},text, day, reminder){
        const response= await axios.post('api/tasks', {text,day, reminder:false});
        commit('newTask',response.data);
    },
    async deleteTask({commit}, id){
        const response = await axios.delete(`api/tasks/${id}`);
        commit('removeTask',id)

    },
};
const mutations ={
    setTasks:(state,tasks)=>(state.tasks=tasks),
    newTask:(state,task)=>state.tasks.unshift(task),
    removeTask:(state, id)=>state.tasks=state.tasks.filter(task=>task.id !==id)
};

export default {
    state, 
    getters,
    actions,
    mutations
};