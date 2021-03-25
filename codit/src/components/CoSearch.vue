<template lang='html'>
  <input
    name='search'
    type='text'
    placeholder='Write an user!'
    class='search'
    v-focus
    v-on:keyup.enter='onSearch'
  />

</template>

<script>

export default {
  name: 'CoSearch',
  data () {
    return {
      criteria: ''
    }
  },
  methods: {
    onSearch () {
      this.$emit('search', this.criteria)
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang='css' scoped>
.search {
  margin: 1rem;
}
</style>