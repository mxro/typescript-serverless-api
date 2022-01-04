# Typescript Serverless API Template

This starter project provides an example setup for a serverless API implemented using TypeScript and Terraform. It provides the following features:

- AWS HTTP Gateway to route HTTP requests to AWS Lambda functions
- Handlers for HTTP routes in TypeScript
- Every handler deployed in a separate Lambda for minimal cold-start times
- Configuration for the API Gateway automatically generated by mapping `.ts` files in a `src/routes` folder to HTTP routes
- All infrastructure defined in Terraform for easy extensibility and configuration

A live endpoint for this project is deployed:

[https://typescript-serverless-api.examples.dev.goldstack.party/](https://typescript-serverless-api.examples.dev.goldstack.party/)

This project can be cloned in modified to be used for your API. For this, please adapt the configuration in [`goldstack.json`](https://github.com/mxro/typescript-serverless-api/blob/master/packages/lambda-api/goldstack.json) and specifically here the `"api-domain"` and `"hostedZoneDomain"`. Please also delete the line containing `"tfStateKey"`.

You can also use the [Serverless API](https://goldstack.party/templates/lambda-api) template on [Goldstack](https://goldstack.party). This project was created using this template and the Goldstack UI makes it easy to configure the template for your needs.

For more information on this project, please also see the blog post [Serverless API with TypeScript on AWS](https://maxrohde.com/2022/01/04/serverless-api-with-typescript-on-aws/).

