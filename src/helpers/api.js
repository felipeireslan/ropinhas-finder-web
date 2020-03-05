import Constants from './../constants/constants';

export const getProductListByStreamerName = (streamerName, streamType) => {
    const endpoint = Constants.BASE_API_PATHS.getStoreItemsByStreamer(streamerName, streamType)

    return fetch(endpoint)
}

export const getStreamerList = () => {
    return new Promise((resolve, reject) => {
        const endpoint = Constants.BASE_API_PATHS.getStreamerList()

        fetch(endpoint)
            .then(res => res.json())
            .then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
    })
}