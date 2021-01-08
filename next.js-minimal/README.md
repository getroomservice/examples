This is a minimal example showing off the most basic Room Service setup. An [Auth Webhook](https://docs.roomservice.dev/docs/concepts/auth) is setup, with Next.js. You'll need to get an API Key for it to run. You can do that at [app.roomservice.dev](https://app.roomservice.dev/register).

## Getting Started

Copy this into your terminal to use this example:
```sh
yarn create next-app --example https://github.com/getroomservice/examples --example-path next.js-minimal
```

Then add `ROOMSERVICE_API_KEY=<your api key>` to a `.env` file in this directory.


Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
