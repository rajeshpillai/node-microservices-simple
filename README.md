# A note
This example of microservice is only for educational purpose and as suche the code is kept as lean as possible.

Validations, external configuration etc is avoided to keep the explanation to the point.  So, most things are hardcoded with the specific project for one point of reference.

In real application, following the coding practices as required.

# Project setup
Each microservice is in its own folder.  You can CD into respective folder and do the following steps to run the application

- npm i 
- npm start


# Folders
The below are the details of what each folder contains.

- client
The sample react.js application

- posts
The post microservice

- comments
The comments microservice

- moderation
The comment moderation microservice

- query
The query microservice

- event-bus
The custom node.js event bus

- gateway/proxy
 A node.js proxy server which serves as an entry point for all microservices


