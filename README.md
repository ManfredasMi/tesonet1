I've used Mocha testing framework instead of Jasmine, as when running test through jasmine, axios get/post methods somehow did not respond and I was not able to find out why, so in order to not spend too much time on troubleshooting this I've chose Mocha as with Mocha the same exact approach works just perfectly.

In order to run tests:
1. Clone repository to a local machine
2. Open cmd/terminal and run: npm i
3. Run: npm test
4. Check if tests passed/failed in console
