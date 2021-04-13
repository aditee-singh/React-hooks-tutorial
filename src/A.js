import React , {Component} from 'react';
import B from './B'


class A extends Component {
    state = { name: 'Aditee Singh' ,
    roll : 20}

    render() {
        console.log('component A working')
        return (
            <div>
                <h6>Component A</h6>
                <B name={this.state.name} />
            </div>
        )
    }
}
export default A;