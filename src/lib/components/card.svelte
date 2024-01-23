<script lang="ts">
  import {slide} from "svelte/transition";
  import YearBlock from "./yearBlock.svelte";
  import Form from "./form.svelte";
  export let faceSrc:string = "";
  export let faceAlt:string = "";
  export let bg:string = "";
  let isEditing = false;
  let newYearBlock = false;
  let toEdit:any;
  let yearBlocks:{
      year:string,
      range:string,
      value:string,
    }[] = [];

  let deleteInit = (el:CustomEvent)=>{
    const {e, value} = el.detail;
    e
    .currentTarget
    .parentElement
    .parentElement
    .parentElement
    .remove()
  }

  let editInit = ({detail}:{detail:any})=>{
    const {context1, context2} = detail;
    yearBlocks = yearBlocks.map(e=>{
      if(e.value == toEdit){
        e.year = context1;
        e.range = context2;
      }
      return e;
    })

    isEditing = false;
  }

  let submitInit = ({detail}:{detail:any})=>{
    const {context1, context2} = detail;
    yearBlocks.push({
      year:context1,
      range:context2,
      value:context1 + context2
    });

    const request:RequestInit={
      method:"POST",
      body:JSON.stringify({
        Ranking:faceAlt,
        year:context1,
        rank:context2
      })
    };
    fetch("/card", request);

    yearBlocks = yearBlocks;
    newYearBlock = false;
  }

</script>

  <div transition:slide={{axis:"x",duration:200}} class="max-w-[96%] w-[1080px] h-96 my-2 rounded-lg 
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
            editable
            year={yearBlock.year}
            range={yearBlock.range}
            on:edit={()=>{
              isEditing = true;
              toEdit = yearBlock.year + yearBlock.range;
            }}
            on:delete={deleteInit} />
        {/each}
        <button on:click={()=>newYearBlock = true} class="w-48 h-20 border-solid border-2 
          border-black rounded-2xl min-w-fit my-3
          flex items-center justify-center text-2xl
          font-semibold hover:bg-gray-100">
          add year +
      </button>
      </div>
    </div>
  </div>

{#if isEditing}
  <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-white rounded-xl border-solid border-2 border-green-800">
  
    <Form
      on:cancel={()=>isEditing = false}
      on:submit={editInit}
      />
  
    </div>
  </div>
{/if}

{#if newYearBlock}
  <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-white rounded-xl border-solid border-2 border-green-800">
  
    <Form
      change={false}
      on:cancel={()=>newYearBlock = false}
      on:submit={submitInit}
      />
  
    </div>
  </div>
{/if}