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
      <v-list>
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

      <v-app-bar-nav-icon color="black" x-large class="hidden-md-and-up" @click="drawer = true" />
      <template v-slot:extension>
        <v-avatar size="150" class="hidden-sm-and-down">
          <img src="../assets/logo.jpeg" />
        </v-avatar>
      </template>
      <v-spacer class="hidden-sm-and-down" />
      <v-btn
        text
        class="hidden-sm-and-down mt-8 ma-2 title"
        v-for="button in buttons"
        :key="button.title"
      >
      <v-icon>{{button.icon}}</v-icon>
      {{button.title}}</v-btn>
      
    </v-app-bar>
  </span>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      buttons: [
        { title: "About Us", icon: "face", path: "/Page1" },
        { title: "Food Trucks", icon: "local_shipping", path: "/FoodTrucks" },
        { title: "Catering", icon: "outdoor_grill", path: "/catering" },
        { title: "Contact Us", icon: "local_phone", path: "/contact us" }
      ]
    };
  }
};
</script>
