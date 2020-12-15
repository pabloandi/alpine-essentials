let taskApp = () => {
    return {
        tasks: [],
        newTask: '',

        submit(){
            if(this.newTask){
                this.tasks.push({ body: this.newTask, completed: false}); 
                this.newTask = '';
            }
        }
    }
}

export default taskApp;