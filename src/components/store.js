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
  ],
  foodCat: [
    {
      name: 'Kibble',
      dscription: 'Dry dog food',
      img: 'food-transparent-18.png'
    },
    {
      name: 'Kibble',
      dscription: 'Dry dog food',
      img: 'food-transparent-18.png'
    },
    {
      name: 'Kibble',
      dscription: 'Dry dog food',
      img: 'food-transparent-18.png'
    }
  ]
})
export const shopCategories = [...state.shopCategories]
export const foodCategories = [...state.foodCat]

export default {
  shopCategories: [...state.shopCategories]
}
