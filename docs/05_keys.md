# Keys

Deno KV supports keys of a size of up to 2k. Each type of key part is supported
by kview.

| Type                        | Supported | Notes                                                                                                |
| --------------------------- | --------- | ---------------------------------------------------------------------------------------------------- |
| [String](#string)           | ✅        |                                                                                                      |
| [Number](#number)           | ✅        | Key parts are entered as digits only                                                                 |
| [Boolean](#boolean)         | ✅        | Key parts are entered as `true` or `false`                                                           |
| [BigInt](#bigint)           | ✅        | Key parts are entered as digits only                                                                 |
| [`Uint8Array`](#uint8array) | ✅        | Key parts are entered as URL safe base64 encoded strings, the value of the key part is not displayed |

## String

## Number

## Boolean

## BigInt

## `Uint8Array`
