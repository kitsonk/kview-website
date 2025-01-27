# ArrayBuffers and typed arrays

`ArrayBuffer` and all typed arrays are able to be stored as values in Deno KV
entries are are able to be displayed in kview.

The display of these values is in a hex byte viewer display, where the bytes of
the buffer are displayed in hex on the left, and if they are printable
single-byte characters, they are displayed on the right.

> [!IMPORTANT]
> Currently the values cannot be edited or updated. This is a planned future
> feature.

New entries can be added with values of this type, but the value has to be in
the format of a base 64 string. For example, the value of `aGVsbG8gd29ybGQ=`
would result in the bytes representing the string `hello world`.
