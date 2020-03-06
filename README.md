# ropinhas-finder-web

- App developed with React JS to improve knowledge.

### First Steps

After you clonning or download this repository you have to enter on folder using Terminal or Command Prompt 
and run the following command.

```
    npm install
```

This command will install all `app dependencies` .

- After that you have to create a file inside `src/constants` with name `constants.js` like below.

```javascript
const Constants = {
    BASE_HOST: '{{ your api base host }}',
    BASE_API_PATHS: {
        getPointsByStreamer: (streamerName, username) => `${Constants.BASE_HOST}/points/${streamerName}/${username}`,
        getStoreItemsByStreamer: (streamerName, streamType) => `${Constants.BASE_HOST}/items/${streamerName}/${streamType}`,
        getStreamerList: () => `${Constants.BASE_HOST}/streamers/list`,
        getPointsFromAllStreamerList: (username) => `${Constants.BASE_HOST}/streamers/points/total/${username}`
    }
}

export default Constants;
```
