<template>
  <v-container >
      <v-layout row>
          <v-flex xs12 sm6 m4 offset-xs0 offset-sm3 offset-m4>
              <v-container
        class="fill-height"
        fluid 
      >
        <v-row
          class="text-center"
        >
          <v-col
            cols="12"
            sm="12"
            md="12"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="#4682B4"
                dark
                flat
              >
                <v-toolbar-title > BIENVENIDO</v-toolbar-title>
                <v-spacer></v-spacer>   
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    id="Usuario"
                    label="Usuario"
                    name="Usuario"
                    v-model="Usuario"
                    :rules="[rules.required]"
                    filled
                    color="#4682B4"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="Contraseña"
                    label="Contrasña"
                    name="Contraseña"
                    v-model="password"
                        :rules="[rules.password, rules.length(6)]"
                        filled
                        color="#4682B4"
                        counter="6"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn block color="#4682B4" @click="$router.push('/student/materias')">Entrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

              <!-- <v-form>
                  <h1 >BIENVENIDO</h1>
                  <p></p>
                  <v-text-field label="Nombre de Usuario"></v-text-field>
                  <v-text-field label="Contraseña" type="password"></v-text-field>
                  <v-btn block color="primary" @click="$router.push('/student/materias')">Entrar</v-btn>
              </v-form> -->
          </v-flex>
      </v-layout>
  </v-container>
</template>
<script>
    export default {
        created () {
            this.$store.commit('SET_LAYOUT', 'LoginLayout')
        },
        data: () => ({
            email: undefined,
            password: undefined,
            Usuario: undefined,
            rules: {
            email: v => (v || '').match(/@/) || 'Please enter a valid email',
            length: len => v => (v || '').length >= len || `Longitud de caracteres no valida, requeridos ${len}`,
            password: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
                'La contraseña debe contener una letra mayúscula, un carácter numérico y un carácter especial.',
            required: v => !!v || 'Este campo es requerido',
            },
        }),
    }
</script>
