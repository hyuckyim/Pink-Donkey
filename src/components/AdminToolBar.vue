<template>
  <nav>
    <v-app-bar dark app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer" />
      <v-toolbar-title class="display-1">
        <span>Pink Donkey</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn to="/home" text>
        <span>Home</span>
        <v-icon right>home</v-icon>
      </v-btn>
      <v-btn @click="signOut()" text>
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer dark app v-model="drawer">
      <v-layout column align-center>
        <v-flex class="mt-5 mb-5">
          <v-avatar color="white" size="100">
            <v-icon color="black" x-large>person</v-icon>
          </v-avatar>
        </v-flex>
        <p class="display-1 white--text">Admin Controls</p>
      </v-layout>
      <v-divider />
      <v-list>
        <v-list-item to="/Page1">
          <v-list-item-icon>
            <v-icon>view_module</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Page1</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/Page2">
          <v-list-item-icon>
            <v-icon>local_shipping</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Page2</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/Page3">
          <v-list-item-icon>
            <v-icon>inbox</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Page3</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "AdminToolBar",
};
</script>