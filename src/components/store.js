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
      img: 'product-3.jpg',
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
      img: 'product-2.jpg',
      cat: 'Toys',
      items: [
        'ciao',
        'ciao',
        'ciao',
        'ciao'
      ]
    },
    {
      img: 'product-4.jpg',
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
      dscription: 'Dry',
      type: 'Dry',
      img: 'food-transparent-18.png'
    },
    {
      name: 'Moist',
      dscription: 'Canned',
      type: 'Moist',
      img: 'food-transparent-17.png'
    },
    {
      name: 'Frozen',
      dscription: 'Freeze',
      type: 'Frozen',
      img: 'food-transparent-16.png'
    }
  ]
})
export const shopCategories = [...state.shopCategories]
export const foodCategories = [...state.foodCat]

export default {
  shopCategories: [...state.shopCategories]
}
