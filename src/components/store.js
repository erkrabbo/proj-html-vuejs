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
  ],
  bestSellers: [
    {
      img: 'product-21.jpg',
      name: 'Transport cage',
      price: '$25.00',
      sale: false
    },
    {
      img: 'product-20.jpg',
      name: 'Dog leash',
      price: '$25.00',
      sale: false
    },
    {
      img: 'product-16.jpg',
      name: 'Animal Transport cage',
      price: '$35.00',
      sale: true,
      discountPrice: '$25.00'
    },
    {
      img: 'product-11.jpg',
      name: 'Colorful Cat Leash',
      price: '$12.00',
      sale: false
    }
  ]
})
export const shopCategories = [...state.shopCategories]
export const foodCategories = [...state.foodCat]
export const bestSellers = [...state.bestSellers]

export default {
  shopCategories: [...state.shopCategories]
}
