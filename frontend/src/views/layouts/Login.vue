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
      
      <v-btn @click="$router.push('/')" text><v-icon>phonelink </v-icon> | AppEducation</v-btn>
    </v-app-bar>
            <v-main >
            <router-view/>
        </v-main>        
    </v-app>
    </v-container>
</template>
