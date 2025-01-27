# Estimating sizes

One of the challenges of managing data in a Deno KV store is dealing with the
key and value size limitations of Deno KV, especially anticipating if data is
storable before attempting a commit or transaction. The `sizeOf()` function
provides an estimate of byte size of a key or value when serialized for storage
in Deno KV.
