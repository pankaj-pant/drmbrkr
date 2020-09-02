# Dreambroker Text Analyser

An API endpoint to analyze text. Curl command to call the API might look like this:

    curl --header "Content-Type: application/json" \
    --request POST \
    --data '{"text":"hello 2 times  "}' \
    https://drmbrkr.herokuapp.com/analyze

And the response should be:

    {
        "textLength":{"withSpaces":15,"withoutSpaces":11},
        "wordCount":3,
        "characterCount":[{"e":2},{"h":1},{"i":1},{"l":2},{"m":1},{"o":1},{"s":1},{"t":1}]
    }

* [Live Demo](https://drmbrkr.herokuapp.com/)

### Features

- The characterCount array contains only English letters and is ordered alphabetically.
- CircleCI is used to build, test and deploy the service to Heroku.


## Quick start

1. [Clone the repo](#1-clone-the-repo).
1. [Install app](#2-install-app).
1. [Run the app](#3-run-the-app).
1. [Run tests](#4-run-tests).

### 1. Clone the repo

Clone the `drmbrkr` repository locally. In a terminal, run:

    $ git clone https://github.com/pankaj-pant/drmbrkr.git
    $ cd drmbrkr

### 2. Install app

To install the dependencies run the command:

    $ npm install

### 3. Run the app

This command serves the app at `http://localhost:3000/`.

    $ npm start

### 4. Run tests

To run the 9 included tests, run the command:

    $ npm run test

## License
[MIT](https://choosealicense.com/licenses/mit/)