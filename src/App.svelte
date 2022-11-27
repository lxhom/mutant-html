<script>
  import Picker from "./lib/Picker.svelte";
  let open = false;
  let commentMode = false;
</script>

{#if window.running_as_page}
  <p>
    Hi there! This is the page hosting Mutant Standard for Cohost. See the post on Cohost for more.
  </p>
  <p>
    This uses the <a href="https://mutant.tech">Mutant Standard</a> emoji set.
  </p>
  <p>
    The emoji picker is available as an <a href="mutant-compiled.user.js">userscript</a> or you can try it here:<br><button on:click={() => open = true}>Open picker</button><br><input id="comMode" type="checkbox" bind:checked={commentMode}> <label for="comMode">Comment mode (<code>![...](...)</code> instead of <code>&lt;img&gt</code> tags</label>)
  </p>
{/if}

<Picker bind:open bind:commentMode></Picker>
