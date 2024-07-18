<script>
import Menu from './Pages/Home.vue'
export default {
  
  name: 'App',
  components: {
    Menu
  },
  data() {
    return {
      menuItems: [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Services', link: '/services' },
        { name: 'Contact', link: '/contact' },
        { name: 'Contact', link: '/contact' },
        { name: 'GetStarted', link: '/getstarted' }
      ]
    }
  }
}
</script>