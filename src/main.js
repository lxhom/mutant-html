import App from './App.svelte'

try { localStorage } catch(e) { alert(`Cookies blocked on ${window.origin
}! Cookies are necessary to store emoji metadata, sorry!`) }


let main = async () => {
  if (!localStorage.emoji_data) {
    if (window.running_as_page) {
      let res = await fetch("assets/data.json");
      localStorage.emoji_data = await res.text()
    } else {
      let res = await GM_fetch("https://lxhom.github.io/mutant-html/assets/data.json");
      localStorage.emoji_data = await res.text()
      alert("Downloaded emoji data! Use CTRL+. in a textbox to open the emoji picker.")
    }
  }

  let target = document.createElement('div');
  target.id = 'userscript-app';
  document.body.appendChild(target);

  const app = new App({target})

  console.log('Svelte initialized on', app.$$.root)
}

main().then();

// export default app
