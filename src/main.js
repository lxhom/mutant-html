import App from './App.svelte'

let main = async () => {
  console.log(!!localStorage.emoji_data)
  if (!localStorage.emoji_data) {
    if (window.running_as_page) {
      let res = await fetch("assets/data.json");
      localStorage.emoji_data = await res.text()
    } else {
      let res = await GM_fetch("https://lxhom.github.io/mutant-html/assets/data.json");
      localStorage.emoji_data = await res.text()
    }
  }

  const app = new App({
    target: document.getElementById('userscript-app')
  })

  console.log('Svelte initialized on', app.$$.root)
}

main().then();

// export default app
