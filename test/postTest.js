const axios = require('axios');
const assert = require('assert');

const url = 'http://ptsv2.com/t/fu807-1554722621/post';

describe("Testing POST requests body values:", () => {

    it("username must be equal to automate", () => {
        axios.post(url, {
            username: 'automate',
            password: 'everything'
        })
            .then((response) => {
                assert.equal(response.data.username, "automate");
            })
            .catch((error) => {
                console.error("Username is invalid, error occured", error);
            });
    });

    it("password must be equal to everything", () => {
        axios.post(url, {
            username: 'automate',
            password: 'everything'
        })
            .then((response) => {
                assert.equal(response.data.password, "everything");
            })
            .catch((error) => {
                console.error("Password is invalid, error occured", error);
            });
    });

    it("targetUrl must be equal to http://ptsv2.com/t/7ty82-1554722743/post", () => {
        axios.post(url, {
            username: 'automate',
            password: 'everything'
        })
            .then((response) => {
                assert.equal(response.data.targetUrl, "http://ptsv2.com/t/7ty82-1554722743/post");
            })
            .catch((error) => {
                console.error("TargetUrl is invalid, error occured", error);
            });
    });
});