This is a minimal example showing off the most basic Room Service setup. An [Auth Webhook](https://docs.roomservice.dev/docs/concepts/auth) is setup, but that's about it. You'll need to get an API Key for it to run. You can do that at [app.roomservice.dev](https://app.roomservice.dev/register).

Then replace "YOUR_API_KEY" in `/pages/api/roomservice.js` to be your actual api key. (Or better yet, use an environment variable!)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy your own

Deploy the example using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/getroomservice/examples/tree/master/next.js-minimal)
