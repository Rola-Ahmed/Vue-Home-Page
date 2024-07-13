<template>
  <div class=" bg-hero vh-100 w-100">
    <div class="overlay h100 w-100">

    
      <nav class="navbar navbar-expand-lg navbar-dark bg-transperent position-sticky top-0 pt-4">
    <div class="container">
      <img  alt="logo" :src="logo" />

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-collapse"
        aria-controls="nav-collapse" aria-expanded="false" aria-label="Toggle navigation"
>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end gap-4" id="nav-collapse">
       
        

        <ul class="navbar-nav ml-auto gap-4">
          <li class="nav-item">
            <a class="nav-link text-center " href="#"  role="button" 
              aria-expanded="false">
              Home
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-center " href="#"  role="button" 
              aria-expanded="false">
              About
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-center " href="#"  role="button" 
              aria-expanded="false">
              Cart
            </a>
          </li>
          
        </ul>

        <ul class="navbar-nav ml-auto gap-4">
          <li class="nav-item">
            <a class="nav-link text-center  nav-action-btn  rounded-5 px-3 py-2  " href="#"  
              aria-expanded="false">
              Login
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-center  nav-action-btn bg rounded-5 px-3 py-2   " href="#"  
              aria-expanded="false">
              Sign Up
            </a>
          </li>

          
        </ul>


        <!-- <div>
          <button class="btn btn-outline-light" >Login</button>
          <button class="btn btn-outline-light" >Sign Up</button>
        </div> -->
      </div>
    </div>
  </nav>

  <HeroSection/>

</div>
</div>
  </template>
  
  <script>
  import { logo ,heroBg} from "../constants/images.js"; //
import HeroSection from '@/components/main/Hero.vue';

  export default {
    name: 'NavBar',
    components: {
      HeroSection
  },
    data() {
    return {
      logo: logo,
      heroBg:heroBg,
    };
  },
  }
  </script>
  

  