<!--suppress JSUnresolvedVariable -->
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

  let shownEmojis;
  $: shownEmojis = emojis.filter(e => {
    if (categories[catIndex] !== e.cat && !search) return false;
    if (e.morph && e.morph !== morph) return false;
    if (e.color && e.color !== color) return false;
    return !(e.desc.indexOf(search) === -1 && e.short.indexOf(search) === -1);
  });

  export let open = false;
  let customize = false;
  let svg = false;

  let position = -1;
  let target = null
  let commentMode = false;

  document.addEventListener('keydown', e=>{
    debug('Got keydown', e);
    if (e.key === 'Escape') {
      open = false;
    }
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
      resolution = imageMode === 'md' ? "32" : "svg"
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
        // noinspection JSDeprecatedSymbols
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

  let resolution = "svg";

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
    let url = resolutionResolvers[resolution](short) + "#generated_with_https://mutant.us.to/"
    return imageTransformers[imageMode](desc, url)
  }

  let findEmojiButton = () => {
    let btns = Array.from(document.querySelectorAll('button[title="insert emoji"]:not([disabled])'));
    let el = btns[0];

    let tas = Array.from(document.querySelectorAll('textarea:not([disabled]):not([name="headline"])'));
    let ta = tas[0];

    if (btns.length === 0 && tas.length === 1) {
      target = ta;
      debug("updated textarea", {target});
    }

    if (btns.length === 1 && tas.length === 1) {
      // append new button next to the existing one
      el.title = "insert default emoji"
      let newBtn = document.createElement('button');
      newBtn.title = "insert mutant standard emoji"
      // noinspection CssInvalidPropertyValue,CssUnresolvedCustomProperty
      newBtn.innerHTML = `<img src="https://lxhom.github.io/mutant-html/assets/webp_128/soft.webp" alt="smiley making a ':3' face" style="width: calc(1 * var(--emoji-scale, 1.4em)); height: calc(1 * var(--emoji-scale, 1.4em)); margin: 0; display: inline;"/>`
      target = ta;
      newBtn.addEventListener('click', () => {
        imageMode = target.placeholder === "post body (accepts markdown!)" ? 'html' : 'md'
        resolution = imageMode === 'md' ? "32" : "svg"
        open = true
        position = target.selectionStart
      })
      debug("inserted button", {newBtn})
      el.parentNode.insertBefore(newBtn, el);
    }
  }

  setInterval(findEmojiButton, 200)

  debug('Emoji picker loaded');
</script>

{#if open}
  <div class="bg-click" on:click={() => open = false} on:keydown={() => open = false}></div>
  <div class="picker">
    <div class="categories">
      <div>Categories:&nbsp;</div>
      {#each categories as category, i}
        <button class="cat btn" class:highlight={i === catIndex && !search}
             on:click={() => {search = ""; catIndex = i}} title="{category}">
          <Emoji emoji={catIcons[i]}/>
        </button>
      {/each}
      <button class="customize btn" on:click={() => {open = false; customize = true}}>Customize</button>
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
        <button class="emoji" on:click={() => paste(emoji)} title="{emoji.desc}">
          <Emoji emoji={emoji}/>
        </button>
      {/each}
    </div>
  </div>
{/if}

{#if customize}
  <div class="bg-click" on:click={() => { open = true; customize = false }} on:keydown={() => open = false}></div>
  <div class="picker">
    <div class="categories">
      <div>Customize</div>
      <button class="customize" on:click={() => {open = true; customize = false}}>Save</button>
    </div>
    <div class="emojis">
      {#each Object.keys(morphs) as possibleMorph}
        <button class="emoji btn" on:click={() => morph = possibleMorph} class:highlight={morph === possibleMorph}>
          <Emoji emoji={getHand(possibleMorph, color)}/>
        </button>
      {/each}
    </div>
    <div class="hr"></div>
    <div class="emojis">
      {#each shownColors as possibleColor}
        <button class="emoji btn" on:click={() => { color = possibleColor; open = true; customize = false }} class:highlight={color === possibleColor}>
          <Emoji emoji={getHand(morph, possibleColor)}/>
        </button>
      {/each}
    </div>
  </div>
{/if}

<style>
  .picker button {
    background: none !important;
    color: inherit !important;
    border: none !important;
    padding: 0 !important;
    font: inherit !important;
    cursor: pointer !important;
    display: block !important;
  }

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
    width: min(500px, calc(100vw - 50px));
    height: min(500px, calc(100vh - 50px));
    background: white;
    color: black;
    border-radius: 10px;
    z-index: 101;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 0 10px 0 #000;
    box-sizing: border-box;
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
    align-items: center;
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
