<script lang="ts">
	import THE from '/THE.png';
  import GuestCard from "../components/guest_card.svelte";
  import { goto } from '../helpers/commons';

</script>

<main>
<div class="nav">
  <ul>
    <li class="title"><button on:click={()=>goto("login")} class="home">Global Exellence</button></li>
    <div>
      <li><a href="#">About</a></li>
      <li><a href="#cards">Rankings</a></li>
    </div>
  </ul>
</div>
<div class="head-background">
  <h1 class="text-3xl">
    Global Excellence Initiative:Elevating University Rankings and Expertise
  </h1>
</div>

<div id="cards" class="w-full flex flex-col items-center p-4">

  <GuestCard faceSrc={THE} faceAlt="THE"/>
  <GuestCard faceSrc={THE} faceAlt="THE"/>
  <GuestCard faceSrc={THE} faceAlt="THE"/>

</div>

</main>

<style>
  main{
  margin: 0;
  min-height: 100vh;
  background-color: antiquewhite;
  overflow-x: hidden;
}
.nav {
  position: sticky;
  z-index: 99;
  top: 0;
  width: 100%;
  background-color: green;
}
ul {
  margin: 0;
  list-style: none;
  display: flex;
}
ul div {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: 100px;
}
ul div li a,.home {
  font-size: 1.5rem;
}
ul li a,.home {
  color: white;
  text-decoration: none;
  font-size: 2rem;
}
h1 {
  color: white;
  text-align: center;
  font-size: 4rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: 0.25rem;
  position: relative;
  top: 50px;
  z-index: 10;
}
.head-background {
  position: relative;
  height: 80vh;
  margin-bottom: 80px;
  padding-top: 100px;
  background-image: url("/Assets/back.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.head-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000066;
}
</style>