<script lang="ts">
    export let name:string = "";
    export let type:string = "text";
    export let value:any = "";
</script>
{#if type == "text"}
    <div class="input-group">
        <input {name} bind:value={value} required={true} type="text" autocomplete="off" class="input">
        <label for="" class="user-label">
            <slot/>
        </label>
    </div>
    {:else}
    <div class="input-group">
        <input {name} bind:value={value} required={true} type="password" autocomplete="off" class="input">
        <label for="" class="user-label">
            <slot/>
        </label>
    </div>
    
{/if}

<style>
    .input-group {
 position: relative;
}

.input {
 border: solid 2px #3F8526;
 width: 100%;
 border-radius: 6px;
 background: none;
 padding: 0.5rem;
 color: black;
 transition: 150ms cubic-bezier(0.4,0,0.2,1);
}

.user-label {
 position: absolute;
 left: 15px;
 color: black;
 pointer-events: none;
 font-weight: 400;
 transform: translateY(0.5rem);
 transition: 150ms cubic-bezier(0.4,0,0.2,1);
}

.input:focus, input:valid {
 outline: none;
 border: 2px solid navy;
}

.input:focus ~ label, input:valid ~ label {
 transform: translateY(-50%) translateX(-10%) scale(0.9);
 background-color: #F1F5F9;
 padding: -1px;
 font-weight: 500;
 color: navy;
}
</style>