<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <v-row class="text-center" >
          <v-col cols="6" >
            <v-avatar
                      size="100px"
                      class="mx-3"
                    >
                      <img
                        src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                        alt=""
                      >
            </v-avatar>
          </v-col>
        </v-row>
        <p class="text-xs-center"> ANDRES CASTELLON</p>
        
        <hr/>
        
        <template> 
            <v-list-item :to="{name:''}"> 
               <v-list-item-action> 
                 <v-icon> home </v-icon>
               </v-list-item-action>
               <v-list-item-title>
                 Inicio
               </v-list-item-title>
            </v-list-item>
          </template>
          <!-- eliminar error de tile por item -->
          <template>
            <v-list-group>
              <v-list-item slot="activator">
                <v-list-item-content>
                  <v-list-item-title>
                    Recursos
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item :to="{name: ''}">
                <v-list-item-action>
                  <v-icon>table_chart</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    Agregar Recurso
                  </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            </v-list-group>
            <v-list-group>
              <v-list-item slot="activator">
                <v-list-item-content>
                  <v-list-item-title>
                    Actividades
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item :to="{name: ''}">
                <v-list-item-action>
                  <v-icon>table_chart</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    Tarea
                  </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{name: ''}">
                <v-list-item-action>
                  <v-icon>table_chart</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    Cuestionario
                  </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            </v-list-group>
          </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Sistema Escolar</span>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>
      
      <v-btn @click="$router.push('/')" text> <v-icon>logout</v-icon>salir</v-btn>  
    </v-app-bar>
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >

            <template >
            <router-view/>
              </template>
        </v-row>
      </v-container>
    </v-main>
    <v-btn
      bottom
      color="pink"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="800px"
    >
      <v-card>
        <v-card-title class="grey darken-2">
           Inscribirse a una materia.
        </v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col
              class="align-center justify-space-between"
              cols="12"
            >
              <v-row
                align="center"
                class="mr-0"
              >
                
                <v-text-field
                  placeholder="Codigo del curso"
                ></v-text-field>
              </v-row>
            </v-col>
            
          </v-row>
        </v-container>
        <v-card-actions>
          
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="dialog = false"
          >Cancelar</v-btn>
          <v-btn
            text
            @click="dialog = false"
          >Unirme</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        { icon: 'mdi-contacts', text: 'Materias' },
        { icon: 'mdi-history', text: 'Avisos' },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Actividades',
          model: false,
          children: [
            { icon: 'mdi-plus', text: 'Pendientes' },
            { icon: 'mdi-plus', text: 'Completados' },
          ],
        },
      ],
    }),
  }
</script>