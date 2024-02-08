import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () =>({
        tasks: [
            {id:1, title: "buy milk", isfav: false},
            {id:2, title: "play ball", isfav: true},

        ],
    }),
    getters: {
        fav(){
            return this.tasks.filter( t => t.isfav)
        },
        favcount(){
            return this.tasks.reduce((p, c) => {
                return c.isfav ? p+1 : p
            }, 0)
        },
        totalcount: (state) => {
            return state.tasks.length
        }
    },
    actions: {
        addTask(task) {
           this.tasks.push(task) 
        },
        deleteTask(id){
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })
        },
        togglefav(id){
            const task = this.tasks.find(t => t.id === id)
            task.isfav = !task.isfav
        }
    }
})