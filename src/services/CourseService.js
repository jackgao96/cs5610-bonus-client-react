import {API_URL} from "../common/constants";

export const updateCourse = async (courseId, course,domain) => {
    const response = await fetch(`${API_URL}/${domain}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const deleteCourse = async (courseId,domain) => {
    const response = await fetch(`${API_URL}/${domain}/${courseId}`, {
        method: 'DELETE'
    })
    return await response.json()
}
export const findCourseById = async (courseId) => {
    return fetch(`${API_URL}/${courseId}`)
        .then(response => response.json())
}


export const createCourse = async (course, domain) =>
{
    const response = await fetch(`${API_URL}/${domain}`, {
        method: "POST",
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const findAllCourses = (domain) => {
    return fetch(`${API_URL}/${domain}`)
        .then(response => response.json())
}
