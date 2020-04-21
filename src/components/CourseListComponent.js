
import React from "react";
import CourseTableComponent from './CourseTableComponent'
import {Link} from "react-router-dom";

import  {createCourse, findAllCourses, deleteCourse} from "../services/CourseService"

class CourseListComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    // componentDidMount() {
    //     const allCourses = findAllCourses( )
    //     this.setState({
    //         courses: allCourses
    //     })
    // }
    state = {

        showEditor: false,
        courses: []
    }
    componentDidMount = async () => {

        const allCourses = await findAllCourses(this.props.domain)
        this.setState({
            courses: allCourses
        })


    }



    addCourse = async (domain) => {
        const newCourse = {
            title: this.state.newCourseTitle
        }
        const actualCourse = await createCourse(newCourse, domain)
        console.log(actualCourse)
        const allCourses = await findAllCourses(domain)
        this.setState({
            courses: allCourses
        })


    }
    updateForm = (e) =>
        this.setState({
            newCourseTitle: e.target.value
        })
    deleteCourse = async (deletedCourse, domain) => {
        const status = await deleteCourse(deletedCourse._id, domain)
        const courses = await findAllCourses(this.props.domain)
        this.setState({
            courses: courses
        })

    }


    render() {
        return(

            <div id="box">
                <h1>{this.props.domain}</h1>
                <Link to={'/'}><button>Back</button></Link>

                <CourseTableComponent
                    deleteCourse={this.deleteCourse}
                    courses={this.state.courses}
                    domian={this.props.domain}/>
                <button
                    onClick={() => this.addCourse(this.props.domain)}>
                    Add Course
                </button>
            </div>
        )
    }
}





export default CourseListComponent
