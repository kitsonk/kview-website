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

- [Handling data as JSON](./kvtoolbox/json) - Deno KV entries, keys and values
  support complex objects which are not easily represented in JSON, making it
  difficult to accurately represent data in a browser or transfer data between
  processes. The JSON library makes this possible by providing type safe
  utilities to manage Deno KV data as JSON.
- [Importing and exporting](./kvtoolbox/ndjson) - Building on top of the JSON
  capabilities, there are utilities which allow the importing and exporting of
  data of a Deno KV store, including the ability to stream that data over HTTP.
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
- [Estimating sizes of data](./kvtoolbox/size_of) - One of the challenges of
  managing data in a Deno KV store is dealing with the key and value size
  limitations of Deno KV, especially anticipating if data is storable before
  attempting a commit or transaction. The `sizeOf()` function provides an
  estimate of byte size of a key or value when serialized for storage in Deno
  KV.
