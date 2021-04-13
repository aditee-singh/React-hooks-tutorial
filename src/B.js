import React , {Component} from 'react';
import C from './C';

class B extends Component {
    render() {
        return (
            <div>
                <h6>Component B</h6>
                <C name={this.props.name} />
            </div>
        )
    }
}

export default B;