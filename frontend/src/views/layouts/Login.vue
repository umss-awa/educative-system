<template>
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
      
      
      <v-btn icon>
        <v-icon class="hidden-sm-and-down">mdi-bell</v-icon>
      </v-btn>
                <v-btn @click="$router.push('/register')" text>Registrarse</v-btn>
                
    </v-app-bar>
            <v-main class="align-center justify-space-between">
            <router-view/>
        </v-main>        
    </v-app>
</template>
