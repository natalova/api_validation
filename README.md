the repo contain test with validation response schema based on openapi documentation.
each time before tests - will be downloaded schema into nodejs workspace and after check structure of response against schema.
after running test - will be generated html report in the /mochawesome-report directory


For launch tests in the /test directory:
- clone repo
- install all dependecies: npm i
- launch tests: npm test

Tests based on:
- axios - for requests
- chai-openapi-response-validator - for validation response
- go-git-it - for fetching openapi spec from github repo