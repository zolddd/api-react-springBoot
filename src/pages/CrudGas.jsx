import { getGases } from "../api/gas.api"

export default function CrudGas() {

    useEffect(() => {
        async function loadTasks(){
          const response= await getGases()
          console.log(response.data)
          
        }
        loadTasks()
      }, [])
    
      const renderMain=()=>{
        if(tasks.length===0) return <h1>No tasks find</h1>
        return tasks.map(task=>(
          <TaskCard task={task} key={task.id}/>
        ))
    
      }


  return (
    <div>CrudGas</div>
  )
}
