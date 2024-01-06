<script lang="ts">
  import Card from "../components/card.svelte";
  import THE from "/THE.png";
  import QS from "/QS.png";
  import SHANGHAI from "/shanghai.png";
  import Form from "../components/form.svelte";

  let cards = [
      {
      faceSrc:THE,
      faceAlt:"THE",
      bg:"from-[rgba(179,25,137,0.7)]"
    },
      {
      faceSrc:QS,
      faceAlt:"QS",
      bg:"from-[rgba(171,95,6,0.7)]"
    },
      {
      faceSrc:SHANGHAI,
      faceAlt:"SHANGHAI",
      bg:"from-[rgba(170,15,15,0.7)]"
    },
    
  ];

  let newRankinit = ({detail}:{detail:any})=>{
    const {context1, context2, files} = detail;
    cards.push({
      faceSrc:URL.createObjectURL(files[0]),
      faceAlt:context1,
      bg:`from-[${context2}]`,
    })

    cards = cards;
    newRank = false;
  }

  let newRank = false;

</script>

<main class="w-full h-full">
  <div class="w-full h-[7%] bg-[#3F8526] px-4
  text-3xl font-semibold text-white overflow-hidden
  flex justify-between items-center overflow-x-hidden">
    <p class="text-transparent">___</p>
    <p>Admin dashboard</p>
    <button on:click={()=>location.reload()} class="w-12 h-12 bg-white rounded-full flex justify-center items-center">
      <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.3848 18.9697L28.8135 25.8057C28.5628 26.0791 28.2267 26.2215 27.8052 26.2329C27.3836 26.2443 27.019 26.1589 26.7114 25.9766C26.4038 25.7943 26.25 25.5778 26.25 25.3271V21.875H21.875C21.2826 21.875 20.7699 21.6642 20.3369 21.2427C19.904 20.8211 19.6875 20.3027 19.6875 19.6875V15.3125C19.6875 14.6973 19.904 14.1789 20.3369 13.7573C20.7699 13.3358 21.2826 13.125 21.875 13.125H26.25V9.70703C26.25 9.43359 26.4038 9.20573 26.7114 9.02344C27.019 8.84115 27.3836 8.7557 27.8052 8.76709C28.2267 8.77848 28.5628 8.9209 28.8135 9.19434L34.3848 15.9961C34.7949 16.4062 35 16.9019 35 17.4829C35 18.064 34.7949 18.5596 34.3848 18.9697ZM21.8921 8.75C21.2882 8.75 20.7699 8.53353 20.3369 8.10059C19.904 7.66764 19.6875 7.14925 19.6875 6.54541C19.6875 5.94157 19.4767 5.42887 19.0552 5.00732C18.6336 4.58577 18.1152 4.375 17.5 4.375H6.5625C5.97005 4.375 5.45736 4.58577 5.02441 5.00732C4.59147 5.42887 4.375 5.94727 4.375 6.5625V28.4375C4.375 29.0299 4.59147 29.5426 5.02441 29.9756C5.45736 30.4085 5.97005 30.625 6.5625 30.625H17.5C18.1152 30.625 18.6336 30.4085 19.0552 29.9756C19.4767 29.5426 19.6875 29.0243 19.6875 28.4204C19.6875 27.8166 19.904 27.3039 20.3369 26.8823C20.7699 26.4608 21.2882 26.25 21.8921 26.25C22.4959 26.25 23.0086 26.4608 23.4302 26.8823C23.8517 27.3039 24.0625 27.8223 24.0625 28.4375V30.625C24.0625 31.8327 23.6353 32.8638 22.7808 33.7183C21.9263 34.5728 20.8952 35 19.6875 35H4.375C3.16732 35 2.13623 34.5728 1.28174 33.7183C0.427246 32.8638 0 31.8327 0 30.625V4.375C0 3.16732 0.427246 2.13623 1.28174 1.28174C2.13623 0.427246 3.16732 0 4.375 0H19.6875C20.8952 0 21.9263 0.427246 22.7808 1.28174C23.6353 2.13623 24.0625 3.16732 24.0625 4.375V6.5625C24.0625 7.15495 23.8517 7.66764 23.4302 8.10059C23.0086 8.53353 22.4959 8.75 21.8921 8.75Z" fill="#DC0000"/>
      </svg>
    </button>
  </div>

  <div class="min-h-[93%] flex flex-wrap items-center justify-evenly gap-2 p-8">
    <button on:click={()=>newRank = true} class="rounded-full border-solid border-2 w-12 h-12
      border-black absolute right-6 top-16 hover:bg-gray-100">
      <svg class="mx-auto" width="21" height="24" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        <path fill="#000000" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"/>
      </svg>
    </button>
    {#each cards as {bg, faceAlt, faceSrc}}
      <Card {faceSrc} {faceAlt} {bg}/>
    {/each}
  </div>

</main>

{#if newRank}
  <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-white rounded-xl border-solid border-2 border-green-800">
  
    <Form
      label1="title"
      label2="background color"
      hasUpload
      on:cancel={()=>newRank = false}
      on:submit={newRankinit}
      />
  
    </div>
  </div>
{/if}