<template>
  <v-container>
    <v-card
    class="mx-auto"
    >
    <v-container>
      <v-row dense>
        <v-col cols="12" xl="12" sm="4">
          <v-card
            dark
          >
            <v-card-title class="grey darken-2">
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="headline">DOCENTES</v-list-item-title>
                  <hr>
                </v-list-item-content>
              </v-list-item>
            </v-card-title>

            <v-card-subtitle class="grey darken-2">Ingreso a la plataforma para cuentas Docentes </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange"
                text
               @click="$router.push('/register')" ><v-icon>contacts </v-icon>
                REGISTRARSE
              </v-btn>
              <v-btn
                color="orange"
                text
                @click="$router.push('/login')" ><v-icon>perm_contact_calendar</v-icon>
                INGRESAR
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" xl="12" sm="4">
         <v-card
            dark
          >
            <v-card-title class="teal darken-3">
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="headline">PADRES</v-list-item-title>
                  <hr>
                </v-list-item-content>
              </v-list-item>
            </v-card-title>

            <v-card-subtitle class="teal darken-3">Ingreso a la plataforma para cuentas de Padres de familia </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange"
                text
                @click="$router.push('/register')" ><v-icon>contacts </v-icon>
                REGISTRARSE
              </v-btn>
              <v-btn
                color="orange"
                text
                @click="$router.push('/login')" ><v-icon>perm_contact_calendar</v-icon>
                INGRESAR
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" xl="12" sm="4">
          <v-card
            dark
          >
            <v-card-title class="light-blue darken-4">
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="headline">ESTUDIANTES</v-list-item-title>
                  <hr>
                </v-list-item-content>
              </v-list-item>
            </v-card-title>

            <v-card-subtitle class="light-blue darken-4">Ingreso a la plataforma para cuentas de Estudiantes </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange"
                text
                @click="$router.push('/register')" ><v-icon>contacts </v-icon>
                REGISTRARSE
              </v-btn>
              <v-btn
                color="orange"
                text
                @click="$router.push('/login')" ><v-icon>perm_contact_calendar</v-icon>
                INGRESAR
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        > -->
         <!--  <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card> -->
        <!-- </v-col> -->
      </v-row>
    </v-container>
  </v-card>
  </v-container>
</template>

<script>
  export default {
    /* name: 'HelloWorld', */

    data: () => ({
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ]
    }),
  }
</script>
