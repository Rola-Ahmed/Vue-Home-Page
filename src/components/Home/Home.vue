<template>
  <Brands/>
  <Rows/>
  <Line/>
  <RowTwo/>

</template>
    
    <script>
    import  Brands  from "./Brands.vue";
    import  Rows  from "./Rows.vue";
    import  Line  from "./Line.vue";
    import  RowTwo  from "./RowTwo.vue";
    export default {
      name: 'HomeSection',
      components: {
        Brands,Rows,Line,RowTwo
  },
   
    }
    </script>
    
 
    