export default {
    // smoothscroll
    data() {
      return {
        navItems: [
          { href: '#home', scroll: 'home', text: 'Home' },
          { href: '#about', scroll: 'about', text: 'About' },
          { href: '#services', scroll: 'services', text: 'Services' },
          { href: '#contact', scroll: 'contact', text: 'Contact' },
          { href: '#getstarted', scroll: 'getstarted', text: 'Get Started' }
        ],
        aboutContent: 'At BCD, were not just software developers - were digital alchemists. Founded in 2015 by three caffeine-fueled college friends, weve grown from a dorm room startup to a team of 50+ passionate tech wizards.',
        servicesContent: 'This is the services section. Here you can learn more about what we offer.',
        form: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      submitForm() {
        // Handle form submission
        console.log('Form submitted:', this.form)
        // Reset form after submission
        this.form = { name: '', email: '', message: '' }
      },
      handleScroll() {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const elementBottom = element.getBoundingClientRect().bottom;
          if (elementTop < window.innerHeight && elementBottom >= 0) {
            element.classList.add('appear');
          }
        });
      }
    },
    mounted() {
      // Smooth scroll functionality
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
  
      // Fade-in functionality
      this.handleScroll();
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }