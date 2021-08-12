const app = Vue.createApp({
    data(){
        return{
            product : 'socks',
            desc    : 'Brandnew Nike socks',
            image    : './assets/images/socks_blue.jpg',
             url     : 'https://www.nike.com/in/',
             inventory : '100',
             onsale : 'false',
             details : ['50% cotton' , '30% wool' , '20% polyester' ],
             variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
              ],
             cart : 0 
        }
    },
    methods : {
        addToCart(){
            this.cart += 1;
        },
        updateImage(variantImage) {
            this.image = variantImage
          },
          remove(){
              this.cart -= 1;
          }
    }
})