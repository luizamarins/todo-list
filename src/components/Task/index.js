import {TrashSimple, Check} from 'phosphor-react'
import { useState } from 'react';
import { Container, TrashButton, CheckButton } from "./styled";

export function Task({task, onDeleteTask, onCheckTask }){

    function handleDeleteTask() {
        onDeleteTask(task.id)
    }

    function handleCheckTask() {
       setCheck(batatinha => !batatinha)        
    }

    const [check, setCheck] = useState(false)

    return (
        <Container>
            <p className={check ? 'itemchecked': ''}>{task.content}</p>

            <TrashButton onClick={handleDeleteTask} title="deletar item">
                <TrashSimple size={20}/>
            </TrashButton>

            <CheckButton onClick={handleCheckTask} title="checar item">
                <Check size={25} />
            </CheckButton>
        </Container>
    )
}