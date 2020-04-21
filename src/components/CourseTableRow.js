import React from "react";
import {updateCourse} from "../services/CourseService";
import {Link} from "react-router-dom";

class CourseTableRow extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course,
        newField: '',
        newFieldValue: ''


    }

    createField = () =>
        this.props.course[this.state.newField] =  this.state.newFieldValue


    render() {
        return (

            <div className="container">

                <ul className="list-group">


                    {!this.state.editing &&

                    <li className="list-group-item">
                        <Link to={`/course/${this.props.course._id}/list`}>{

                            Object.keys(this.props.course).map((o, i) =>
                                <a hidden={o === "_id" || o === "_createdAt" || o === "_updatedAt" || o === "__v" || o === "_nuid"
                                || o === "_domain" || o === "_courses"}
                                   key={this.props.course._id}>
                                    {this.props.course[o]}
                                    <br/>
                                </a>)

                        }   </Link>

                        <button onClick={() => {
                            this.setState({editing: true});

                        }
                        }>Edit
                        </button>

                    </li>

                    }
                    {
                        this.state.editing &&
                        <li>
                            {
                                Object.keys(this.props.course).map((o, i) =>
                                    <li hidden={o === "_id" || o === "_createdAt" || o === "_updatedAt" || o === "__v" || o === "_nuid"
                                    || o === "_domain" || o === "_courses"}> {o}:
                                        {
                                            <input onChange={(e) =>
                                                this.state.course[o] = e.target.value
                                            }
                                                   value={this.state.course[o]}
                                            />} </li>
                                )}
                            {
                                <input
                                    placeholder="new field"
                                    onChange={(e) => this.setState({
                                        ...this.state,
                                        newField: e.target.value
                                    })}/>

                            }
                            {
                                <input
                                    placeholder="new field value"
                                    onChange={(e) => this.setState({
                                            ...this.state,
                                        newFieldValue: e.target.value
                                        })}
                                        />

                            }

                            <button onClick={() => this.props.deleteCourse(this.props.course)}>Delete</button>
                            <button onClick={
                                (e) => {
                                    this.createField()
                                updateCourse(this.props.course._id, this.props.course).then(status => {
                                })
                                this.setState({
                                    editing: false
                                })

                            }
                            }>Save
                            </button>

                        </li>
                    }

                </ul>


            </div>

        )
    }
}


export default CourseTableRow
