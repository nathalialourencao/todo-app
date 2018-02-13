import React from 'react'
import Grid from '../templates/grid'
import Button from '../templates/Button'

export default props => (
    <div role='form' className='row todo-form'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control' placeholder='Adicione uma tarefa'
                   value={props.description}
                   onChange={props.handleChange}
            />
        </Grid>
        <Grid cols='12 3 2'>
            <Button style='primary' icon='plus' onClick={props.handleAdd}></Button>
            <Button style='info' icon='search' onClick={props.handleSearch}></Button>
            <Button style='default' icon='close' onClick={props.handleClear}></Button>
        </Grid>
    </div>
)