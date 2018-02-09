import React from 'react'
import Grid from '../templates/grid'
import Button from '../templates/Button'

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control' placeholder='Adicione uma tarefa'/>
        </Grid>
        <Grid cols='12 3 2'>
            <Button style='primary' icon='plus'></Button>
        </Grid>
    </div>
)