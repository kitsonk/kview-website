# kv-toolbox

`kv-toolbox` is a collection of utilities that enhance the experience working
with [Deno KV](https://deno.com/kv).

The default export of the library provides a way to encapsulate all the
functionality into a single toolbox:

```ts
import { openKvToolbox } from "jsr:@kitsonk/kv-toolbox";

const kv = await openKvToolbox();
```

See [the toolbox section](./kvtoolbox/toolbox) of the documentation for more
information.

All of the capabilities of the toolbox, plus others, are available as discreet
exports from the library:

- [Querying and filtering](./kvtoolbox/query) - Ability to querying Deno KV
  stores with a fluent API.
- [Working with keys](./kvtoolbox/keys) - A collection of utilities which make
  it easier to manage and structure keys in Deno KV in ways that can provide a
  higher order structure to data in a store.
- [Handling binary data/blobs](./kvtoolbox/blobs) - Deno KV has limits on the
  size of values in a store. When dealing with larger binary data, it can be
  complicated managing those limits. The toolbox provides the ability to work
  with arbitrarily sized binary data as well as provides a few enhancements that
  enhance support for web standard `Blob` and `File` types.
- [Batching atomics](./kvtoolbox/batched_atomics) - When doing complex atomic
  transactions with Deno KV, it can be complex to make them infallible with Deno
  KV due to limits in the transaction limits. Batched atomics provides another
  layer (as well at integrates the ability to manage blobs) which helps ensure
  that transactions are batched and managed to make them infallible.
- [Encrypting and decrypting data](./kvtoolbox/crypto) - For certain workloads,
  it is important to be able to ensure that even if another process has access
  to the store, that it may not have the ability to read data in the store
  without access to specific encryption keys. The toolbox provides mechanism to
  encrypt values at rest.

> [!IMPORTANT]
> The JSON, NDJSON and size estimation capabilities of _kv-toolbox_ have been
> contributed to [@deno/kv-utils](https://jsr.io/@deno/kv-utils) and are now
> maintained there.
