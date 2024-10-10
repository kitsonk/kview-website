# Values

Deno KV supports any JavaScript built-in types that are supported via structured
clone. The values are limited to 64k in their stored format. kview via
kv-toolbox add support for three blob types. These have no hard size limit.

> [!WARNING]
> Deno KV supports storing any
> [JavaScript values that are cloneable](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#javascript_types),
> but currently doesn't support storing
> [Web API types that are cloneable](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#webapi_types)
> (See: [denoland/deno#12067](https://github.com/denoland/deno/issues/12067)).

The support table is seen below:

| Type                                                 | View | Add | Update | Notes                                                                                                                                                           |
| ---------------------------------------------------- | ---- | --- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [String](./values/primatives#string)                 | ✅   | ✅  | ✅     |                                                                                                                                                                 |
| [Number](./values/primatives#number)                 | ✅   | ✅  | ✅     | Deno KV stores `NaN` and `Infinity`, but currently kview cannot display them as values or allow you to set or update to those values.                           |
| [Boolean](./values/primatives#boolean)               | ✅   | ✅  | ✅     |                                                                                                                                                                 |
| [BigInt](./values/primatives#bigint)                 | ✅   | ✅  | ✅     | Values are entered/edited as number digits                                                                                                                      |
| [Undefined](./values/primatives#undefined)           | ✅   | ✅  |        | Values can be changed to `undefined` but the value itself is not editable intentionally.                                                                        |
| Null                                                 | ✅   | ✅  |        | Values can be changed to `null` but the value itself is not editable intentionally.                                                                             |
| [`Deno.KvU64`](./values/kvu)                         | ✅   | ✅  | ✅     | Values are entered/edited as number digits                                                                                                                      |
| [`Array`](./values/arrays)                           | ✅   | ✅  | ✅     | Values are entered/edited as JSON arrays                                                                                                                        |
| [`Map`](./values/maps)                               | ✅   | ✅  | ✅     | Values are entered/edited as JSON array tuples of key and values                                                                                                |
| [`Set`](./values/sets)                               | ✅   | ✅  | ✅     | Values are entered/edited as JSON arrays                                                                                                                        |
| [`Date`](./values/dates)                             | ✅   | ✅  | ✅     | Values are entered/edited as ISO strings in the format of `YYYY-MM-DDTHH:mm:ss.sssZ` or `±YYYYYY-MM-DDTHH:mm:ss.sssZ`                                           |
| [`RegExp`](./values/regexp)                          | ✅   | ✅  | ✅     | Values are entered/edited as JavaScript regular expression literals (e.g. `/abcd/i`)                                                                            |
| [`Error`](./values/errors)                           | ✅   |     |        |                                                                                                                                                                 |
| [`EvalError`](./values/errors)                       | ✅   |     |        |                                                                                                                                                                 |
| [`RangeError`](./values/errors)                      | ✅   |     |        |                                                                                                                                                                 |
| [`ReferenceError`](./values/errors)                  | ✅   |     |        |                                                                                                                                                                 |
| [`SyntaxError`](./values/errors)                     | ✅   |     |        |                                                                                                                                                                 |
| [`TypeError`](./values/errors)                       | ✅   |     |        |                                                                                                                                                                 |
| [`URIError`](./values/errors)                        | ✅   |     |        |                                                                                                                                                                 |
| [`ArrayBuffer`](./values/buffers#arraybuffer)        | ✅   | ✅  |        | Values are added as URL safe base64 encoded strings. View is displayed as a hex byte viewer.                                                                    |
| [`Int8Array`](./values/buffers#typed-arrays)         | ✅   | ✅  |        | Values are added as URL safe base64 encoded strings. View is displayed as a hex byte viewer.                                                                    |
| [`Uint8ClampedArray`](./values/buffers#typed-arrays) | ✅   | ✅  |        | Values are added as URL safe base64 encoded strings. View is displayed as a hex byte viewer.                                                                    |
| [`Uint8ClampedArray`](./values/buffers#typed-arrays) | ✅   | ✅  |        | Values are added as URL safe base64 encoded strings. View is displayed as a hex byte viewer.                                                                    |
| [`Int16Array`](./values/buffers#typed-arrays)        | ✅   | ✅  |        | Values are added as URL safe base64 encoded strings. View is displayed as a hex byte viewer.                                                                    |
| [`Uint16Array`](./values/buffers#typed-arrays)       | ✅   | ✅  |        | Values are added as URL safe base64 encoded strings. View is displayed as a hex byte viewer.                                                                    |
| [`Int32Array`](./values/buffers#typed-arrays)        | ✅   | ✅  |        | Values are added as URL safe base64 encoded strings. View is displayed as a hex byte viewer.                                                                    |
| [`Uint32Array`](./values/buffers#typed-arrays)       | ✅   | ✅  |        | Values are added as URL safe base64 encoded strings. View is displayed as a hex byte viewer.                                                                    |
| [`Float32Array`](./values/buffers#typed-arrays)      | ✅   | ✅  |        | Values are added as URL safe base64 encoded strings. View is displayed as a hex byte viewer.                                                                    |
| [`Float64Array`](./values/buffers#typed-arrays)      | ✅   | ✅  |        | Values are added as URL safe base64 encoded strings. View is displayed as a hex byte viewer.                                                                    |
| [`BigInt64Array`](./values/buffers#typed-arrays)     | ✅   | ✅  |        | Values are added as URL safe base64 encoded strings. View is displayed as a hex byte viewer.                                                                    |
| [`BigUint64Array`](./values/buffers#typed-arrays)    | ✅   | ✅  |        | Values are added as URL safe base64 encoded strings. View is displayed as a hex byte viewer.                                                                    |
| [Binary Data](./values/blobs#binary-data)            | ✅   | ✅  | ✅     | Values are added/updated by loading files. Only byte length is available as view. This is stored across multiple keys via kv-toolbox.                           |
| [`Blob`](./values/blobs#blob)                        | ✅   | ✅  | ✅     | Values are added/updated by loading files. If the type can be displayed in a browser, it will be displayed. This is stored across multiple keys via kv-toolbox. |
| [`File`](./values/blobs#file)                        | ✅   | ✅  | ✅     | Values are added/updated by loading files. If the type can be displayed in a browser, it will be displayed. This is stored across multiple keys via kv-toolbox. |
| [JSON](./values/objects)                             | ✅   | ✅  | ✅     | Other `object`s use the structured clone algorithm and added/updated by entering a JSON value.                                                                  |
