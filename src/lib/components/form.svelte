<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let label1 = "year";
  export let label2 = "rank";
  export let hasUpload:boolean = false;
  export let files:FileList | null = null;
  let context1:string;
  let context2:string;
</script>
<div class="div-container">
  <div class="logo-container">
    Edit
  </div>

  <div class="div">
    <div class="div-group">
      <label for={context1}>{label1}</label>
      <input bind:value={context1} type="text" id={context1} name={context1} placeholder={context1} required>
      <label for={context2}>{label2}</label>
      <input bind:value={context2} type="text" id={context2} name={context2} placeholder={context2} required>
      {#if hasUpload}
      <label for="uploadfile">upload</label>
      <label class="upload-file-label hover:bg-gray-100 flex"
        for="file-upload">
        {#if !files?.length}
        <p class="flex justify-between items-center">
          upload file
          <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M12 2.586L17.914 8.5L16.5 9.914l-3.5-3.5V16h-2V6.414l-3.5 3.5L6.086 8.5zM4.5 14v5h15v-5h2v7h-19v-7z"/>
          </svg>
        </p>
        {:else}
        {files[0].name}
        {/if}

      </label>
      {/if}
      <input type="file" bind:files={files} class="hidden" id="file-upload"/>
    </div>

    <div class="flex gap-2">
      <button on:click={()=>dispatch("submit",{context1, context2, files})} class="div-submit-btn" style="background-color: green;" type="submit">submit</button>
      <button on:click={()=>dispatch("cancel")} class="div-submit-btn" style="background-color: tomato;" type="submit">cancel</button>
    </div>
  </div>

</div>

<style>
  .div-container {
  max-width: 600px;
  background-color: #fff;
  padding: 32px 46px;
  font-size: 14px;
  font-family: inherit;
  color: #212121;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
}

.div-container button:active {
  scale: 0.95;
}

.div-container .logo-container {
  text-align: center;
  font-weight: 600;
  font-size: 18px;
}

.div-container .div {
  display: flex;
  flex-direction: column;
}

.div-container .div-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.div-container .div-group label {
  display: block;
  margin-bottom: 5px;
}

.div-container .div-group input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 6px;
  font-family: inherit;
  border: 1px solid #ccc;
}

.div-container .div-group input::placeholder {
  opacity: 0.5;
}

.div-container .div-group input:focus {
  outline: none;
  border-color: #1778f2;
}

.div-container .div-submit-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  color: #fff;
  background-color: #212121;
  border: none;
  width: 100%;
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin: 12px 0;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
}

.div-container .div-submit-btn:hover {
  background-color: #313131;
}

.div-container .link {
  color: #1778f2;
  text-decoration: none;
}

.div-container .signup-link {
  align-self: center;
  font-weight: 500;
}

.div-container .signup-link .link {
  font-weight: 400;
}

.div-container .link:hover {
  text-decoration: underline;
}
.upload-file-label{
  width: 100%;
  padding: 12px 16px;
  border-radius: 6px;
  font-family: inherit;
  border: 1px solid #ccc;
}
</style>