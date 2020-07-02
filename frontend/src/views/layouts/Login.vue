<template>
  <v-container>
    <v-app>
        <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
    >
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Sistema educativo</span>
        
      </v-toolbar-title>
            
      <v-spacer></v-spacer>
      
      <v-btn @click="$router.push('/register')" text><v-icon>recent_actors </v-icon> Registrarse</v-btn>
    </v-app-bar>
            <v-main class="align-center justify-space-between" >
            <router-view/>
        </v-main>        
    </v-app>
    </v-container>
</template>
