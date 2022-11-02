import styled from "styled-components";

export const Container = styled.div`
    background-color: dimgray;
    display: flex;
    gap: 1rem;
    //border-radius: 5px;
    padding: 1rem;
    flex-direction: row;
    justify-content: space-between;
    //margin-bottom: 1rem;

    .itemchecked {
        text-decoration: line-through;
    }

`
export const TrashButton = styled.button`
    background: transparent;
    border: 0;
    color: white;
    line-height: 0;
    border-radius: 2px;
    :hover {
        color: pink;
    }
`
export const CheckButton = styled.button`
    background: transparent;
    border: 0;
    color: white;
    line-height: 0;
    border-radius: 2px;
    :hover {
        color: green;
    }
`