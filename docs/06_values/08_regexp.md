# Regular Expressions

A regular expression is
[cloneable in JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types)
and therefore can be stored in a Deno KV store.

They should be entered or updated in the same
[literal notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#literal_notation_and_constructor)
used in JavaScript. They will be displayed in the same literal notation (e.g.
`/ab+c/i`).
