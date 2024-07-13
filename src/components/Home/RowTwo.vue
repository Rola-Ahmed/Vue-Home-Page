<template>
  <div class=" bg-black row-slider">
    <div class="container">
   <div class="  row w-100 justify-content-between">
    <div class="col-md-5 col-12">
      <div class="col-img m-auto">
        <img class="w-100 h-100" alt="img" :src="slider2"/>
      </div>
    </div>
    <div class="col-md-5 col-12">

      <div class="h-100 d-flex justify-content-center align-items-center">
        <div class="d-grid gap-3">
          <h1 class="text-white mx-2">“Moddy Character NFT “
The image is a high-quality digital painting with a resolution of 3000x2000 pixels and is optimized for the web.
$101,593</h1>

<img alt="img" :src="lArrow"/>

        </div>
      </div>
    </div>
  
   </div>
  </div>
</div>
  </template>
      
      <script>
        import { slider1 ,slider2,rArrow,lArrow} from "../constants/images.js"; //

      export default {
        name: 'RowTwo',
        data() {
    return {
      slider1: slider1,
      slider2:slider2,
      rArrow:rArrow,
      lArrow:lArrow
    }
      }
    }
      </script>
      
   
      