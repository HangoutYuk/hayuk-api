# HangoutYuk API


### This backend uses [Node.js](https://nodejs.org/) and was written fully using Javascript. The library, Cloud Architecture Diagram & GCP API used are as follows:


## Cloud Diagram 
Below are the cloud architecture diagram used for HangoutYuk 

<img src="https://raw.githubusercontent.com/HangoutYuk/.github/main/assets/cloud_diagram_black.png"/>


## Library used

1. [express](https://www.npmjs.com/package/express)
2. [mysql2](https://www.npmjs.com/package/mysql2)
3. [nanoid@3.3.4](https://www.npmjs.com/package/nanoid)
4. [@google-cloud/storage](https://www.npmjs.com/package/@google-cloud/storage)
5. [sequelize](https://www.npmjs.com/package/sequelize)
6. [multer](https://www.npmjs.com/package/multer)
7. [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
8. [bcrypt](https://www.npmjs.com/package/bcrypt)
9. [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)
10. [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
11. [axios](https://www.npmjs.com/package/axios)
12. [dotenv](https://www.npmjs.com/package/dotenv)
13. [cors](https://www.npmjs.com/package/cors)
14. [http-status](https://www.npmjs.com/package/http-status)

## Google Cloud Platform API 

<p style="text-align: center; background-color: #eee; display: inline-block; padding: 14px 20px; border-radius: 15px;">
<img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" width="250"/>
</p>

### App Engine
#### App Engine used for deploying this Node.js Backend and Poll Website

<img src="https://symbols.getvecta.com/stencil_4/8_google-app-engine.c22bd3c7a9.svg" width="50" height="50"/>

### Cloud Run
#### Cloud Run used for deploying the ML Recommender API Endpoint

<img src="https://raw.githubusercontent.com/HangoutYuk/.github/main/assets/cloud_run.svg" width="50" height="50"/>

### Cloud SQL
#### Cloud SQL used for storing and managing databases

<img src="https://symbols.getvecta.com/stencil_4/45_google-cloud-sql.35ca1b4c38.svg" width="50" height="50"/>

### Maps Platform API
#### Maps Platform API is used for fetching details about places

<img src="https://symbols.getvecta.com/stencil_3/6_google-maps.4c510e2650.svg" width="50" height="50"/>

### Cloud Build
#### Cloud Build is used for implementing CI/CD on the ML Recommender, Backend, and Poll Website

<img src="https://symbols.getvecta.com/stencil_4/15_google-cloud-build.57cf1edb07.svg" width="50" height="50"/>

### Artifact Registry
#### Artifact Registry is used for storing and managing container images 

<img src="https://raw.githubusercontent.com/HangoutYuk/.github/main/assets/artifact_registry.svg" width="50" height="50"/>

### Vertex AI
#### Vertex AI is used for storing model in the Model Registry and deploying the model to Endpoint for online prediction

<img src="https://raw.githubusercontent.com/HangoutYuk/.github/main/assets/vertexai.svg" width="50" height="50"/>

### Cloud Storage
#### Cloud Build is used for storing ML Model and  user assets such as user photo profile

<img src="https://symbols.getvecta.com/stencil_4/47_google-cloud-storage.fee263d33a.svg" width="50" height="50"/>

## API Documentation
The documentation is included in the backend itself by visiting **/api-docs** when the app is running.
But we also provided the swagger OpenAPI-compatible file formatted in YAML [here](https://raw.githubusercontent.com/HangoutYuk/hayuk-api/dev/docs/swagger.api.docs.yaml), copy the URL then you can use [Swagger Editor](https://editor.swagger.io) and paste the URL to check the API Docs.

## Cloud Computing Members

| Bangkit ID  | Name                      | University                       | Contact                                                                     |
| ----------- | ------------------------- | -------------------------------- | --------------------------------------------------------------------------- |
| C360DSX3696 | Rafsanjani Nurul Irsyad | Universitas Telkom | [LinkedIn](https://www.linkedin.com/in/rafsanjani-ni/) |
| C181DSX2192 | Ariq Muhammad Sulthan | Universitas Indonesia | [LinkedIn](https://www.linkedin.com/in/ariqsulthan/) |
