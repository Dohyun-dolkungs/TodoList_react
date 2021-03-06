import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem text="Run the project" done={true} />
            <TodoItem text="Styling components" done={true} />
            <TodoItem text="Making context" done={false} />
            <TodoItem text="Do Features" done={false} />
        </TodoListBlock>
    );
}

export default TodoList;