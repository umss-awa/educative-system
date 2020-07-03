<template>
 <v-container>
                <card title="Matematicas" teacher="Enrique Jose" content="chino putita"></card> 
 </v-container>
</template>
<script>
import card from "../components/MateriasDoc"
export default {
    components:{card},
    created () {
            this.$store.commit('SET_LAYOUT', 'PrincipalLayout')
        }
}
</script>