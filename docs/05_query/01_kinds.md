# Condition kinds

There are four different kinds of conditions that must be true for a entry to be
included when filtered. The _and_ and _or_ conditions have child conditions.
Multiple top level conditions imply an _and_ condition.

## where

The _where_ condition kind is use to evaluate a property on the value. This is
useful when the value is an object with properties you want to query. When
selecting the _where_ kind, the property, operation and value fields will be
displayed:

<img src="/images/condition_where.png" alt="screenshot of a where condition" width="700" class="mx-auto" />

For example if you had several entries with values of the following shape:

```ts
interface Person {
  first_name: string;
  last_name: string;
  age: number;
}
```

And you wanted to query for the people who where over the age of 10, you would
configure the _where_ condition like:

<img src="/images/condition_where_age.png" alt="screenshot of a where condition with the property set to 'age', the operator set to '>' and the value type set to 'Number' and the value set to 10" width="700" class="mx-auto" />

See the [Property](./prpoerty) documentation for further information on how to
access properties deeply on an object.

## value

The _value_ condition kind is used to evaluate the value of an entry. This is
useful when trying to find entries where the whole of the value needs to be
compared. For example if had several entries with string values and wanted to
determine if they contained the word _Deno_ in the text:

<img src="/images/condition_where_value.png" alt="screenshot of a value conditionw with the operator set to 'matches' and the value type set to 'RegExp' and the value set to '/\sDeno\s/'" width="700" class="mx-auto" />

## and

The _and_ condition allows grouping of conditions which all must be true for the
condition to be true. This is useful when wanting to explicitly ensure that the
value of the entry matches multiple conditions.

## or

The _or_ condition allows grouping of conditions which any one can be true for
the condition to be true. This is useful when wanting to determine if a value of
an entry matches any of multiple conditions.
