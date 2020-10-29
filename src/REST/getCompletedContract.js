import regeneratorRuntime from "regenerator-runtime";

/** 
* Retrieves Contract Details
* @param {String} reference_id - the reference code of the contract
* @return {Object} The completed form from reservations component
*/
const getCompletedContract = async (reference_id) => {
    const requestSettings = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }

    let url = `${process.env.DOCUMENT_MICROSERVICE_URL}/api/${reference_id}`
    let response = await fetch(url,requestSettings)
        .catch(() => alert({
            title:"Could not retrieve information from database",
    }))
    if (response == undefined) return undefined;

    let payload = await response.json()
        .catch(() => alert({
            title:"Could not read data recieved, please contact an advisor for assistance",
    }))

    return payload
}

export default getCompletedContract