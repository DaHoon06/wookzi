<!-- Please remove this file from your project -->
<template>
 <div>
   <p>TEST</p>
   <button @click="apiRequest" type="button">
     TEST
   </button>
 </div>
</template>

<script lang="ts">
import axios from "axios";
import {
  defineComponent, useContext,
} from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'NuxtTutorial',
  setup() {
    const context = useContext();

    const apiRequest = async () => {
      // console.log(axios)
      const {data} = await context.$axios.get('https://api.no1recipe.com/api/reicpes/all-recipes');
      console.log(data)
      // const {data} = await axios.get('https://api.no1recipe.com/api/reicpes/all-recipes');
      console.log('???????????????????');
    }
    return {
      apiRequest
    }
  }
})
</script>
