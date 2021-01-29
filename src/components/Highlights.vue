<template>
  <div class="container">
      <div class="input">
          <input type="text" placeholder="Type a Location" name="location" v-model="location" v-on:keyup.enter="load" id="">
      </div>

      <div class="value">
          <h1>{{ get_dataObject.current.temperature }} <span>&#176;c</span>
</h1>
          <h3>{{get_dataObject.current.weather_descriptions[0]}}</h3>
      </div>

      <div class="peak">
          <img :src="get_dataObject.current.weather_icons[0]" alt="" srcset="">
      </div>

      <div class="date">
          <h5>Local Time: {{ get_dataObject.location.localtime }}</h5>
      </div>

      <div class="location">
          <h4>{{ get_dataObject.location.name }}, {{ get_dataObject.location.country }}</h4>
          <h4>LAT {{ get_dataObject.location.lat }}</h4>
          <h4>LONG {{ get_dataObject.location.lon }}</h4>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Highlights',

    data: function () {

        return {
            location: ''
        }
    },
    
    computed: mapGetters([
        'get_dataObject' 
    ]),

    methods: {
        load(){
            this.$store.dispatch('loadData', this.location)
        }
    },


    mounted () {
        this.$store.dispatch('loadData', 'Abuja')
        // console.log(dataObject)
    },
    watch: {
        location () {
        }
    }
}
</script>

<style scoped>
    input {
        padding-left:30px;
        width: 80%;
        line-height: 3em;
        border-radius: 1em;
        font-size: 1.5em;
    }
    h1, h3, h4, h5 {
        color: white;
    }
    input:active, input:focus {
        outline: none !important;
    }
    h1 {
        font-size: 60px;
    }
    .peak {
        display: flex;
        justify-content: space-evenly;
    }
    .container {
        margin: 2em auto;
        max-width: 400px;
        max-width: 60vh;
        border: 1px blue solid;
        padding: 2em;
        background-color: rgb(27, 27, 58);
    }
</style>