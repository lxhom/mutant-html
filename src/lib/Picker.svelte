<script>
  import load_emoji from "./Loader.js";
  import Emoji from "./Emoji.svelte";

  let {emojis, categories, catIcons, morphs} = load_emoji();

  let color = localStorage.emoji_color ??= 'default';
  let morph = localStorage.emoji_morph ??= 'paw';
  $: localStorage.emoji_color = color;
  $: localStorage.emoji_morph = morph;

  let shownColors; $: shownColors = morphs[morph];
  let getHand = (morph, color = "default") => emojis.find((e) => e.root === "hand" && e.morph === morph && e.color === color) || emojis.find((e) => e.root === "hand" && e.morph === morph)

  let catIndex = 0;
  let search = "";

  let shownEmojis = [];
  $: shownEmojis = emojis.filter(e => {
    if (categories[catIndex] !== e.cat && !search) return false;
    if (e.morph && e.morph !== morph) return false;
    if (e.color && e.color !== color) return false;
    if (e.desc.indexOf(search) === -1 && e.short.indexOf(search) === -1) return false;
    return true;
  });

  export let open = false;
  let customize = false;

  let position = -1;
  let target = null
  export let commentMode = false;
  document.addEventListener('keydown', e=>{
    if (e.ctrlKey && e.key === '.' && open === false) {
      target = e.target
      if (target.tagName !== 'TEXTAREA') {
        return
      }
      commentMode = target.placeholder === 'leave a comment...'
      e.preventDefault()
      open = true;
      position = target.selectionStart
      console.log('opened', {open})
    }
  })

  let paste = async (e) => {
    let desc = e.desc.replace('"',"'")
    let html = commentMode ? `![${desc}](https://lxhom.github.io/mutant-html/assets/webp_32/${e.short}.webp)` : `<img src="https://lxhom.github.io/mutant-html/assets/webp_128/${e.short}.webp" alt="${desc}" title="${desc}" style="width: 1em; height: 1em; margin: 0; display: inline;">`
    if (window.running_as_page) {
      await navigator.clipboard.writeText(html)
      alert("Copied "+html+" to clipboard")
    } else {
      insertIntoTextbook(html)
    }
    open = false
  }

  let insertIntoTextbook = html => {
    let text = target.value
    target.value = text.slice(0, position) + html + text.slice(position)
    target.selectionStart = position + html.length
    target.selectionEnd = position + html.length
    target.dispatchEvent(new Event('input', {bubbles:true}));
  }

</script>

{#if open}
  <div class="bg-click" on:click={() => open = false}></div>
  <div class="picker">
    <div class="categories">
      <div>Categories</div>
      {#each categories as category, i}
        <div
          class="category" class:highlight={i === catIndex && !search}
          on:click={() => catIndex = i}>
          <div title="{category}">
            <Emoji emoji={catIcons[i]}/>
          </div>
        </div>
      {/each}
      <div class="customize" on:click={() => {open = false; customize = true}}>Customize</div>
    </div>
    <div class="search">
      <input type="text" placeholder="Search emojis..." bind:value={search}/>
      <div class="close" on:click={() => open = false}>Close</div>
    </div>
    <div class="emojis">
      {#each shownEmojis as emoji}
        <div
          class="emoji"
          on:click={() => paste(emoji)}>
          <div class="emoji" title="{emoji.desc}">
            <Emoji emoji={emoji}/>
          </div>
<!--          {emoji.desc}-->
        </div>
      {/each}
    </div>
  </div>
{/if}

{#if customize}
  <div class="bg-click" on:click={() => { open = true; customize = false }}></div>
  <div class="picker">
    <div class="categories">
      <div>Customize</div>
      <div class="customize" on:click={() => {open = true; customize = false}}>Save</div>
    </div>
    <div class="emojis">
      {#each Object.keys(morphs) as possibleMorph}
        <div class="emoji" on:click={() => morph = possibleMorph} class:highlight={morph === possibleMorph}>
          <Emoji emoji={getHand(possibleMorph, color)}/>
        </div>
      {/each}
    </div>
    <div class="hr"></div>
    <div class="emojis">
      {#each shownColors as possibleColor}
        <div class="emoji" on:click={() => color = possibleColor} class:highlight={color === possibleColor}>
          <Emoji emoji={getHand(morph, possibleColor)}/>
        </div>
      {/each}
    </div>
  </div>
{/if}

<style>
  .bg-click {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    z-index: 100;
  }
  .picker {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    background: white;
    color: black;
    border-radius: 10px;
    z-index: 101;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  .categories {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .categories > div:not(:last-child), .search > *:not(:last-child) {
    margin-right: 10px
  }
  .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }
  .search > input {
    flex: 1;
  }

  .emojis {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
    font-size: 200%;
  }
  .emoji {
    margin: 2px 5px;
  }
  .highlight {
    background: #0ff;
  }
  .customize {
    margin-left: auto;
  }
  .hr {
    height: 1px;
    background: #000;
    margin: 5px 0;
  }
</style>
