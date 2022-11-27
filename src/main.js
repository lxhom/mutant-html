import App from './App.svelte'
import debug from "./lib/Debug.js";

try { localStorage } catch(e) { alert(`Cookies blocked on ${window.origin
}! Cookies are necessary to store emoji metadata, sorry!`) }

let download_data = async () => {
  if (window.running_as_page) {
    let res = await fetch("assets/data.json");
    localStorage.emoji_data = await res.text()
  } else {
    let res = await GM_fetch("https://lxhom.github.io/mutant-html/assets/data.json");
    localStorage.emoji_data = await res.text()
    alert("Downloaded emoji data! Use CTRL+. in a textbox to open the emoji picker.")
  }
}

let main = async () => {
  if (!localStorage.emoji_data) {
    await download_data()
  }

  let success = false, error = null, parsed = null;
  try {
    parsed = JSON.parse(localStorage.emoji_data)
    if (parsed.length > 0) success = true;
  } catch(e) {
    error = e
  }
  debug("Parsing emoji", {success, error})
  if (!success) {
    error = null; success = false;
    try {
      parsed = JSON.parse(localStorage.emoji_data)
      if (parsed.length > 0) success = true;
    } catch(e) {
      error = e
    }
    if (!success) {
      alert("Could not load emoji data. See the console.")
      console.error("Could not load emoji data", {error})
      throw error;
    }
  }


  debug(`Loaded ${parsed.length} emoji entries`)

  let target = document.createElement('div');
  target.id = 'userscript-app';
  document.body.appendChild(target);

  debug("Appended target div")

  const app = new App({target})

  debug('Svelte initialized on', app.$$.root)
}

debug("running main()");

main().then(() => {
  debug("main() finished");
});

// export default app
