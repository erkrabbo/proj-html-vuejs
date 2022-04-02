import Vue from 'vue'
const state = Vue.observable({
  shopCategories: [
    {
      img: 'product-9.jpg',
      cat: 'Bed',
      items: [
        'ciao',
        'ciao',
        'ciao',
        'ciao',
        'ciao'
      ]
    },
    {
      img: 'product-9.jpg',
      cat: 'Food',
      items: [
        'ciao',
        'ciao',
        'ciao',
        'ciao',
        'ciao',
        'ciao',
        'ciao'
      ]
    },
    {
      img: 'product-9.jpg',
      cat: 'Toys',
      items: [
        'ciao',
        'ciao',
        'ciao',
        'ciao'
      ]
    },
    {
      img: 'product-9.jpg',
      cat: 'Transport',
      items: [
        'ciao',
        'ciao',
        'ciao',
        'ciao',
        'ciao',
        'ciao'
      ]
    }
  ]
})
export default {
  shopCategories: [...state.shopCategories]
}
