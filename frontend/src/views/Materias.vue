<template>
<div id='card'>
    <card title="Matematicas" teacher="Enrique Jose" content="chino putita"></card>
        <card title="Matematicas" teacher="Enrique Jose" content=""></card>
    <card title="Matematicas" teacher="Enrique Jose" content=""></card>
    <card title="Matematicas" teacher="Enrique Jose" content=""></card>
    <card title="Matematicas" teacher="Enrique Jose" content=""></card>
    <card title="Matematicas" teacher="Enrique Jose" content=""></card>


</div>
</template>
<script>
import card from "../components/Card"
export default {
    components:{card},
    created () {
            this.$store.commit('SET_LAYOUT', 'PrincipalLayout')
        }
}
</script>