window.addEventListener('DOMContentLoaded', (event) => {
  const r = Shopify.routes.root,
    r2 = r.slice(0, r.length - 1);
  '' != r2 &&
    document.querySelectorAll('#__pf a').forEach((t) => {
      if (t.getAttribute('href') && t.getAttribute('href').length > 0) {
        let e = t.getAttribute('href');
        if (e.indexOf('http') >= 0) {
          let i = e.indexOf(`${window.location.host}/`);
          if (i > 0) {
            let l = e.slice(0, i + window.location.host.length),
              h = e.slice(i + window.location.host.length);
            t.setAttribute('href', l + r2 + h);
          }
        } else t.setAttribute('href', r2 + t.getAttribute('href'));
      } else if (
        t.getAttribute('data-href') &&
        t.getAttribute('data-href').length > 0
      ) {
        let o = t.getAttribute('data-href');
        if (o.indexOf('http') >= 0) {
          let f = o.indexOf(`${window.location.host}/`);
          if (f > 0) {
            let s = o.slice(0, f + window.location.host.length),
              a = o.slice(f + window.location.host.length);
            t.setAttribute('data-href', s + r2 + a);
          }
        } else t.setAttribute('data-href', r2 + t.getAttribute('data-href'));
      } else console.log('no element');
    });
});
