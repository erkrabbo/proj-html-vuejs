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
  ],
  usersTestimonials: [
    {
      name: 'Lisa Smith',
      img: 'avatar-3.jpg',
      text: 'Auctor est habitasse amet nunc, interdum vel mattis sodales cras. Ut nulla quis nunc, tincidunt eu. Eu.'
    },
    {
      name: 'Melissa Green',
      img: 'avatar-1.jpg',
      text: 'Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat vestibulum ac diam sit.'
    },
    {
      name: 'Sam Lewis',
      img: 'avatar-4.jpg',
      text: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus vestibulum ante ipsum.'
    }
  ],
  blogArticles: [
    {
      img: 'blog-1.jpg',
      title: 'How to \'loose leash walk\' your dog',
      date: 'April 21st, 2020'
    },
    {
      img: 'blog-2.jpg',
      title: 'Stop cats from scratching furniture',
      date: 'April 19th, 2020'
    },
    {
      img: 'blog-3.jpg',
      title: 'Where to buy the best pet food',
      date: 'April 18th, 2020'
    },
    {
      img: 'blog-4.jpg',
      title: 'Proper care for your pet toys',
      date: 'April 17th, 2020'
    }
  ],
  newProducts: [
    {
      name: 'Colored pet bed',
      img: 'product-8.jpg',
      price: '$25.00',
      sale: false
    },
    {
      name: 'Colorful ball set',
      img: 'product-2.jpg',
      price: '$25.00',
      sale: false
    },
    {
      name: 'Dog bone',
      img: 'product-3.jpg',
      price: '$29.00',
      sale: true,
      discountPrice: '$18.00'
    },
    {
      name: 'Animal transport bag',
      img: 'product-4.jpg',
      price: '$29.00',
      sale: false
    },
    {
      name: 'Animal transport cage',
      img: 'product-5.jpg',
      price: '$35.00',
      sale: false
    },
    {
      name: 'Closable cat litter',
      img: 'product-10.jpg',
      price: '$16.00',
      sale: false
    }
  ],
  banners: [
    {
      name: 'FIND THE BEST ANIMAL SUPPLIES',
      title: 'New arrivals weekly',
      button: 'Learn more about us'
    },
    {
      name: 'FIND THE BEST ANIMAL SUPPLIES',
      title: 'Popular accessories',
      button: 'View all toys accessories'
    },
    {
      name: 'FIND THE BEST FOOD',
      title: 'New food arrival',
      button: 'View all food products'
    }
  ]
})
export const shopCategories = [...state.shopCategories]
export const foodCategories = [...state.foodCat]
export const bestSellers = [...state.bestSellers]
export const usersTestimonials = [...state.usersTestimonials]
export const blogArticles = [...state.blogArticles]
export const newProducts = [...state.newProducts]
export const banners = [...state.banners]

export default {
  shopCategories: [...state.shopCategories]
}
