<template>
  <ol class="breadcrumb">
    <li v-for="breadcrumb in breadcrumbs" 
    class="breadcrumb-item" :class="breadcrumb.class">
      <a v-if="breadcrumb.link" :href="breadcrumb.link" :target="breadcrumb.target" >
          {{ breadcrumb.name }}
      </a>
      <span v-else :href="breadcrumb.link" :target="breadcrumb.target" >
          {{ breadcrumb.name }}
      </span>
    </li>
  </ol>      
</template>

<script>

import Vuex from 'vuex'
import 'es6-promise/auto'

export default {
    name: 'Breadcrumb',
    props:['breadcrumbs']
}
</script>