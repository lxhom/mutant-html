let glob = require('glob');
let fs = require('fs');

let files_to_compile = [
    './compat/*.js',
    './dist/assets/*.js',
]

let styles_to_compile = [
    './dist/assets/*.css',
]

let compile_userscript = parts => `// ==UserScript==
// @name         Svelte Userscript
// @namespace    https://svelte.dev/
// @version      0.2.2
// @updateURL    https://lxhom.github.io/mutant-html/mutant-compiled.user.js
// @downloadURL  https://lxhom.github.io/mutant-html/mutant-compiled.user.js
// @description  try to take over the world!
// @author       cohost.org/lexi
// @updateURL    https://lxhom.github.io/mutant-html/mutant-compiled.user.js
// @downloadURL  https://lxhom.github.io/mutant-html/mutant-compiled.user.js
// @match        https://cohost.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cohost.org
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(async () => {
    let user_init = false;
    let init_fn = async () => {
        console.log('init_fn called', {user_init})
        if (user_init) return; user_init = true;
${parts.join(';\n')};
    }
    setTimeout(init_fn, 100);
    console.log('userscript initialized')
})();
`


// make stylesheet and inject it into the page
let compile_stylesheet = css => `let style = document.createElement('style');style.innerHTML = \`${css.replace('`', '\\`')}\`;document.head.appendChild(style);`

let compile_script = js => `${js};`

// resolve files, including wildcards, and return a list of file contents
let resolve_files = files => {
    let resolved = [];
    for (let file of files) {
        let resolved_files = glob.sync(file);
        for (let resolved_file of resolved_files) {
            resolved.push(fs.readFileSync(resolved_file, 'utf8').toString().trim());
        }
    }
    return resolved;
}

// compile the userscript
let compiled = compile_userscript([
    ...resolve_files(styles_to_compile).map(compile_stylesheet),
    ...resolve_files(files_to_compile).map(compile_script),
])

fs.writeFileSync('./dist/mutant-compiled.user.js', compiled);
console.log('Userscript compiled');
