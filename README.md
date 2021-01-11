# Room Service

This repo contains examples of [Room Service](https://roomservice.dev/docs) in different situations.

For help using Room Service, or if you'd like to chat about building multiplayer-enabled apps, join our Discord!

[![Discord](https://img.shields.io/discord/771809633126842389?color=7289da&label=discord)](https://discord.gg/4KnxXWzfgs)

## Examples

You can get any of these examples running locally using your package manager
of choice. Just replace `--example-path next.js-minimal` with the name of the desired
example.

```bash
# npm
npx create-next-app --example https://github.com/getroomservice/examples --example-path next.js-minimal
# yarn
yarn create next-app --example https://github.com/getroomservice/examples --example-path next.js-minimal
```

### [next.js-minimal](https://github.com/getroomservice/examples/tree/master/next.js-minimal)

This example has a basic setup with Next.js and an [Auth Webhook](https://roomservice.dev/docs/auth) setup already. Use it as a starting point to build the multiplayer app of your dreams.

### [next.js-presence](https://github.com/getroomservice/examples/tree/master/next.js-presence)

This example has a basic setup with Next.js and shows off [Presence](https://roomservice.dev/docs/react#using-presence), Room Service's real-time user metadata. Use it as a starting point to build things like live cursors.

### [next.js-todolist](https://github.com/getroomservice/examples/tree/master/next.js-todolist)

This example has a basic setup with Next.js and shows off [Lists](https://roomservice.dev/docs/react#using-a-list), a real-time, optimistically updating list data structure.

### [express-minimal](https://github.com/getroomservice/examples/tree/master/express-minimal)

This example has a basic setup with a basic Express server and an [Auth Webhook](https://docs.roomservice.dev/docs/concepts/auth) setup already.
