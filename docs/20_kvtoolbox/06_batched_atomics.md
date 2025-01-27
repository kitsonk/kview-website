# Batched atomics

When doing complex atomic transactions with Deno KV, it can be complex to make
them infallible with Deno KV due to limits in the transaction limits. Batched
atomics provides another layer (as well at integrates the ability to manage
blobs) which helps ensure that transactions are batched and managed to make them
infallible.
