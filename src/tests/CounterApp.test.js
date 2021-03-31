import React from 'react'
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'

describe('Testing <CounterApp />', function () {

  let wrapper = shallow(<CounterApp value={10}/>)
  beforeEach(() => {
    wrapper = shallow(<CounterApp value={10}/>)
  })

  test('Should be show <CounterApp /> properly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('Should be show 100 as default value', () => {
    const value = 100
    const wrapper = shallow(<CounterApp value={value}/>)
    const defaultValue = wrapper.find('code').text()
    expect(defaultValue).toBe(value.toString())
  })
  test('Should be increment value with +1 button', () => {
    wrapper.find('button').at(1).simulate('click')
    const value = wrapper.find('code').text()
    expect(value).toBe('11')
  })
  test('Should be increment value with -1 button', () => {
    wrapper.find('button').at(0).simulate('click')
    const value = wrapper.find('code').text()
    expect(value).toBe('9')
  })
  test('Should be reset with reset button', () => {
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    const defaultValue = wrapper.find('code').text()
    expect(defaultValue).toBe('10')
  })
})