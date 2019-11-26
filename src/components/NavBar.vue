<template>
  <span>
    <v-navigation-drawer
      right
      absolute
      temporary
      v-model="drawer"
      color="white"
      disable-resize-watcher
    >
      <v-list dense>
        <v-list-item v-for="button in buttons" :key="button.title" :to="button.path">
          <v-list-item-icon>
            <v-icon large color="black">{{ button.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="title">{{button.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar app color="white">
      <v-avatar size="90" class="hidden-md-and-up mt-10">
        <img src="../assets/logo.jpeg" />
      </v-avatar>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      
      <v-app-bar-nav-icon  color="black" x-large class="hidden-md-and-up" @click="drawer = true" />
      <template v-slot:extension>
        <v-avatar size="150" class="hidden-sm-and-down">
          <img src="../assets/logo.jpeg" />
        </v-avatar>
      </template>
      <v-spacer class="hidden-sm-and-down"/>

      <v-btn class="hidden-sm-and-down" v-for="button in buttons" :key="button.title">
          {{button.title}}
      </v-btn>
    </v-app-bar>
  </span>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      buttons: [{ title: "About us", icon: "face", path: "/Page1" }]
    };
  }
};
</script>
