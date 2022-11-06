<template>
  <div>
    <Header v-if="loggedStatus"></Header>
    <Sidebar v-if="loggedStatus"></Sidebar>
      <router-view></router-view>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../../components/backend/HeaderComp.vue';
import Sidebar from '../../../components/backend/SidebarComp.vue';
import Footer from '../../../components/backend/FooterComp.vue';
export default {
  data(){
    return {
     
    }
  },
    components: {
        Header,
        Sidebar,
        Footer
    },
    computed: {
      loggedStatus()
      {
        return this.$store.getters.GET_AUTH_STATUS;
      }
    }
}
</script>

<style>


</style>