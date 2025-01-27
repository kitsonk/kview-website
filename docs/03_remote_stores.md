# Remote stores

kview supports connecting to [remote stores](https://github.com/denoland/denokv)
which are self hosted Deno KV stores which can be connected to via the Deno CLI.

## Add a remote store

When setting up a connection to a new remote store, choose _Add remote store_
button from the home page or from the _Remote_ item on the left hand side. This
will present a dialog which requires the connection URL and an access token with
an optional label:

<img src="/images/add_remote.png" alt="screenshot of the add remote store dialog in kview" width="350" class="mx-auto" />

The URL port and access token are configured when
[running the remote store](https://github.com/denoland/denokv?tab=readme-ov-file#how-to-run).

> [!IMPORTANT]
> There is not currently a concise way of checking if a connection is valid
> (see: [denoland/deno#21211](https://github.com/denoland/deno/issues/21211)).
> Therefore it is important to try to ensure the connection information is
> correct and to use the _Validate connection_ button before adding a remote
> store.

## Accessing the remote store

Once added, the remote store will be available for selection and can be
[navigated](./navigating) once selected.
