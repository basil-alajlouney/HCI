<script lang="ts">
  import { goto } from "./lib/helpers/commons";
  import Admin from "./lib/routes/admin.svelte";
  import Guest from "./lib/routes/guest.svelte";
  import Login from "./lib/routes/login.svelte";

  let endpoint:string = location.href.split("/").at(-1)!;
</script>

{#if endpoint === "login"}
  <Login/>
  {:else if endpoint === "admin"}
  <Admin/>
  {:else if endpoint === "guest"}
  <Guest/>
  {:else}
    {goto("login")}
{/if}