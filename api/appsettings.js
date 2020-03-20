import axios from 'axios'

export default axios.create({
    baseURL: `https://coding-challenge-api.aerolab.co`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTZhM2E5YTMxMmE4MjAwNmY0ZGE2ZTQiLCJpYXQiOjE1ODQwMjAxMjJ9.SDOrAg-xoASKgp_n2Z5-tMoWE7Ur0jo8doCKxqaZw58`
    }
})