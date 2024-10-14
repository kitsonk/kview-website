# Objects / JSON

Other objects that aren't part of the built-ins covered in the other sections
are serialized to JSON and stored as values.

Within kview they are represented as JSON when displayed and when edited.

> [!IMPORTANT]
> While property values can be of any type that is storable in Deno KV, the
> elements are currently serialized to JSON making it not possible to represent
> values not able to be serialized to JSON, like bigint, buffers, sets, dates,
> regexp, and maps.
