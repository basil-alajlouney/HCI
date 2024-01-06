<script>
  import { createEventDispatcher } from "svelte";
  export let year = "2000";
  export let range = "from-to";
  export let value = year+range;
  export let editable = false;
  const dispatch = createEventDispatcher();
</script>
<div class="w-48 h-20 border-solid border-2 border-black rounded-2xl min-w-fit my-3">
  <span class="w-full flex justify-between p-1 items-center">
    <p class="text-2xl font-semibold">{year}</p>
    {#if editable}
      <span class="flex">
        <button on:click={()=>dispatch("edit",value)}>
          <svg width="28" height="25" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.7646 4.87009L29.0889 10.1563C29.3132 10.379 29.3132 10.7423 29.0889 10.965L16.1972 23.7644L10.7194 24.368C9.9875 24.4501 9.36771 23.8347 9.45035 23.108L10.0583 17.6695L22.95 4.87009C23.1743 4.64739 23.5403 4.64739 23.7646 4.87009ZM33.3271 3.52803L30.4465 0.668099C29.5493 -0.2227 28.0913 -0.2227 27.1882 0.668099L25.0986 2.74272C24.8743 2.96542 24.8743 3.32878 25.0986 3.55148L30.4229 8.83766C30.6472 9.06036 31.0132 9.06036 31.2375 8.83766L33.3271 6.76304C34.2243 5.86638 34.2243 4.41883 33.3271 3.52803ZM22.6667 20.2833V26.2493H3.77778V7.4956H17.3424C17.5312 7.4956 17.7083 7.41942 17.8441 7.29049L20.2052 4.94628C20.6538 4.50088 20.3351 3.74487 19.7035 3.74487H2.83333C1.2691 3.74487 0 5.00488 0 6.55792V27.187C0 28.74 1.2691 30 2.83333 30H23.6111C25.1753 30 26.4444 28.74 26.4444 27.187V17.9391C26.4444 17.312 25.683 17.0014 25.2344 17.4409L22.8733 19.7851C22.7434 19.9199 22.6667 20.0957 22.6667 20.2833Z" fill="#00C108"/>
          </svg>
        </button>
        <button on:click={(e)=>dispatch("delete",{e,value})}>
          <svg width="21" height="26" class="ml-2" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.66602 10.833H10.8327V23.833H8.66602V10.833ZM15.166 10.833H17.3327V23.833H15.166V10.833Z" fill="#FF0000"/>
            <path d="M0 4.33333V6.5H2.16667V28.1667C2.16667 28.7413 2.39494 29.2924 2.80127 29.6987C3.2076 30.1051 3.7587 30.3333 4.33333 30.3333H21.6667C22.2413 30.3333 22.7924 30.1051 23.1987 29.6987C23.6051 29.2924 23.8333 28.7413 23.8333 28.1667V6.5H26V4.33333H0ZM4.33333 28.1667V6.5H21.6667V28.1667H4.33333ZM8.66667 0H17.3333V2.16667H8.66667V0Z" fill="#FF0000"/>
          </svg>
        </button>
      </span>
    {/if}
  </span>
  <p class="text-end text-3xl mx-2 text-nowrap">{range}</p>
  <!-- <p class="hidden from-[red]"></p> -->
</div>