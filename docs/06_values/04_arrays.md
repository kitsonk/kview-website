# Arrays

Arrays are similar to plain objects, but have extra properties which ensure they
behave like arrays.

When viewing them as values in kview, they are displayed as their JSON
representation.

Also when adding or updating values, they should be providing in their JSON
format. For example:

```json
[1, "string", true, { "a": "b" }]
```

> [!IMPORTANT]
> While array elements can be of any type that is storable in Deno KV, the
> elements are currently serialized to JSON making it not possible to represent
> values not able to be serialized to JSON, like bigint, buffers, sets, dates,
> regexp, and maps.
