import React from "react";

import CourseTableRow from "./CourseTableRow";


const CourseTableComponent = ({courses, deleteCourse, domain}) =>
    <div>
        <table className="table">
            <tbody className="wbdv-tbody">

            {
                courses.map(function (course, index) {
                    return <CourseTableRow
                        domain={domain}
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}/>
                })
            }

            </tbody>
        </table>

    </div>


export default CourseTableComponent
