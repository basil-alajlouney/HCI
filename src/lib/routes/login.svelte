<script lang="ts">
  import login_assets_1 from '/login_assets_1.svg';
  import login_assets_2 from '/login_assets_2.svg';
  import Button3D from "../components/btn.svelte";
  import AnimatedTextInput from "../components/animated_text_input.svelte";
  import { goto } from "../helpers/commons";

  let loginInit = (e:MouseEvent)=>{
    e.preventDefault();
    if(username === "admin"
    && password === "admin")
      goto("admin");
  }

  let guestInit = (e:MouseEvent)=>{
    e.preventDefault();
    goto("guest");
  }

  let username:string;
  let password:string;

</script>

<main class="w-full h-full -z-10">
  
  <section class="z-30 absolute w-full h-full">

  <div class="w-full h-[7%] bg-[#3F8526] 
          text-3xl font-semibold text-white
          flex justify-center items-center overflow-x-hidden">
    Global Excellence
  </div>

  <div class="w-full min-h-[93%] h-[93%] flex items-center">
    <img class="z-10 mt-auto mb-12 ml-4 hidden min-[1150px]:block"
    width="420px"
    height="420px"
    src={login_assets_1}
    alt="login_assets_1"/>
    
    <form class="bg-slate-100 max-w-[380px] max-h-[360px] mx-auto
            my-16 rounded-3xl flex flex-col justify-around pt-10 p-12
            sm:w-1/2 sm:h-1/2 w-5/6 h-5/6 border-solid border-2 border-[#3F8526]">
  
    <AnimatedTextInput bind:value={username} name="username">USERNAME</AnimatedTextInput>
    
    <div>
        <AnimatedTextInput bind:value={password} type="password" name="password">PASSWORD</AnimatedTextInput>
  
        <br>

    </div>
  
    <div class="flex justify-around">
        <Button3D on:click={loginInit}><p class="font-semibold">Login</p></Button3D>
        <Button3D on:click={guestInit}><p class="font-semibold">login as guest</p></Button3D>
    </div>
  
    </form>
  
    <img class="z-10 mb-auto mt-12 mr-4 hidden min-[1150px]:block"
    width="420px"
    height="420px"
    src={login_assets_2}
    alt="login_assets_2"/>
  </div>


  </section>
</main>

<style>
  img{
  object-fit: fill;
  aspect-ratio: none;
  }
</style>