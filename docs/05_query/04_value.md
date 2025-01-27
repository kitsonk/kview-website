# Condition values

For most comparison operations for _where_ or _value_ filters you have to
provide a value and its type/kind. The one exception to this is the _kind of_
operator where you have to provide a specific type/kind and no value.

## Specifying a value

The value editor as part of a filter is a simplified version of the value editor
for entires. There are certain types of values that require special handling and
there are certain limitations of what can be entered.

| Type/Kind           | Notes                                                                |
| ------------------- | -------------------------------------------------------------------- |
| _String_            | Entered as normal.                                                   |
| _Number_            | Number including `-Infinity`, `Infinity` and `NaN`                   |
| _BigInt_            | Integer number (e.g. `123456789`)                                    |
| _Boolean_           | Select `true` or `false` from dropdown                               |
| _Undefined_         | Readonly `undefined`                                                 |
| _Null_              | Readonly `null`                                                      |
| _Array_             | Enter as JSON string array (e.g. `["a","b"]`)                        |
| _Map_               | Enter as JSON string array of key/values (e.g. `[["key", "value"]]`) |
| _Set_               | Enter as JSON string array (e.g. `["a","b"]`)                        |
| _JSON_              | A POJO entered as a JSON string (e.g. `{"a":"b"}`)                   |
| _RegExp_            | Entered as a regular expression string literal (e.g. `/[0-9]+/`)     |
| _Date_              | Entered as an ISO formatted date/time                                |
| _KvU64_             | Integer number (e.g. `123456789`)                                    |
| _ArrayBuffer_       | Entered as a base64 URL encoded byte array                           |
| _DataView_          | Entered as a base64 URL encoded byte array                           |
| _Int8Array_         | Entered as a base64 URL encoded byte array                           |
| _Uint8Array_        | Entered as a base64 URL encoded byte array                           |
| _Uint8ClampedArray_ | Entered as a base64 URL encoded byte array                           |
| _Int16Array_        | Entered as a base64 URL encoded byte array                           |
| _Uint16Array_       | Entered as a base64 URL encoded byte array                           |
| _Int32Array_        | Entered as a base64 URL encoded byte array                           |
| _Uint32Array_       | Entered as a base64 URL encoded byte array                           |
| _Float32Array_      | Entered as a base64 URL encoded byte array                           |
| _Float64Array_      | Entered as a base64 URL encoded byte array                           |
| _BigInt64Array_     | Entered as a base64 URL encoded byte array                           |
| _BigUint64Array_    | Entered as a base64 URL encoded byte array                           |

> [!NOTE]
> Currently while Deno KV supports storing errors in the store, outside of the
> _kind of_ operator, there is no other way to make a comparison.

## Specific values types

When selecting certain operations, the value type will be forced:

| Operation  | Forced Type        |
| ---------- | ------------------ |
| _contains_ | _Array_            |
| _in_       | _Array_            |
| _not in_   | _Array_            |
| _matches_  | _RegExp_           |
| _kind of_  | Selection of kinds |
