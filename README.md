# immutable-object-ts
Object for encapsulation and immutability

In JavaScript, true encapsulation and immutability of properties can't be achieved using native language features alone. There are always ways to modify properties directly if someone knows the symbols or `new WeakMap()` used.

```js
const instance = new MyClass()
instance['property'] = 'mutability'
```

ImmutableObject class can be used to guarantee truly private properties that can't be directly modified:

```ts
// Create an instance of ImmutableObject.
const instance = new ImmutableObject();
const property = Symbol('Property')
instance[property] = 'lala'; // This sets the property for the first time.
instance[property] = 'another'; // This will throw an error.
instance[property] = null; // This will throw an error.
```
