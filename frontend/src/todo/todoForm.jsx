import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../templates/grid'
import Button from '../templates/Button'
import { changeDescription, search} from './todoActions'

class TodoForm extends Component{
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(e){
        if (e.key === 'Enter'){
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        }
        else if (e.key === 'Escape'){
            props.handleClear()
        }
    }

    render(){
        return(
            <div role='form' className='row todo-form'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control' placeholder='Adicione uma tarefa'
                           value={this.props.description}
                           onKeyUp={this.keyHandler}
                           onChange={this.props.changeDescription}
                    />
                </Grid>
                <Grid cols='12 3 2'>
                    <Button style='primary' icon='plus' onClick={this.props.handleAdd}></Button>
                    <Button style='info' icon='search' onClick={this.props.handleSearch}></Button>
                    <Button style='default' icon='close' onClick={this.props.handleClear}></Button>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
