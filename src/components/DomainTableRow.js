import React from "react";
import {Link} from "react-router-dom";
import {updateDomain} from "../services/DomainServices"

class DomainTableRow extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        domain: this.props.domain
    }

    render() {
        return (
            <div>
                {
                    !this.state.editing &&
                    <Link to={`${this.state.domain.title}`}>
                        {this.state.domain.title}
                    </Link>}
                    <button onClick={() => this.setState({editing: true})}>Edit</button>
                {
                    this.state.editing &&
                    <div>
                        <input
                            onChange={(e) => this.setState({
                                domain: {
                                    ...this.state.domain,
                                    title: e.target.value
                                }
                            })}
                            value={this.state.domain.title}/>
                        <button onClick={() => this.props.deleteDomain(this.props.domain)}>Delete</button>
                        <button onClick={(e) => {
                            updateDomain(this.state.domain._id, this.state.domain).then(status => {})
                            this.setState({
                                editing: false
                            })
                        }}>Save</button>
                    </div>

                }

            </div>

        );
    }
}

export default DomainTableRow
