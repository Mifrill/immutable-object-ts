export class ImmutableObject {
  [property: PropertyKey]: any;

  constructor() {
    return new Proxy(this, this.handler)
  }

  private handler: ProxyHandler<ImmutableObject> = {
    set(target: ImmutableObject, prop: PropertyKey, value: any): true | never {
      if (prop in target) {
        throw new Error('Property is already set.')
      }
      target[prop] = value
      return true
    }
  }
}
