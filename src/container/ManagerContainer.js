import React from "react";


import {deleteCourse, createCourse, findAllCourses, findCourseById} from "../services/CourseService"
import {BrowserRouter as Router, Route} from "react-router-dom"
import CourseListComponent from "../components/CourseListComponent";
import DomainComponent from "../components/DomainComponent";
import {createDomain, deleteDomain, findAllDomains} from "../services/DomainServices";

class ManagerContainer extends React.Component {


    state = {
        showEditor: false,
        domains: [],
        newDomainTitle: 'New Domain'
    }
    componentDidMount = async () => {

        const allDomain = await findAllDomains()
        this.setState({
            domains: allDomain
        })


    }
    addDomain = async () => {
        const newDomain = {
            title: this.state.newDomainTitle
        }
        const actualDomain = await createDomain(newDomain)
        console.log(actualDomain)
        const allDomains = await findAllDomains()
        this.setState({
            domains: allDomains
        })


    }
    updateForm = (e) =>
        this.setState({
            newDomainTitle: e.target.value
        })
    deleteDomain = async (deletedDomain) => {
        const status = await deleteDomain(deletedDomain._id)
        const domains = await findAllDomains()
        this.setState({
            domains: domains
        })

    }

    render() {
        return (
            <div>
                <Router>
                    <Route path="/"
                           exact={true}
                           render={() =>
                               <DomainComponent
                                   updateForm={this.updateForm}
                                   newDomainTitle={this.state.newDomainTitle}
                                   addDomain={this.addDomain}
                                   deleteDomain={this.deleteDomain}
                                   domains={this.state.domains}
                               />
                           }/>
                    <Route path="/:domain"
                           exact={true}
                           render={(props) =>
                               <CourseListComponent
                                   {...props}
                                   domain={props.match.params.domain}
                               />
                           }/>
                    <Route
                        path="/:domain/:domainId/list"
                        exact={true}
                        render={(props) =>
                            <CourseListComponent
                                {...props}
                                domains={this.state.domains}
                                domainId={props.match.params.domainId}/>
                        }/>

                </Router>
            </div>
        )
    }
}

export default ManagerContainer
