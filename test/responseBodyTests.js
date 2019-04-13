const axios = require('axios');
const assert = require('assert');

const url = 'http://ptsv2.com/t/fu807-1554722621/post';

describe("Testing GET requests body values:", function() {

    it("username must be equal to automate", function() {
        axios.get(url)
            .then((response) => {
                assert.equal(response.data.username, "automate");
            })
    });

    it("password must be equal to everything", function() {
        axios.get(url)
            .then((response) => {
                assert.equal(response.data.password, "everything");
            })
    });

    it("urlTarget must be equal to http://ptsv2.com/t/7ty82-1554722743/post", function() {
        axios.get(url)
            .then((response) => {
                assert.equal(response.data.targetUrl, "http://ptsv2.com/t/7ty82-1554722743/post");
            })
    });
});


