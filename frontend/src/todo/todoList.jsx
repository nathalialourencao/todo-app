import React from 'react'
import { connect } from 'react-redux'
import Button from '../templates/Button'
import { bindActionCreators } from 'redux'
import { markedAsDone, markedAsPending, remove } from './todoActions'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                 <td className={todo.done ? 'marked-as-done' : ''}>
                    {todo.description}
                </td>
                <td>
                    <Button style='success' icon='check' hide={todo.done} onClick={() => props.markedAsDone(todo)}></Button>
                    <Button style='warning' icon='undo' hide={!todo.done} onClick={() => props.markedAsPending(todo)}></Button>
                    <Button style='danger' icon='trash-o' hide={!todo.done} onClick={() => props.remove(todo)}></Button>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
            <tr>
                <th>Descrição</th>
                <th className='table-actions'>Ações</th>
            </tr>
            </thead>
            <tbody>
            {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({ markedAsDone, markedAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
