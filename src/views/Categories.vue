<template>
  <div class="container-fluid" id="categories">
    <OtherNavbar />
    <div class="row categories-box">
      <div class="col-3 categories-left">
        <PostSidebar />
      </div>
      <div class="col-9 categories-right">
        <Posts />
      </div>
    </div>
  </div>
</template>

<script setup>
import OtherNavbar from '../components/OtherNavbar.vue'
import Posts from '../components/Posts.vue'
import PostSidebar from '../components/PostSidebar.vue'
</script>

<style>
#categories {
  height: 100vh;
  margin-top: 56px;
  background: #fffff0;
}

.categories-box {
  height: 100%;
  padding-top: 20px;
}

</style>