import React from 'react';
import {shallow} from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import '@testing-library/jest-dom';
import { TodoList } from '../../../components/08-useReducer/TodoList';


describe('Pruebas en TodoList', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(
        <TodoList 
            todos = {demoTodos}
            handleDelete = {handleDelete}
            handleToggle = {handleToggle}
        />
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener dos <TodoListItem/>', () => {
        const TodoListItem = wrapper.find('TodoListItem');
        expect(TodoListItem.length).toBe(demoTodos.length);
        expect(TodoListItem.at(0).prop('handleDelete')).toEqual(expect.any(Function));
    });
})
