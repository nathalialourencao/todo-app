import React, {Component} from 'react'
import PageHeader from '../templates/pageHeader'

export default class Todo extends Component{
    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
            </div>
        )
    }
}