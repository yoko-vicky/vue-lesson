const app = Vue.createApp({
  data() {
    return {
      url: 'https://yocosaka.com/',
      showBooks: true,
      title: 'The Final Empire',
      author: 'Yoko Saka',
      age: 37,
      x: 0,
      y: 0,
      books: [
        {title: 'Book1', author: 'author1', img: './assets/img-1.jpg', isFav: true},
        {title: 'Book2', author: 'author2', img: './assets/img-2.jpg', isFav: false},
        {title: 'Book3', author: 'author3', img: './assets/img-3.jpg', isFav: true},
      ]
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(e, data = 0) {
      console.log(e, e.type)
      if (data) {
        console.log(data)
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
    toggleFavStatus(book) {
      // console.log(book.isFav)
      book.isFav = !book.isFav
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book)=> book.isFav)
    }
  }
})
app.mount('#app')
