import { useEffect, useState } from "react"

const useTasks = () =>{
    const [tasks,setTasks] = useState([]);
    useEffect(()=>{
        fetch('https://todo-app-for-special-grp.herokuapp.com/tasks')
        .then(res=>res.json())
        .then(data => setTasks(data));
    },[])

    return [tasks,setTasks];
}
export default useTasks;