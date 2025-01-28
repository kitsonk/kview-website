# Toolbox

The [`KvToolbox`](https://jsr.io/@kitsonk/kv-toolbox/doc/~/KvToolbox) and
[`CryptoKvToolbox`](https://jsr.io/@kitsonk/kv-toolbox/doc/~/CryptoKvToolbox)
provides a [`Deno.Kv`](https://docs.deno.com/api/deno/~/Deno.Kv) like API
surface but enriched with many of the capabilities of the rest of the library.

To create an instance of `KvToolbox` utilize the `openKvToolbox()` function:

```ts
import { openKvToolbox } from "jsr:@kitsonk/kv-toolbox";

const kv = await openKvToolbox();
```

To create an instance of `CryptoKvToolbox` utilize the `openKvToolbox()`
function along with an encryption key:

```ts
import { openKvToolbox } from "jsr:@kitsonk/kv-toolbox";

const encryptWith = Deno.env.get("ENCRYPTION_KEY");
const kv = await openKvToolbox({ encryptWith });
```

## Standard Deno KV capabilities

The KV toolbox provides all of the standard methods that work like the `Deno.Kv`
methods:

- [`.close()`](https://jsr.io/@kitsonk/kv-toolbox/doc/~/KvToolbox.prototype.close)
- [`.commitVersionstamp()`](https://jsr.io/@kitsonk/kv-toolbox/doc/~/KvToolbox.prototype.commitVersionstamp)
- [`.enqueue()`](https://jsr.io/@kitsonk/kv-toolbox/doc/~/KvToolbox.prototype.enqueue)
- [`.get()`](https://jsr.io/@kitsonk/kv-toolbox/doc/~/KvToolbox.prototype.get)
- [`.getMany()`](https://jsr.io/@kitsonk/kv-toolbox/doc/~/KvToolbox.prototype.getMany)
- [`.list()`](https://jsr.io/@kitsonk/kv-toolbox/doc/~/KvToolbox.prototype.list)
- [`.listenQueue()`](https://jsr.io/@kitsonk/kv-toolbox/doc/~/KvToolbox.prototype.listenQueue)
- [`.set()`](https://jsr.io/@kitsonk/kv-toolbox/doc/~/KvToolbox.prototype.set)
- [`.watch()`](https://jsr.io/@kitsonk/kv-toolbox/doc/~/KvToolbox.prototype.watch)

As well as there are other methods which behave similar to `Deno.Kv` but instead
provide enhanced functionality:

- [`.atomic()`](https://jsr.io/@kitsonk/kv-toolbox/doc/~/KvToolbox.prototype.atomic) -
  Returns a toolbox `BatchedAtomicOperation` instead of the regular
  `Deno.AtomicOperation`
- [`.delete()`](https://jsr.io/@kitsonk/kv-toolbox/doc/~/KvToolbox.prototype.delete) -
  Allows for an option to delete a toolbox blob instead of just a standard
  key/value.

## Queries

The ability to generate a new [Query](./query) is integrated within the toolbox:

- [`.query()`](https://jsr.io/@kitsonk/kv-toolbox/doc/~/KvToolbox.prototype.query) -
  Returns a new instance of a `Query` which can be used to query the store.

## Blobs

The ability to work arbitrarily size blobs is one of the core capabilities of
the library that is integrated into the toolbox:

- [`.getAsBlob()`](https://jsr.io/@kitsonk/kv-toolbox/doc/~/KvToolbox.prototype.getAsBlob) -
  Return a blob value from the store as an HTTP `Response` of which the body of
  the response will be a streaming version of the content of the blob.
- [`.getBlob()`](https://jsr.io/@kitsonk/kv-toolbox/doc/~/KvToolbox.prototype.getBlob) -
  Return an entry where the value is the blob that was originally set.
- [`.getMeta()`](https://jsr.io/@kitsonk/kv-toolbox/doc/~/KvToolbox.prototype.getMeta) -
  Return the blob meta data related to a blob entry. This is useful when wanting
  to understand information about the blob without actually reading the value
  out of the store.
- [`.setBlob()`](https://jsr.io/@kitsonk/kv-toolbox/doc/~/KvToolbox.prototype.setBlob) -
  Set a blob value within the store.

See the [Blobs](./blobs) documentation for more details on how the toolbox
handles arbitrarily sized blob values.

## Key utilities

## Batched atomics

## Exporting and importing

## Crypto
