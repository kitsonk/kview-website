# Sets

When stored in a Deno KV store, instances of `Set` are preserved.

When displayed in kview, the entries of a set are displayed in a table with each
entry being displayed in a JSON format.

When adding or updating a set value, it is edited as an array where each element
is an entry in the set and provided in a JSON format. For example, a set with
three entries would look like this:

```json
[
  { "a": "value" },
  false,
  null
]
```

> [!IMPORTANT]
> While set values can be of any type that is storable in Deno KV, a set which
> contains values that are not expressible in JSON will be displayed, but the
> value will not be editable within kview.
