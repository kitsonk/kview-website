# Property

When using a _where_ condition kind, the property field will be displayed and
will be required to be populated. A _where_ condition will only assess object
value types and attempt to validate the operation on the specific property to
determine if the condition is true.

## Top level properties

You can access the top level properties of the object by just providing the
property name. For example if you had values of the following shape:

```ts
interface Person {
  first_name: string;
  last_name: string;
  age: number;
}
```

You would want to set the property value to `age` to evaluate the value of the
_age_ property.

For properties that contain spaces like the following:

```ts
interface Person {
  "first name": string;
  "last name": string;
  age: number;
}
```

You would not use quotes, and so to evaluate the _"first name"_ property you
would set the property field to `first name`.

## Deeper properties

You can deeply access the properties of a value by using the dot notation to
separate properties. For example if you an values shaped like:

```ts
interface Person {
  first_name: string;
  last_name: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
  };
}
```

And you wanted to evaluate the _state_ property of _address_ you would set the
property field to `address.state`.
