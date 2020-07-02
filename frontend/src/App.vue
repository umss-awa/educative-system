<template>
    <component :is='layout'></component>
</template>

<script>
import PrincipalLayout from './views/layouts/Principal';
import LoginLayout from './views/layouts/Login';
import {mapState} from 'vuex'

 

export default {
  name: 'App',

  components: {
    PrincipalLayout,LoginLayout,
  },
  computed: mapState(['layout'])
}
</script>
