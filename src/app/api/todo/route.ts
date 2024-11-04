import {sql} from '@vercel/postgres'
import { Todo, NewTodo, db, todoTable } from '@/lib/drizzle';
import { NextRequest, NextResponse } from 'next/server'

export async function GET ( request: NextRequest){

try {
    await sql`CREATE TABLE IF NOT EXISTS todos (
    id serial,
    task VARCHAR(255) 
    );`
const res: Todo[] =await db.select().from(todoTable)

// let neededRes = res[]
    // While using withut drizzle
    // let neededRes = res.rows.find((item) => item.id === 2)
    return NextResponse.json({message: res[0].task})
} catch (err) {
    console.log(err)
    return NextResponse.json({message: "something went wrong"})}
} 


export async function POST ( request: NextRequest){
   
    const req = await request.json()
try {
    if (req.task) {
        // await client.sql`INSERT INTO todos (task) VALUES (${req.task});`
     const postData = await  db.insert(todoTable).values({
            task: req.task
        }).returning()
        console.log(postData)
        return NextResponse.json({message: "Task aded succesfully", data: postData})
    }
    else throw new Error ("Task Field is required")
} catch (errr) {
    return NextResponse.json({message: (errr as {message: string}).message})
}
}
