import regeneratorRuntime from "regenerator-runtime";
import alert from "~/src/lib/alert"

/** 
* Sends contract details to the backend server
* @param {Object} contractDetails - The completed form from reservations component
* @return {String} Reference code
*/
const postCompletedContract = async (contractDetails) => {

    const requestSettings = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(contractDetails) // body data type must match "Content-Type" header
    }

    let url = `${process.env.DOCUMENT_MICROSERVICE_URL}/api`
    let response = await fetch(url,requestSettings)
        .catch(() => alert({
            title:"Could not submit information to database",
        }))
    if (response == undefined) return undefined;
    let response_body = await response.json()
        .catch(() => alert({
            title:"Read data recieved from database",
        }))
    let reference_id = await response_body.ref_id
    return reference_id
}

export default postCompletedContract