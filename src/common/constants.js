
export const API_URL = "http://wbdv-generic-server.herokuapp.com/api/huigao1"
export const DOMAIN_API_URL = "http://wbdv-generic-server.herokuapp.com/api/huigao1/domains"

export const LESSONS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/huigao1/lessons"
export const TOPICS_API_URL = "https://wbdv-sp20-huigao-server-java.herokuapp.com/api/topics"
//"https://wbdv-generic-server.herokuapp.com/api/huigao1/topics"
export const MODULES_LESSONS_API_URL = (moduleId) => `https://wbdv-generic-server.herokuapp.com/api/huigao1/modules/${moduleId}/lessons`
export const LESSONS_TOPICS_API_URL = (lessonId) => `https://wbdv-sp20-huigao-server-java.herokuapp.com/api/lessons/${lessonId}/topics`


// https://wbdv-generic-server.herokuapp.com/api/huigao1/lessons/${lessonId}/topics

export const DEFAULT_CLASS_SIZE = 50
