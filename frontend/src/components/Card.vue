<template>
 <v-container >
    <v-row >
      <v-col cols="12" xl="12" >
       <v-card
        :color= color
        dark
        width="390"
        class="mx-auto"
       >
        <v-card-title>
        
          <span class="title font-weight-light">{{title}}</span>
        </v-card-title>

        <v-card-text class="headline font-weight-bold">
            {{content}}
        </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{teacher}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card-actions>
       </v-card>
      </v-col>
    </v-row>
 </v-container>
</template>

<script>
export default {
    props:['title', 'content','teacher'], 
    data: {
      color: null
    },
    created: function(){
      var array= ["#264653","#14213d","#028090","#f4a261", "#e76f51"];
      var min = Math.ceil(0);
      var max = Math.floor(array.length-1);
      var random= Math.floor(Math.random() * (max - min + 1)) + min;
      this.color= array[random];
    }
}
</script>