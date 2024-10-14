# Primitives

Primitive values are the are the most direct and least complicated way of
dealing with values in kview. Deno KV supports storing of all JavaScript
primitives with the exception of symbols.

## String

Strings are entered, displayed and updated via a text edit field with the value
stored in the store without further modification.

## Number

Numbers are entered in the a number box in the same way they are written in
JavaScript. For example `1`, `3.1415`, `-42`, or `-2.7182`. All the typical
constraints that apply to JavaScript numbers apply to values here, like maximum
and minimum safe integers and the float precision.

> [!IMPORTANT]
> While Deno KV is able to store `Infinity` and `NaN`, kview doesn't currently
> support these values. (See:
> [kitsonk/kview#11](https://github.com/kitsonk/kview/issues/11))

## Boolean

Entering and updating of boolean values are a radio select of either `true` or
`false`. Boolean values are displayed as `true` or `false`.

## BigInt

Values are entered or updated as a number part of an integer, but are displayed
in the same way they appear in JavaScript code (with an `n` appended to the
number).

For example, the value of `100` would be entered in the interface, but will be
displayed as `100n` when viewing the value.

## `undefined`

Selecting a value of type _Undefined_ will result in a fixed value of
`undefined` in the value input and the value of `undefined` will be displayed
when viewing the entry.
