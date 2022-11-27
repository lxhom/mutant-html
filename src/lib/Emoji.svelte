<script>
  export let emoji;
</script>

{#if emoji}
  <img src="https://lxhom.github.io/mutant-html/assets/webp_128/{emoji.short}.webp" style="width: 1em; height: 1em" alt="{emoji.short} emoji">
{/if}
