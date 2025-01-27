# Operations

When performing a _where_ or _value_ condition, an operation needs to be
supplied.

When an operator is selected with the exception of the _kind of_ operator, a
comparison value type and value must be supplied. For more on how these work,
see the [Condition values](./value) section.

There are several operations that can be performed:

| Operation      | Description                                                  | Notes                                                                                     |
| -------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| _<_            | less than                                                    | Follows standard Javascript comparisons of values                                         |
| _<=_           | less than or equal                                           | Follows standard Javascript comparisons of values                                         |
| _==_           | equals                                                       | Performs deep equality                                                                    |
| _!=_           | doesn't equal                                                | Performs deep inequality                                                                  |
| _>=_           | greater than or equal                                        | Follows standard Javascript comparisons of values                                         |
| _>_            | greater than                                                 | Follows standard Javascript comparisons of values                                         |
| _contains_     | an array contains a value                                    | Value must be an array, does not work on other iterables                                  |
| _contains any_ | an array contains any of an array of values                  | The provided value must be an array in JSON notation                                      |
| _in_           | the value matches on of the supplied array of values         | The provided value must be an array in JSON notation                                      |
| _not in_       | the value does not match any of the supplied array of values | The provided value must be an array in JSON notation                                      |
| _matches_      | the string value matches the regular expression              | The provided value must be in the format of the Javascript RegEx literal (e.g. `/^test/`) |
| _kind of_      | the value is of the specified kind                           | See below for details on how this operator works                                          |

## _kind of_ operator

The _kind of_ operator is used to compare the kind of the target value to the
selected kind. The _kind of_ operator is designed to classify values in the form
of the unique types that Deno KV supports storing, which are those types
supported by
[structured clone](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types).
You can consider it a combination of the `typeof` operator and the `instanceof`
operator. For values that are `typeof "object"` all other cloneable object types
are eliminated leaving what would be considered a POJO.

The different kinds supported are:

| Kind                | Description                                                                            |
| ------------------- | -------------------------------------------------------------------------------------- |
| `bigint`            | Equivalent of `typeof value === "bigint"`                                              |
| `boolean`           | Equivalent of `typeof value === "boolean"`                                             |
| `number`            | Equivalent of `typeof value === "number"`                                              |
| `string`            | Equivalent of `typeof value === "string"`                                              |
| `undefined`         | Equivalent of `typeof value === "undefined"`                                           |
| `null`              | Equivalent of `value === null`                                                         |
| `object`            | When `typeof === "object"` and all other cloneable types are eliminated                |
| `Array`             | Equivalent of `Array.isArray(value)`                                                   |
| `Map`               | Equivalent of `value instanceof Map`                                                   |
| `Set`               | Equivalent of `value instanceof Set`                                                   |
| `RegExp`            | Equivalent of `value instanceof RegExp`                                                |
| `Date`              | Equivalent of `value instanceof Date`                                                  |
| `KvU64`             | Equivalent of `value instanceof Deno.KvU64`                                            |
| `ArrayBuffer`       | Equivalent of `value instanceof ArrayBuffer`                                           |
| `DataView`          | Equivalent of `value instanceof DataView`                                              |
| `Int8Array`         | Equivalent of `value instanceof Int8Array`                                             |
| `Uint8Array`        | Equivalent of `value instanceof Uint8Array`                                            |
| `Uint8ClampedArray` | Equivalent of `value instanceof Uint8ClampedArray`                                     |
| `Int16Array`        | Equivalent of `value instanceof Int16Array`                                            |
| `Uint16Array`       | Equivalent of `value instanceof Uint16Array`                                           |
| `Int32Array`        | Equivalent of `value instanceof Int32Array`                                            |
| `Uint32Array`       | Equivalent of `value instanceof Uint32Array`                                           |
| `Float32Array`      | Equivalent of `value instanceof Float32Array`                                          |
| `Float64Array`      | Equivalent of `value instanceof Float64Array`                                          |
| `BigInt64Array`     | Equivalent of `value instanceof BigInt64Array`                                         |
| `BigUint64Array`    | Equivalent of `value instanceof BigUint64Array`                                        |
| `Error`             | When `value instanceof Error` and all other cloneable error types have been eliminated |
| `EvalError`         | Equivalent of `value instanceof EvalError`                                             |
| `RangeError`        | Equivalent of `value instanceof RangeError`                                            |
| `ReferenceError`    | Equivalent of `value instanceof ReferenceError`                                        |
| `SyntaxError`       | Equivalent of `value instanceof SyntaxError`                                           |
| `TypeError`         | Equivalent of `value instanceof TypeError`                                             |
| `URIError`          | Equivalent of `value instanceof URIError`                                              |
