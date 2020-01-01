import moxios from 'moxios'

import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import AxiosExample from '@/components/AxiosExample.vue'

import * as app from './../../src/app.js';

describe('AxiosExample.vue', () => {

    let product = {
        slug: 'driscolls-strawberries',
        name: 'Driscoll’s Strawberries',
        description:
            'Driscoll’s Strawberries are consistently the best, sweetest, juiciest strawberries available. This size is the best selling, as it is both convenient for completing a cherished family recipes and for preparing a quick snack straight from the fridge.',
        price: 4.99,
        available: 0,
        weight: 1,
        perishable: true,
        categories: ['produce', 'fruits']
    }

    it('loads the products', async () => {

        // Initialize moxios
        moxios.install()

        // This will make it so any axios requests to our products.json API end point
        // will be intercepted by moxios, returning our hard-coded product data
        moxios.stubRequest(app.config.api + 'products.json', {
            status: 200,
            responseText: [product]
        })

        // Mount the component for testing
        const wrapper = mount(AxiosExample, {})

        // This line ensures the axios request is resolved before we do our assertion
        // Ref: https://vue-test-utils.vuejs.org/guides/testing-async-components.html
        await new Promise(resolve => setTimeout(resolve));

        // Assert component meets our expectations
        expect(wrapper.text()).to.include('Driscoll’s Strawberries');

    })
})

