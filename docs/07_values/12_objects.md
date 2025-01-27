# Objects / JSON

Other objects that aren't part of the built-ins covered in the other sections
are serialized using the structured clone algorithm and stored as values.

Within kview they are represented as JSON when displayed and when edited.

> [!IMPORTANT]
> While property values can be of any type that is storable in Deno KV, the
> objects which contain elements that are not expressible in JSON will be
> displayed, but the value will not be editable within kview.
