import React, {Component} from 'react'

class C extends Component{
    render() {
        return (
            <div>
                <h6>Component C</h6>
        {       this.props.name}
            </div>
        )
    }
}

export default C;