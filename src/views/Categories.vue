<template>
  <b-container fluid id="categories">
    <OtherNavbar></OtherNavbar>
    <b-row class="categories-box">
      <b-col class="categories-left" cols="3">
        <PostSidebar></PostSidebar>
      </b-col>
      <b-col class="categories-right" cols="9">
        <Posts></Posts>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import OtherNavbar from '../components/OtherNavbar.vue'
import Posts from '../components/Posts.vue'
import PostSidebar from '../components/PostSidebar.vue'
export default {
  name: 'categories',
  components: {
    OtherNavbar,
    PostSidebar,
    Posts
  }
}
</script>

<style>
#categories {
  height: 100vh;
  /* background: #000; */
  margin-top: 56px;
  background: #fffff0;
}
.categories-box {
  height: 100%;
  padding-top: 20px;
}
.categories-left {
  width: 100%;
  height: 100%;
}
.categories-right {
  width: 100%;
  height: 100%;
}
</style>
