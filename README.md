# Test Setup

Clone this repo to get yourself setup for some TDD for a node server.
`test/handler.js` contains a test that is failing!
Your first job is to make it pass.

## Exploration
Use `scratch.js` to explore requests, responses and the rest of the node HTTP module.
It logs the following in the terminal:
  * the request received by the server
  * the response the server has sent
You can alter the request object and see how the response changes.
You can write code without tests here, but **you can't copy any code from the file.**

You should be happy for all the code in `scratch.js` to be deleted at any point --
it's for you to learn what's possible.

## Testing

There's already one failing test.
You can make it pass before you write your next test.
Then, convert the spec of the problem into tests.
You can pass each test as you write it or write all the tests then pass them all,
whichever you prefer.

## Implement
`handler.js` is the file you will need here.

## The Spec

1. Visiting /name/richard should return an h1 containing richard.
2. Posting a request to /post-at-me-bro should return the data that was posted
3. Visiting /post-at-me-bro (a GET request) should return a div saying 'Post only plz :)'
