export default function load_emoji() {
  try {
    let emojis = [];
    let categories = [];
    let catIcons = [];
    let morphs = {};

    let dedup = e=>[...new Set(e)]

    emojis = JSON.parse(localStorage.emoji_data)

    let emojis_by_category = {};
    for (let entry of emojis) {
      let cat = entry.cat;
      if (!categories.includes(cat)) {
        categories.push(cat);
        catIcons.push(entry);
        emojis_by_category[cat] = {};
      }
      if (!emojis_by_category[cat][entry.root]) {
        emojis_by_category[cat][entry.root] = [];
      }
      emojis_by_category[cat][entry.root].push(entry);
      if (entry.root === "hand") {
        let {morph, color} = entry;
        if (!morphs[morph]) morphs[morph] = [];
        morphs[morph] = dedup([...morphs[morph], color]);
      }
    }

    return {emojis, categories, catIcons, morphs}
  } catch(e) {
    alert("Could not load emoji data. See the console.")
    console.error("Error loading emoji data", e);
    throw e;
  }
}
