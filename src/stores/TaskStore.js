import { defineStore } from "pinia";
import { collection, addDoc, db, query,  onSnapshot,  updateDoc, doc, deleteDoc } from "../firebase.js";


export const useTaskStore = defineStore('taskStore', {
    state: () =>({
        tasks: [],
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
      async  addTask(task)  {
            const docRef = await addDoc(collection(db, "alltasks"), task);
            // console.log("Document written with ID: ", docRef.id);
            await updateDoc(docRef, {
                id: docRef.id
              });
              console.log(docRef.id , 'docid');
              
        },


        async getTask() {

           try {
            const q = query(collection(db, "alltasks"));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
              const tasksfromdb = [];
              querySnapshot.forEach((doc) => {
                  tasksfromdb.push(doc.data());
              });

              this.tasks = tasksfromdb
            });
           } catch (error) {
            console.log(error);
           }
        },


       async deleteTask(id){
            await deleteDoc(doc(db, "alltasks", id));
            
        },
       async togglefav(id, fav){
        const taskRef = doc(db, "alltasks", id);


            await updateDoc(taskRef, {
                isfav: fav
              });


            
        }
    },

    persist: true
})