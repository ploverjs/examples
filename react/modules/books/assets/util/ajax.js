export default function ajax(url, options) {
  return window.fetch(url, options)
      .then(res => res.json());
}
