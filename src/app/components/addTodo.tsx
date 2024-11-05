'use client'
import { NewTodo } from "@/lib/drizzle";
import { useRouter } from "next/navigation";
import { useState } from "react";


const AddTodo = () => {
    const [task, setTask] = useState<NewTodo>({
        task: "",
      });
      const {refresh} = useRouter()
      const handleSumbit = async()=>{
       try {
      
        if (task.task) {
            const res = await fetch("/api/todo", {
                method: "POST",
                body: JSON.stringify({
                    task: task.task
                })
            })
            refresh()
            console.log(res.ok)
            
           }
       } catch (error) {
        console.log(error)
       }
      }
  return (
    <div>
        <form className="w-full flex gap-3" >
            <input onChange={(e)=>{setTask({task: e.target.value})}}
             type="type" className="w-full rounded-full border px-5 py-3 focus:outline-primary"/>
            <button type="button" onClick={handleSumbit} className="px-6 rounded-full shrink-0 bg-gradient-to-br from-primary to-secondary "></button>
        </form>
    </div>
  )
}

export default AddTodo