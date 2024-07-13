<template>
   <div class="brands w-100  gap-2 d-flex justify-content-around  align-items-center flex-wrap px-md-2" >

   
    <div>
        <p class="brand-title text-white m-0">
        Powering leading brands
    </p>
    </div>

   
    <div>

        <img  alt="brand 1" :src="brand1"  class="w-100 h-100"/>
    </div>
    <div>

<img  alt="brand 2" :src="brand2"  class="w-100 h-100" />
</div>
 
   </div>

  </template>
      
      <script>
        import { brand1,brand2} from "../constants/images.js"; //
      export default {
        name: 'BrandsSec',
        data() {
    return {
        brand2: brand2,
        brand1:brand1,
    };
  },
     
      }
      </script>
      
   
      
      <style scoped>
.brands {
background-color: var(--secondary-color);
min-height: 83px;
opacity: 0.7px;
margin-top: 104px;
}


.brand-title{
font-size: 32px;
font-weight: 400;
line-height: 48px;

}
</style>