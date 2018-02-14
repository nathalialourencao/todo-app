import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../templates/grid'
import Button from '../templates/Button'
import { changeDescription } from './todoActions'

const TodoForm = props => {

    const keyHandler = (e) => {
        if (e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }
        else if (e.key === 'Escape'){
            props.handleClear()
        }
    }

    return (
        <div role='form' className='row todo-form'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control' placeholder='Adicione uma tarefa'
                       value={props.description}
                       onKeyUp={keyHandler}
                       onChange={props.changeDescription}
                />
            </Grid>
            <Grid cols='12 3 2'>
                <Button style='primary' icon='plus' onClick={props.handleAdd}></Button>
                <Button style='info' icon='search' onClick={props.handleSearch}></Button>
                <Button style='default' icon='close' onClick={props.handleClear}></Button>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
