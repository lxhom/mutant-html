<script>
  import Emoji from "./Emoji.svelte";

  let count = 0;
  let increment = () => count++
  let open = false;
  let close = () => {
    console.log('closing')
    open = false;
    console.log({open})
  }
  let stopPropagation = (e) => e.stopPropagation();
  let categories = [];
  let catIcons = [];
  let selectedCat = 0
  let catDict

  let main = async () => {
    let data_url = "https://mutant.tech/dl/2020.04/mtnt_2020.04_data.json"
    // noinspection JSUnresolvedFunction
    let res = await GM_fetch(data_url)
    let body = await res.text()
    let emojiData = JSON.parse(body)
    let emojiDict = {}
    catDict = {}
    let dedup = e=>[...new Set(e)]
    let getVariants = set => dedup(set.map(e=>e.short.replace(e.root, '')))
    emojiData.map(e=>{
      if (!emojiDict[e.root]) emojiDict[e.root] = {list: [], variants: [], selected: null}
      if (!catDict[e.cat]) { catDict[e.cat] = []; categories.push(e.cat) }
      catDict[e.cat].push(e)
      emojiDict[e.root].list.push(e)
    })
    let variants = []
    for (let e in emojiDict) {
      let entry = emojiDict[e]
      // categories.push(entry.list[0].cat)
      entry.variants = getVariants(entry.list)
      variants.push(entry.variants.join('#'))
    }
    variants = dedup(variants)
    categories = dedup(categories)
    catIcons = categories.map(e=>catDict[e][0].short)
    console.log('here', {categories})


    let selected_variants = localStorage.theme ? JSON.parse(localStorage.emoji_variants) : []
    let save_variants = () => localStorage.emoji_variants = JSON.stringify(selected_variants)

    let insertEmoji = (e, insertText) => {
      let target = e.target
      if (target.tagName !== 'TEXTAREA') {
        alert('Please focus on a text area.')
        return
      }
      let start = target.selectionStart
      let text = target.value
      target.value = text.slice(0, start) + insertText + text.slice(start)
      target.selectionStart = start + insertText.length
      target.selectionEnd = start + insertText.length
    }

    document.addEventListener('keydown', e=>{
      if (e.ctrlKey && e.key === '.' && open === false) {
        e.preventDefault()
        open = true;
      }
    })
  }
  main().then(() => {
    console.log('done', categories)
  })
</script>


<div class="wrapper" class:visible={open} on:click={close}>
  <div class="popup" on:click={stopPropagation}>
    {#if open}
      <div class="header">
        <div class="cats">
          {#each categories as cat, catI}
            <div class="category"><Emoji short={catIcons[catI]}/></div>
          {/each}
        </div>
        <div class="close" on:click={close}>X</div>
      </div>
      <div class="emoji">
        {#each catDict[categories[selectedCat]] as e}
          <Emoji short={e.short}/>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid #ccc;
  }

  .emoji {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    font-size: 200%;
  }

  .cats {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    overflow-x: scroll;
  }

  .wrapper {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 999;
  }

  .visible {
    display: block !important;
  }

  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    margin-top: -150px;
    margin-left: -150px;
    z-index: 9999999;
    background: #fff;
    color: #000;
    border: 1px solid #000;
    border-radius: 10px;
    box-shadow: 0 0 10px #000;
  }
</style>
