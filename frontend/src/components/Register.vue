<template>
  <v-container>
      <v-layout  align-start>
          <v-flex xs12 sm6 m4 offset-xs0 offset-sm3 offset-m4>
              <v-card class="elevation-12">
              <v-toolbar
                color="#4682B4"
                dark
                flat
              >
                <v-toolbar-title>INGRESE SUS DATOS</v-toolbar-title>
                <v-spacer></v-spacer>
                
              </v-toolbar>
              <v-card-text>
                <v-form
                class="pa-4 pt-6">
                  <!-- <v-text-field label="Nombre de Usuario"></v-text-field>-->
                  <v-text-field
                    v-model="Usuario"
                    :rules="[rules.required]"
                    filled
                    color="#4682B4"
                    label="Nombre de Usuario"
                  ></v-text-field>
                  <!-- <v-text-field label="Email"></v-text-field> -->
                  <v-text-field
                    v-model="email"
                    :rules="[rules.email]"
                    filled
                    color="#4682B4"
                    label="Correo electronico"
                    type="email"
                   ></v-text-field>
                  <!-- <v-text-field label="Contraseña" type="password"></v-text-field> -->
                    <v-text-field
                        v-model="password"
                        :rules="[rules.password, rules.length(6)]"
                        filled
                        color="#4682B4"
                        counter="6"
                        label="Contraseña"
                        style="min-height: 96px"
                        type="password"
                    ></v-text-field>
                  <!-- <v-text-field label="Confirmar Contraseña" type="password"></v-text-field>  -->
                  <v-btn block color="#4682B4" @click="$router.push('/student/materias')">Registrarse</v-btn>
                  <p></p>
                    <v-btn block @click="$router.push('/')" text>Ya tengo una cuenta</v-btn>


              </v-form>
              </v-card-text>
            </v-card>
              
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
            email: v => (v || '').match(/@/) || 'Ingrese una direccion de correo valida',
            length: len => v => (v || '').length >= len || `Longitud de caracteres no valida, requeridos ${len}`,
            password: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
                'La contraseña debe contener una letra mayúscula, un carácter numérico y un carácter especial.',
            required: v => !!v || 'Este campo es requerido',
            },
        }),
    }
</script>