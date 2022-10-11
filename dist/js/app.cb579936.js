(function(){"use strict";var t={161:function(t,e,n){var a=n(963),s=n(252);const r={class:"container"},o={key:0};function i(t,e,n,a,i,d){const l=(0,s.up)("Header"),c=(0,s.up)("AddTask"),u=(0,s.up)("Tasks");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(l,{onToggleAddTask:d.toogleAddTask,title:"Task Tracker",showAddTask:i.showAddTask},null,8,["onToggleAddTask","showAddTask"]),i.showAddTask?((0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(c,{onAddTask:d.addTask},null,8,["onAddTask"])])):(0,s.kq)("",!0),(0,s.Wm)(u,{onToggleReminder:d.toggleReminder,onDeleteTask:d.deleteTask,tasks:i.tasks},null,8,["onToggleReminder","onDeleteTask","tasks"])])}var d=n(577);function l(t,e,n,a,r,o){const i=(0,s.up)("Button");return(0,s.wg)(),(0,s.iD)("header",null,[(0,s._)("h1",null,(0,d.zw)(n.title),1),(0,s.Wm)(i,{onBtnClick:e[0]||(e[0]=e=>t.$emit("toggle-add-task")),text:n.showAddTask?"Close":"Add Task",color:n.showAddTask?"darkred":"darkgreen"},null,8,["text","color"])])}function c(t,e,n,a,r,o){return(0,s.wg)(),(0,s.iD)("button",{onClick:e[0]||(e[0]=t=>o.onClick()),style:(0,d.j5)({background:n.color}),class:"btn"},(0,d.zw)(n.text),5)}var u={name:"Button",props:{text:String,color:String},methods:{onClick(){this.$emit("btn-click")}}},k=n(744);const m=(0,k.Z)(u,[["render",c]]);var h=m,p={name:"Header",props:{title:String,showAddTask:Boolean},components:{Button:h}};const f=(0,k.Z)(p,[["render",l],["__scopeId","data-v-111111c6"]]);var T=f;function g(t,e,n,a,r,o){const i=(0,s.up)("Task");return(0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.tasks,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e.id},[(0,s.Wm)(i,{onToggleReminder:n=>t.$emit("toggle-reminder",e.id),onDeleteTask:n=>t.$emit("delete-task",e.id),task:e},null,8,["onToggleReminder","onDeleteTask","task"])])))),128)}function v(t,e,n,a,r,o){return(0,s.wg)(),(0,s.iD)("div",{onClick:e[1]||(e[1]=e=>t.$emit("toggle-reminder",n.task.id)),class:(0,d.C_)([n.task.reminder?"reminder":"","task"])},[(0,s._)("h3",null,[(0,s.Uk)((0,d.zw)(n.task.text)+" ",1),(0,s._)("i",{onClick:e[0]||(e[0]=e=>t.$emit("delete-task",n.task.id)),class:"fas fa-times"})]),(0,s._)("p",null,(0,d.zw)(n.task.day),1)],2)}var w={name:"Task",props:{task:Object}};const y=(0,k.Z)(w,[["render",v]]);var b=y,A={name:"Tasks",props:{tasks:Array},components:{Task:b},emits:["delete-task","toggle-reminder"]};const _=(0,k.Z)(A,[["render",g]]);var x=_;const D=t=>((0,s.dD)("data-v-e01c84d2"),t=t(),(0,s.Cn)(),t),O={class:"form-control"},j=D((()=>(0,s._)("label",null,"Task",-1))),C={class:"form-control"},S=D((()=>(0,s._)("label",null,"Day & Time",-1))),$={class:"form-control form-control-check"},R=D((()=>(0,s._)("label",null,"Set Reminder",-1))),Z=D((()=>(0,s._)("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1)));function B(t,e,n,r,o,i){return(0,s.wg)(),(0,s.iD)("form",{onSubmit:e[3]||(e[3]=(...t)=>i.onSubmit&&i.onSubmit(...t)),class:"add-form"},[(0,s._)("div",O,[j,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>o.text=t),name:"text",placeholder:"Add Task"},null,512),[[a.nr,o.text]])]),(0,s._)("div",C,[S,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>o.day=t),name:"day",placeholder:"Add Day & Time"},null,512),[[a.nr,o.day]])]),(0,s._)("div",$,[R,(0,s.wy)((0,s._)("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=t=>o.reminder=t),name:"reminder"},null,512),[[a.e8,o.reminder]])]),Z],32)}var E={name:"AddTask",data(){return{text:"",day:"",reminder:!1}},methods:{onSubmit(t){if(t.preventDefault(),!this.text)return void alert("Please add a task");const e={text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",e),this.text="",this.day="",this.reminder=!1}}};const P=(0,k.Z)(E,[["render",B],["__scopeId","data-v-e01c84d2"]]);var U=P,W={name:"App",components:{Header:T,Tasks:x,AddTask:U},data(){return{tasks:[],showAddTask:!1}},methods:{toogleAddTask(){this.showAddTask=!this.showAddTask},async addTask(t){const e=await fetch("api/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}),n=await e.json();this.tasks=[...this.tasks,n]},async deleteTask(t){if(confirm("Are you sure you wanna delete it?")){const e=await fetch(`api/tasks/${t}`,{method:"DELETE"});200===e.status?this.tasks=this.tasks.filter((e=>e.id!==t)):alert("Error deleting task")}},async toggleReminder(t){const e=await this.fetchTask(t),n={...e,reminder:!e.reminder},a=await fetch(`api/tasks/${t}`,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}),s=await a.json();this.tasks=this.tasks.map((e=>e.id===t?{...e,reminder:s.reminder}:e))},async fetchTasks(){const t=await fetch("api/tasks"),e=await t.json();return e},async fetchTask(t){const e=await fetch(`api/tasks/${t}`),n=await e.json();return n}},async created(){this.tasks=await this.fetchTasks()}};const z=(0,k.Z)(W,[["render",i]]);var H=z;(0,a.ri)(H).mount("#app")}},e={};function n(a){var s=e[a];if(void 0!==s)return s.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,s,r){if(!a){var o=1/0;for(c=0;c<t.length;c++){a=t[c][0],s=t[c][1],r=t[c][2];for(var i=!0,d=0;d<a.length;d++)(!1&r||o>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[d])}))?a.splice(d--,1):(i=!1,r<o&&(o=r));if(i){t.splice(c--,1);var l=s();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[a,s,r]}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,r,o=a[0],i=a[1],d=a[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(d)var c=d(n)}for(e&&e(a);l<o.length;l++)r=o[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},a=self["webpackChunkvue_learning_app"]=self["webpackChunkvue_learning_app"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(161)}));a=n.O(a)})();
//# sourceMappingURL=app.cb579936.js.map