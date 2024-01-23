<script lang="ts">
    import { slide } from "svelte/transition";
  import YearBlock from "./yearBlock.svelte";

    export let faceSrc:string = "";
    export let faceAlt:string = "";
    export let bg:string = "";
    let view = false;
    let yearBlocks:{
        year:string,
        range:string,
        value:string,
      }[] = [
          {
          year:"2023",
          range:"111-222",
          value:"2023" + "111-222",
        },
          {
          year:"2023",
          range:"111-222",
          value:"2023" + "111-222",
        },
          {
          year:"2023",
          range:"111-222",
          value:"2023" + "111-222",
        },
          {
          year:"2023",
          range:"111-222",
          value:"2023" + "111-222",
        },
      ];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex flex-nowrap">
  {#if view}
    <div on:click={()=>view = !view} transition:slide={{axis:"x",duration:200}} class="max-w-[96%] w-[1080px] h-96 my-2 rounded-lg 
    border-solid border-2 border-black mx-12 mt-0">
    
    <p class="w-full h-[12%] bg-black text-white flex items-center
    justify-center text-2xl font-semibold">lorem</p>
    
    <div class="w-full h-[88%] p-2 flex justify-center
    md:bg-gradient-to-r {bg} via-35% via-white to-white rounded-b-md
    overflow-y-auto scrollbar-thin scrollbar-thumb-[rgba(0,0,0,0.8)]">
    
    <div class="h-full w-1/3 items-center md:flex hidden">
      <img src={faceSrc} alt={faceAlt}>
    </div>
    
    <div class="h-full w-full md:w-2/3 p-4 flex flex-wrap justify-around">
      {#each yearBlocks as yearBlock}
        <YearBlock
          year={yearBlock.year}
          range={yearBlock.range}/>
      {/each}
      <div class="w-full h-20 border-solid border-black border-2 rounded-xl text-xl
        flex  justify-center items-center">
        the rank has changed by: <p class="text-green-500 font-semibold">12</p>
      </div>
    </div>
    </div>
    </div>
  {:else}
    <div transition:slide={{axis:"x",duration:200}} on:click={()=>view = !view} class="w-72 h-96 my-4 border-solid rounded-xl border-2 border-black
      flex justify-center items-center p-6
      hover:shadow-lg shadow-inner shadow-white cursor-pointer">
      <img src={faceSrc} alt={faceAlt}>
    </div>
  {/if}
</div>