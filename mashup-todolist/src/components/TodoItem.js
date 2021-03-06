import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

// rightside garbage can
const Remove = styled.div`
    opacity: 0; 
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
`;

// leftside check sign
const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props => 
      props.done && 
      css`
         border: 1px solid #38d9a9;
         color: #38d9a9;
    `}
`;

// text
const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props =>
      props.done &&
      css`
        color: #ced4da;
    `}
`;

// sum up Remove, CheckCircle, Text 
const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;

    // when cursors on TodoItemBlock
    &:hover {
        ${Remove} {
            opacity: 1;
        }
    }
`;

function TodoItem({id, done, text}) {
    return (
        <TodoItemBlock>
            <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;