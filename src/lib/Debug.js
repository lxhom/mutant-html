export default function debug(...args) {
  if (location.search.includes("debug")) {
    console.debug('@@@', ...args)
  }
}
