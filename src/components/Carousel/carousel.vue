<template>
    <div id="carousel">
        <mt-swipe :auto="4000" :speed="4000">
            <mt-swipe-item v-for="item in list" :key="item">
                <img :src="item">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
  name: "carousel",
  data() {
    return {};
  },
  methods: {},
  props: ["list"]
};
</script>
<style lang="scss" scoped>
#carousel {
  height: 200px;
  width: 100%;
  img{
      width: 100%;
      height: 100%;
  }
}
</style>

