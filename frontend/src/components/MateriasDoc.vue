<template>
    <v-row dense>
        <v-col cols="12" xl="12" sm="4"
            v-for="(item, i) in materias"
            :key="i"
            >
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
                  <v-list-item-title class="headline" v-text="item.nombre"></v-list-item-title>
                  <hr>
                </v-list-item-content>
              </v-list-item>
            </v-card-title>
            <v-card-subtitle class="grey darken-2 " >{{item.descripcion}} </v-card-subtitle>
            <v-card-actions>
                <v-btn text>ACTIVO</v-btn>
              </v-card-actions>
        <!-- <v-col
            v-for="(item, i) in materias"
            :key="i"
            cols="12"
          >
            <v-card
              :color="item.color"
              dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="item.nombre"
                  ></v-card-title> 
  
                  <v-card-subtitle v-text="item.descripcion"></v-card-subtitle>
                </div>
  
                <v-avatar
                  class="ma-3"
                  size="125"m
                  tile
                >
                  <v-img :src="item.src"></v-img>
                </v-avatar>
              </div>-->
            </v-card>
          </v-col>
    </v-row>
</template>

<script>
import axios from 'axios'
export default {
    created () {
            this.$store.commit('SET_LAYOUT', 'PrincipalLayout')
        },
    data: () => ({
        dialog: false,
        search:'',
        materias:[],
        headers: [
            { text: 'Opciones', value: 'opciones',sortable:false },
            { text: 'Nombres', value: 'nombre',sortable:true },
            { text: 'Descripcion', value: 'descripcion',sortable:false },
            { text: 'Activo', value: 'activo',sortable:false },
        ],
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
  },

  created () {
    this.listar()
  },

  methods: {
    listar(){
        let obj=this; 
        axios.get('materia/list').then(function(response){
            
            obj.materias=response.data;
        }).catch(function(error){
            console.log(error)
        })
    },
    initialize () {
      this.desserts = [
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
        },
      ]
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
}}
</script>