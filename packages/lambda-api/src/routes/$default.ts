import {
  Handler,
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from 'aws-lambda';

type ProxyHandler = Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handler: ProxyHandler = async (event, context) => {
  return {
    statusCode: 201,
    headers: {
      'content-type': 'text/html',
    },
    body: `
    <html>
      <head>
        <title>TypeScript Serverless API Example</title>
      </head>
      <body>
        <h1>TypeScript Serverless API Example</h1>
        <p>Try out some of the endpoints!</p>
        <ul>
          <li><a href='/echo'>/echo?message=[message]</a>
          <li><a href='/user/1234'>/user/[id]</a>
        </ul>
        <p>For more information, see the blog post <a href='https://maxrohde.com/2022/01/04/serverless-api-with-typescript-on-aws/'>Serverless API with TypeScript on AWS<a></p>
      </body>
    </html>
    `,
  };
};
