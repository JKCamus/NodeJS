<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    msg: String
  },
  components: {
  },
  mixins: [],
  data: function() {
    return {
      message: "Hello"
    }
  },
  created(){

  },
  mounted() {

  },
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped>
  .hello {
    
  }
</style>


