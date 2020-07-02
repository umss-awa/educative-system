<template>
  <v-container>
      <v-layout row>
          <v-flex xs12 sm6 m4 offset-xs0 offset-sm3 offset-m4>

              <v-form>
                  <h1 >BIENVENIDO</h1>
                  <p></p>
                  <v-text-field label="Nombre de Usuario"></v-text-field>
                  <v-text-field label="Contraseña" type="password"></v-text-field>
                  <v-btn block color="primary" @click="$router.push('/student/materias')">Entrar</v-btn>
              </v-form>
          </v-flex>
      </v-layout>
  </v-container>
</template>
<script>
    export default {
        created () {
            this.$store.commit('SET_LAYOUT', 'LoginLayout')
        }
    }
</script>