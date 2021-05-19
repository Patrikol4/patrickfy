import axios from 'axios';

export const selectRandomKey = () => {
    const keys = process.env.YOUTUBE_KEYS.split(" ");
    const random = Math.floor(Math.random() * Math.floor(keys.length));
    return keys[random];
};

export default axios.create({
    baseURL: "",
    params: {
        part:"snippet",
        videocategoryId: 10,
        type: "video",
        key: selectRandomKey()
    }
});

