import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

export class Home extends Component{
    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false, editModalShow:false}
    }
    refreshList(){
        fetch('http://127.0.0.1:8000/'+'department')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }
    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {deps}=this.state;
  
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            
                        <th>Department Names</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep=>
                            <tr key={dep.DepartmentId}>
                                <td>{dep.DepartmentName}</td>
                                </tr>)}

                                ENGLISH VOCABASKET
                    </tbody>

                    </Table>
                    </div>)
        

    }
}