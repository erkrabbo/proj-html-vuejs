import Vue from 'vue'
const state = Vue.observable({
  shopCategories: [
    {
      img: 'immagine cat',
      cat: 'Transport',
      items: [
        'ciao',
        'ciao',
        'ciao',
        'ciao',
        'ciao'
      ]
    },
    {
      img: 'immagine cat',
      cat: 'Transport',
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
      img: 'immagine cat',
      cat: 'Transport',
      items: [
        'ciao',
        'ciao',
        'ciao',
        'ciao'
      ]
    },
    {
      img: 'immagine cat',
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
