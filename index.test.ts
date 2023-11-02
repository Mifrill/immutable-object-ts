import { ImmutableObject } from './index'

const property = Symbol('Property')

describe('ImmutableObject', () => {
  test('allows assign property.', async () => {
    const immutableObject = new ImmutableObject()
    immutableObject[property] = 'value property 1'
    expect(immutableObject[property]).toStrictEqual('value property 1')
  })

  test('forbids reassign property.', async () => {
    const immutableObject = new ImmutableObject()
    immutableObject[property] = 'value property 1'
    expect(() => {
      immutableObject[property] = 'value property 2'
    }).toThrow(new Error('Property is already set.'))
    expect(immutableObject[property]).toStrictEqual('value property 1')
  })

  test('forbids private method redefinition.', () => {
    const immutableObject = new ImmutableObject()
    expect(() => {
      immutableObject['handler'] = { set(): any {} }
    }).toThrow(new Error('Property is already set.'))
  })
})
