import{e as s,c as a,a as o,F as i,f as c,b as v,r as g,o as n,t as r}from"./index-vw-hSNT6.js";const f={id:"posts"},k=["href"],w={class:"pb-3 pb-lg-5"},N={__name:"Posts",setup(b){const u=s([{text:"About Me Introduce.vue with background particle effect",link:"https://www.npmjs.com/package/particles.vue",name:"particles.vue"},{text:"Loading Effect",link:"https://www.npmjs.com/package/vue-loading-overlay",name:"Vue Loading Overlay Component"},{text:"Navbar scroll effect",link:"https://www.npmjs.com/package/vue-scrollto",name:"vue-scrollto"},{text:"Web animation effect",link:"https://www.npmjs.com/package/aos",name:"aos"},{text:"Code result",link:"https://www.npmjs.com/package/codemirror-editor-vue3",name:"codemirror-editor-vue3"}]),d=s(["Vue 3","Scss","Bootstrap 5","aos"]),l=s(`
<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top"
      :class="{'bg-dark': scrollPosition > 300}">
    <!-- Navbar content -->
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollPosition = ref(0)

const updateScroll = () => {
  scrollPosition.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
<\/script>
`),p=s({tabSize:2,mode:"text/x-vue",theme:"dracula",lineNumbers:!0,line:!0});return(h,e)=>{const m=g("codemirror");return n(),a("div",f,[e[3]||(e[3]=o("h2",null,"Create a Vue Resume",-1)),o("p",null,[(n(!0),a(i,null,c(d.value,t=>(n(),a("span",{key:t,class:"badge bg-secondary me-2"},r(t),1))),128))]),e[4]||(e[4]=o("h5",{id:"nav-1",class:"mt-2 highlight"},"Usage of Vue Packages",-1)),(n(!0),a(i,null,c(u.value,t=>(n(),a("div",{id:"nav-a",key:t.link},[o("p",null,"# "+r(t.text),1),o("a",{href:t.link},r(t.name),9,k)]))),128)),o("div",w,[e[1]||(e[1]=o("h5",{id:"nav-2",class:"highlight mt-4"},"Navbar, Footer scroll listener reference implementation",-1)),e[2]||(e[2]=o("p",null,"# Navbar.vue default background transparent, adding background color after scrolling a certain distance",-1)),v(m,{value:l.value,"onUpdate:value":e[0]||(e[0]=t=>l.value=t),options:p.value},null,8,["value","options"])])])}}};export{N as default};
