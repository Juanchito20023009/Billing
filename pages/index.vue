<template>
  <div />
</template>

<script>
export default {
  mounted(){
    delete this.$store.state.userData 
    this.$router.push({ name: 'signin' })
}
}
</script>
