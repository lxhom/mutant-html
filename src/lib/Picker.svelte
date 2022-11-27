<script>
  import load_emoji from "./Loader.js";
  import Emoji from "./Emoji.svelte";
  import debug from "./Debug.js";

  let {emojis, categories, catIcons, morphs} = load_emoji();

  let color = localStorage.emoji_color ??= 'default';
  let morph = localStorage.emoji_morph ??= 'paw';
  $: localStorage.emoji_color = color;
  $: localStorage.emoji_morph = morph;

  let shownColors; $: shownColors = morphs[morph];
  let getHand = (morph, color = "default") => emojis.find((e) => e.root === "hand" && e.morph === morph && e.color === color) || emojis.find((e) => e.root === "hand" && e.morph === morph)

  let catIndex = 0;
  let search = "";
  $: {open; search = ""}

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
  let bigger = false;
  let svg = false;

  let position = -1;
  let target = null
  export let commentMode = false;

  document.addEventListener('keydown', e=>{
    debug('Got keydown', e);
    if (e.ctrlKey && e.key === '.' && open === false) {
      debug('CTRL+. pressed');
      target = e.target
      if (target.tagName !== 'TEXTAREA') {
        debug('Not in textarea');
        alert('Please focus on a text area first!');
        return
      }
      debug('Opening emoji picker');
      imageMode = target.placeholder === 'leave a comment...' ? 'md' : 'html'
      e.preventDefault()
      open = true;
      position = target.selectionStart
    }
  })

  let paste = async (e) => {
    let html = generateCode(e)
    if (window.running_as_page) {
      if ("navigator" in window && "clipboard" in navigator) {
        await navigator.clipboard.writeText(html)
      } else {
        let el = document.createElement('textarea')
        el.value = html
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
      }
      setMessage(`Copied <pre>${html.replace('<', "&lt;")}</pre> to clipboard`)
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

  let commentText = `Use Markdown syntax ![]() instead of HTML syntax <img> to use them in places without HTML support, like Cohost comments.`
  let inputEl = {};
  $: {open
    if (inputEl && inputEl.focus) {
      console.log('focusing', inputEl)
      inputEl.focus()
    }
  }
  export let message = "";
  let setMessage = (msg) => {
    message = msg;
  }



  let resolutions = {
    128: '128x128 image',
    32: '32x32 image',
    svg: 'SVG, scalable'
  }

  let resolutionResolvers = {
    128: e => `https://lxhom.github.io/mutant-html/assets/webp_128/${e}.webp`,
    32: e => `https://lxhom.github.io/mutant-html/assets/webp_32/${e}.webp`,
    svg: e => `https://lxhom.github.io/mutant-html/assets/svg/${e}.svg`
  }

  let resolution = "128";

  let scales = [
      0.5,
      0.75,
      1,
      1.25,
      1.5,
      2,
      5,
      10,
  ]

  scales.custom = 1;
  let scale = "2";
  $: {
    if (scale === "custom") {
      scales.custom = +prompt("Enter a custom scale (1 = 100%)", scales.custom);
    }
  }

  let imageModes = {
    html: 'HTML (Post)',
    md: 'MD (Comment)',
  }

  let imageMode = 'html';

  let getStyle = () => `width: calc(${scales[scale]} * var(--emoji-scale, 1.4em)); height: calc(${scales[scale]} * var(--emoji-scale, 1.4em)); margin: 0; display: inline;`

  let imageTransformers = {
    md: (alt, url) => `![${alt}](${url})`,
    html: (alt, url) => `<img src="${url}" alt="${alt}" title="${alt}" style="${getStyle()}"/>`,
  }

  let generateCode = (e) => {
    let desc = e.desc.replace('"',"'")
    let short = e.short
    let url = resolutionResolvers[resolution](short)
    return imageTransformers[imageMode](desc, url)
  }

  debug('Emoji picker loaded');
</script>

{#if open}
  <div class="bg-click" on:click={() => open = false}></div>
  <div class="picker">
    <div class="categories">
      <div>Categories:&nbsp;</div>
      {#each categories as category, i}
        <div class="cat btn" class:highlight={i === catIndex && !search}
             on:click={() => {search = ""; catIndex = i}} title="{category}">
          <Emoji emoji={catIcons[i]}/>
        </div>
      {/each}
      <div class="customize btn" on:click={() => {open = false; customize = true}}>Customize</div>
    </div>

    <div class="search">
      <input type="text" class="input" placeholder="Search emojis..." bind:value={search} bind:this={inputEl}/>

      <select bind:value={imageMode}>
        {#each Object.keys(imageModes) as mode}
          <option value="{mode}">{imageModes[mode]}</option>
        {/each}
      </select>

      <select bind:value={resolution}>
        {#each Object.keys(resolutions) as size}
          <option value="{size}">{resolutions[size]}</option>
        {/each}
      </select>

      {#if imageMode === 'html'}
        <select bind:value={scale}>
          {#each Object.keys(scales) as scale}
            <option value="{scale}">{scale === "custom" ?"Custom: ":""} {scales[scale]}x</option>
          {/each}
        </select>
      {/if}
    </div>

    <div class="emojis">
      {#each shownEmojis as emoji}
        <div
          class="emoji btn"
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
        <div class="emoji btn" on:click={() => morph = possibleMorph} class:highlight={morph === possibleMorph}>
          <Emoji emoji={getHand(possibleMorph, color)}/>
        </div>
      {/each}
    </div>
    <div class="hr"></div>
    <div class="emojis">
      {#each shownColors as possibleColor}
        <div class="emoji btn" on:click={() => color = possibleColor} class:highlight={color === possibleColor}>
          <Emoji emoji={getHand(morph, possibleColor)}/>
        </div>
      {/each}
    </div>
  </div>
{/if}

<style>
  .btn {
    cursor: pointer;
  }
  .cat {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    font-size: 16px;
    width: 22px;
    height: 22px;
  }
  input, select {
    min-height: 19px;
    margin: 1px;
    padding: 0 4px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-size: 13px;
    background: #fff;
    color: #000;
    border: 1px solid #888;
    border-radius: 0;

  }
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
  .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }
  .search > input {
    flex: 1;
    min-width: 10px;
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
