# Financial Market Feed [![Node.js CI](https://github.com/MicroServices-ServiceMesh/financial-market-feed/actions/workflows/node.js.yml/badge.svg)](https://github.com/MicroServices-ServiceMesh/financial-market-feed/actions/workflows/node.js.yml) [![DeployLambda](https://github.com/MicroServices-ServiceMesh/financial-market-feed/actions/workflows/serverless-deploy.yml/badge.svg)](https://github.com/MicroServices-ServiceMesh/financial-market-feed/actions/workflows/serverless-deploy.yml)

## Tech Stack ![service aws-lambda](https://img.shields.io/badge/-nodejs-green?style=social&logo=Node.js) ![service aws-lambda](https://img.shields.io/badge/-nestjs-green?style=social&logo=NestJS) ![service aws-lambda](https://img.shields.io/badge/-Typescript-green?style=social&logo=TypeScript) ![service aws-lambda](https://img.shields.io/badge/-aws-green?style=social&logo=Amazon+AWS) ![service aws-lambda](https://img.shields.io/badge/-Terraform-green?style=social&logo=Terraform) ![service aws-lambda](https://img.shields.io/badge/-GithubActions-green?style=social&logo=GitHub+Actions)

This project is a NestJS microservice for publishing a Financial Market Feed. Some of markets supported are:
- Daily stock market prices
- Daily Option market prices
- Daily CrypoCurrency prices

This project is a hobby project and not meant to be used for business purposes. The tech stack used are:
- Node.js as the JavaScript runtime
- Nest.js as the Node.js web applications framework
- AWS Lambda for executing the project as a serverless application
- Terraform as the Infrastructure As Code (IaC) tool for provisioning and managing AWS resources
- GitHub Actions as the CI/CD tool

## Project Dependencies

To build and run this project, you'll need the following tools.

* SAM CLI - [Install the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
* Node.js - [Install Node.js 12x+](https://nodejs.org/en/), including the NPM package management tool.
* Docker - [Install Docker community edition](https://hub.docker.com/search/?type=edition&offering=community)
* Terraform  - [Install Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli)

## Build the Application
To build your application for the first time, run the following in your shell:

```console
foo@bar:~$: cd api 
foo@bar:~$: npm install
foo@bar:~$: npm run build-local
```

## Run this application as a Nest.js application
To run this application for the first time, run the following in your shell:
* Assuming the you are in the `api` folder

```console
foo@bar:~$: npm run start:debug
[12:58:55 PM] Starting compilation in watch mode...

[12:59:10 PM] Found 0 errors. Watching for file changes.

Debugger listening on ws://127.0.0.1:9229/a3e42d8c-d364-48ab-812a-e22356effea3
For help, see: https://nodejs.org/en/docs/inspector
[Nest] 23089   - 05/08/2021, 12:59:13 PM   [NestFactory] Starting Nest application...
[Nest] 23089   - 05/08/2021, 12:59:13 PM   [InstanceLoader] AppModule dependencies initialized +78ms
[Nest] 23089   - 05/08/2021, 12:59:13 PM   [RoutesResolver] AppController {}: +201ms
[Nest] 23089   - 05/08/2021, 12:59:13 PM   [RouterExplorer] Mapped {/hello, GET} route +4ms
[Nest] 23089   - 05/08/2021, 12:59:13 PM   [NestApplication] Nest application successfully started +3ms
```

Open up the browser to http://127.0.0.1:3000/hello to invoke the service. 

## Run the Application as a serverless lambda application

To run this application for the first time, run the following in your shell:

```console
foo@bar:~$: cd .. 
foo@bar:~$: sam local start-api
Mounting FinancialMarketApi at http://127.0.0.1:3000/{proxy+} [DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT]
You can now browse to the above endpoints to invoke your functions. You do not need to restart/reload SAM CLI while working on your functions, changes will be reflected instantly/automatically. You only need to restart SAM CLI if you update your AWS SAM template
2021-05-08 12:51:49  * Running on http://127.0.0.1:3000/ (Press CTRL+C to quit)
```

Open up the browser to http://127.0.0.1:3000/hello to invoke the service. 


