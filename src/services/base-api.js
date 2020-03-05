const BaseApiService = {
    doGetRequest
};

function doGetRequest(endpoint, _headers) {
    let defaultHeaders = {
        "Content-type": "application/json"
    }

    let RequestHeader = new Headers(_headers ? _headers : defaultHeaders)
    let Request = new Request(endpoint, RequestHeader)

    return fetch(Request)
}

export default BaseApiService;
