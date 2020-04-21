import {DOMAIN_API_URL} from "../common/constants";


export const findAllDomains = ( ) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/huigao1/domains`)
        .then(response => response.json())

export const createDomain = (domain) =>
    fetch(DOMAIN_API_URL, {
        method: "POST",
        body: JSON.stringify(domain),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const updateDomain = async (domainId, domain) =>
{
    const response = await fetch(`${DOMAIN_API_URL}/${domainId}`, {
        method: 'PUT',
        body: JSON.stringify(domain),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const deleteDomain = (domainId) =>
    fetch(`${DOMAIN_API_URL}/${domainId}`, {
        method: 'DELETE'
    }).then(response => response.json())

export default {
    findAllDomains,
    deleteDomain,
    updateDomain,
    createDomain

}
