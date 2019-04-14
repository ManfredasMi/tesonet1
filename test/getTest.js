const axios = require('axios');
const assert = require('assert');

const url = 'http://ptsv2.com/t/fu807-155472261/post';

describe("Testing GET requests body values:", () => {

    it("username must be equal to automate", () => {
        axios.get(url)
            .then((response) => {
                assert.equal(response.data.username, "automate");
            })
            .catch((error) => {
                console.error("Username is invalid, error occured", error);
            })
    });

    it("password must be equal to everything", () => {
        axios.get(url)
            .then((response) => {
                assert.equal(response.data.password, "everything");
            })
            .catch((error) => {
                console.error("Password is invalid, error occured", error);
            })
    });

    it("urlTarget must be equal to http://ptsv2.com/t/7ty82-1554722743/post", () => {
        axios.get(url)
            .then((response) => {
                assert.equal(response.data.targetUrl, "http://ptsv2.com/t/7ty82-1554722743/post");
            })
            .catch((error) => {
                console.error("TargetUrl is invalid, error occured", error);
            })
    });
});