# Maps

When stored in a Deno KV store, instances of `Map` are preserved.

When displayed in kview, the entries of a map are displayed in a table with each
key and value being displayed in a JSON format.

When adding or updating a map value, it is edited as an array where each key and
value are an two element array, with each entry being provided in a JSON format.
For example, a map with three entries would look like this:

```json
[
  ["a key", { "a": "value" }],
  [1, false],
  [[1, 2, 3], null]
]
```

> [!IMPORTANT]
> While map keys and values can be of any type that is storable in Deno KV, a
> map which contain keys or values that are not expressible in JSON will be
> displayed, but the value will not be editable within kview.
