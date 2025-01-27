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
- [`.commitVersionStamp()`](https://jsr.io/@kitsonk/kv-toolbox/doc/~/KvToolbox.prototype.commitVersionStamp)
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

## Blobs

The ability to work arbitrarily size blobs is one of the core capabilities of
the library that is integrated into the toolbox.

## Key utilities

## Batched atomics

## Exporting and importing

## Crypto
