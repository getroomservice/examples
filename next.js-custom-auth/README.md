This is a minimal example showing off the most basic Room Service setup. An [Auth Webhook](https://docs.roomservice.dev/docs/concepts/auth) is setup, with Next.js. You'll need to get an API Key for it to run. You can do that at [app.roomservice.dev](https://app.roomservice.dev/register).

Then replace "YOUR_API_KEY" in `/pages/api/roomservice.js` to be your actual api key. (Or better yet, use an environment variable!)

Copy this into your terminal to use this example:
```sh
curl https://raw.githubusercontent.com/getroomservice/examples/master/create.sh | bash -s -- next.js-minimal
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
