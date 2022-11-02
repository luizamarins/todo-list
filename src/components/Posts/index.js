import { useState } from "react";
import { Task } from "../Task";
import { Container, Content, Form, TaskList } from "./styled";

export function Posts({info}){
    const [tasks, setTasks] = useState([]);

    const [newTaskTxt, setNewTaskTxt] = useState('');

    function handleNewTask(event) {
       setNewTaskTxt(event.target.value)
    }

    function handleCreateNewTask(event) {
        event.preventDefault();
        
        const NewTask = {
            id: Math.random(),
            content: newTaskTxt,
            done: false
        }

        setTasks([...tasks, NewTask]);
        setNewTaskTxt('');
    }

    function deleteTask(id) {
        const taskWithoutDeletedOne = tasks.filter((task) => task.id !== id)
        setTasks(taskWithoutDeletedOne);

    }

    return(
        <Container>
            <header>
                <image>{info.author.avatarUrl}</image>
                <strong>{info.author.name}</strong>
            </header>

            <Content>
                {
                    info.content.map(res => {
                        return (
                            <div key={res.id}>
                                <p>{res.post}</p>
                            </div>
                        )
                    })
                }
            </Content>

            <Form onSubmit={handleCreateNewTask}>
                <strong>adicione um item na sua lista:</strong>
                <textarea
                    placeholder="escreva aqui :)"
                    required
                    value = {newTaskTxt}
                    onChange={handleNewTask}
                />

                <footer>
                    <button type="submit">adicionar</button>
                </footer>
            </Form>

            <TaskList>
                {tasks.map(task => {
                   return(
                        <Task
                            
                            key={task.id}
                            task={task}
                            onDeleteTask={deleteTask}
                        />
                   )
                })}
            </TaskList>

        </Container>
    )
}