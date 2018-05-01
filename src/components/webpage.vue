<template>
    <!-- <div class="wrapper" :style="A?{opacity:'0'}:{opacity:'1',flex:1}"> -->
        <web ref="webview"  :src="src" :style="A?{opacity:'0'}:{opacity:'1',position: 'absolute',top: '0',left: '0',right: '0',bottom: '0'}"></web>
    <!-- </div> -->
</template>

<script>
export default {
  props: {
    A: Boolean,
    src: String
  }
}
</script>

<style scoped>

</style>
