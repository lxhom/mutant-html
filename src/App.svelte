<script>
  import Picker from "./lib/Picker.svelte";
  let open = false;
  let commentMode = false;
  let message = ""
</script>

{#if window.running_as_page}
  <p>
    Hi there! This is the page hosting Mutant Standard for Cohost. See <a href="https://cohost.org/lexi/post/470324-if-you-ever-wanted-t/" target="_blank"  rel="noreferrer">the post on Cohost</a> for more.
  </p>
  <p>
    This uses the <a href="https://mutant.tech" target="_blank" rel="noreferrer">Mutant Standard</a> emoji set.
  </p>
  <p>
    The emoji picker is available as an <a href="mutant-compiled.user.js" target="_blank" rel="noreferrer">userscript</a>. Open it while focusing on a textbox with CTRL+. on Cohost, or use it here:
  </p>
  <p>
    <button on:click={() => open = true}>Open picker</button>
  </p>
  <p>{@html message}</p>
{/if}

<Picker bind:open bind:commentMode bind:message></Picker>
