<template>
  <Navbar/>
  <Welcome :welcometext=" [`Hi`,`سلام`]"/>
  <Transition>
    <h1 v-if="zaman1"> {{personName}}</h1>
  </Transition>
  <Transition>
    <Data v-if="zaman1"/>
    </Transition>
  <Transition>
     <Footer v-if="zaman2"/>
  </Transition>
 
  
  

</template>

<script>
import Welcome from './components/Welcome.vue'
import Navbar from './components/Navbar.vue'
import Data from './components/Data.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { Welcome ,Navbar, Data,Footer},
  data(){
    return{
      personName: `Mohammad Khalaf`,
      zaman1: false,
      zaman2: false
    }
  },
  mounted(){
    setTimeout(() =>this.zaman1=true, 1000);
    setTimeout(() =>this.zaman2=true, 2500);
  }
}
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
h1{
  color: #FFCB91;  
  /* margin-bottom:0px; */
  border-bottom: 1px solid #666270;
  text-shadow: 2px 2px #000000;
  font-family: 'Source Serif Pro', 'Georgia', 'serif';
}


</style>
