<template>
  <v-app style="background-color:#FFB6C1">
    <NavBar />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  
  name: 'App',
  components: {
    NavBar,
  },
};
</script>
