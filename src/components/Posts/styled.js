import styled from "styled-components";

export const Container = styled.div`
    background-color: transparent;
    border-radius: 5px;
    border: 1px dashed black;
    padding: 30px;
    gap: 1rem;

    header {
        display: flex;
        align-items: center;

        img {
            width: 5rem;
            height: 5rem;
            border-radius: 6px;
            border:1px solid black;
            //outline: 4px solid peachpuff;
        }

        strong {
            line-height:  1.6;
            margin-left: 1rem;
            font-size: 20px;
            color: dimgray;
        }
    }
`;

export const Content = styled.div`
    margin-top: 1.5rem;
    line-height: 1.6;
    color: darkorchid;
`;

export const Form = styled.form`
    background-color: lightgray;
    width: 100%;
    margin-top: 1.5rem;
    padding: 1.5rem 1rem;
    //border-top: 1px solid black;
    border-radius: 20px;
    border: 1px dashed #c4c;

    strong {
        line-height: 1.6;
        color: #c4c;
    }

    textarea {
        width: 100%;
        resize: none;
        border: 0;
        border-radius: 5px;
        height: 5rem;
        color: black;
        padding: 10px;
        line-height: 1.3;
        margin-top: 1rem;
    }

    button {
        padding: 0.5rem 1rem;
        margin-top: 1rem;
        border-radius: 15px;
        border: 0;
        background-color: azure;
        transition: background-color 0.5s;
    }

    button[type=submit]:not(:disabled):hover{
        background: cornflowerblue;
    }

`;

export const TaskList = styled.div`
    margin-top: 2rem;
`;