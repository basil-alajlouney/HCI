<script lang="ts">
  import Admin from "./lib/routes/admin.svelte";
  import Guest from "./lib/routes/guest.svelte";
  import Login from "./lib/routes/login.svelte";
  let place = "login";
</script>

{#if place === "login"}
  <Login
  on:guest={()=>place="guest"}
  on:login={()=>place="admin"}
  />
{:else if place === "admin"}
  <Admin/>
{:else if place === "guest"}
  <Guest/>
{/if}