let y = (async () => {
  (function () {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      s(e);
    new MutationObserver((e) => {
      for (const t of e)
        if (t.type === "childList")
          for (const r of t.addedNodes)
            r.tagName === "LINK" && r.rel === "modulepreload" && s(r);
    }).observe(document, { childList: !0, subtree: !0 });
    function o(e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        e.crossOrigin === "use-credentials"
          ? (t.credentials = "include")
          : e.crossOrigin === "anonymous"
          ? (t.credentials = "omit")
          : (t.credentials = "same-origin"),
        t
      );
    }
    function s(e) {
      if (e.ep) return;
      e.ep = !0;
      const t = o(e);
      fetch(e.href, t);
    }
  })();
  const m = "modulepreload",
    p = function (n, o) {
      return new URL(n, o).href;
    },
    u = {};
  (function (n, o, s) {
    let e = Promise.resolve();
    if (o && o.length > 0) {
      const t = document.getElementsByTagName("link"),
        r = document.querySelector("meta[property=csp-nonce]"),
        f =
          (r == null ? void 0 : r.nonce) ||
          (r == null ? void 0 : r.getAttribute("nonce"));
      e = Promise.all(
        o.map((i) => {
          if (((i = p(i, s)), i in u)) return;
          u[i] = !0;
          const c = i.endsWith(".css"),
            h = c ? '[rel="stylesheet"]' : "";
          if (s)
            for (let d = t.length - 1; d >= 0; d--) {
              const a = t[d];
              if (a.href === i && (!c || a.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${i}"]${h}`)) return;
          const l = document.createElement("link");
          if (
            ((l.rel = c ? "stylesheet" : m),
            c || ((l.as = "script"), (l.crossOrigin = "")),
            (l.href = i),
            f && l.setAttribute("nonce", f),
            document.head.appendChild(l),
            c)
          )
            return new Promise((d, a) => {
              l.addEventListener("load", d),
                l.addEventListener("error", () =>
                  a(new Error(`Unable to preload CSS for ${i}`))
                );
            });
        })
      );
    }
    return e
      .then(() => n())
      .catch((t) => {
        const r = new Event("vite:preloadError", { cancelable: !0 });
        if (((r.payload = t), window.dispatchEvent(r), !r.defaultPrevented))
          throw t;
      });
  })(() => import("./VoxelStructuralFrame.js"), [], import.meta.url)
    .then((n) => {
      var o = new n.TimberFrame("HostGrid", !0, !0, 5);
      o.Regenerate();
    })
    .catch((n) => {
      console.error("Module loading failed:", n);
    });
})();
export { y as __tla };
