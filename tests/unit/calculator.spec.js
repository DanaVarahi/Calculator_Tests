import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })

  it('add adds to running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  it('subtract subtracts from running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('multiply multiplies the running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it('divide divides the running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('numberClick concatenates multiple number button clicks', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.runningTotal = 0
    wrapper.vm.numberClick('1');
    wrapper.vm.numberClick('1');
    expect(wrapper.vm.runningTotal).to.equal(11)
  })

  it('operatorClick chains multiple operations together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.runningTotal = 0
    wrapper.vm.previousTotal = 4;
    wrapper.vm.previousOperator = "+";
    wrapper.vm.numberClick('3');
    wrapper.vm.operatorClick('-');
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('*');
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('/');
    wrapper.vm.numberClick('2');
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  it('clearClick clears the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.runningTotal = 0
    wrapper.vm.previusTotal = 5
    wrapper.vm.previusOperator = "+"
    wrapper.vm.clearClick()
    expect(wrapper.vm.previusTotal).to.equal(5)
  })
})