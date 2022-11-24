if (!self.define) {
  let e,
    s = {};
  const n = (n, c) => (
    (n = new URL(n + ".js", c).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, i) => {
    const a =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[a]) return;
    let t = {};
    const r = (e) => n(e, a),
      o = { module: { uri: a }, exports: t, require: r };
    s[a] = Promise.all(c.map((e) => o[e] || r(e))).then((e) => (i(...e), t));
  };
}
define(["./workbox-588899ac"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/G-I7n-tL8Agso9cu2Tgxv/_buildManifest.js",
          revision: "2f808c15c429f52a905690cf6857425e",
        },
        {
          url: "/_next/static/G-I7n-tL8Agso9cu2Tgxv/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/229-bd9120cb56fb0c8f.js",
          revision: "bd9120cb56fb0c8f",
        },
        {
          url: "/_next/static/chunks/262-127a3f59a2de7005.js",
          revision: "127a3f59a2de7005",
        },
        {
          url: "/_next/static/chunks/476-48be072e6f080337.js",
          revision: "48be072e6f080337",
        },
        {
          url: "/_next/static/chunks/675-6814d39eb340acd4.js",
          revision: "6814d39eb340acd4",
        },
        {
          url: "/_next/static/chunks/75-24f5b0ba66c5979d.js",
          revision: "24f5b0ba66c5979d",
        },
        {
          url: "/_next/static/chunks/framework-4556c45dd113b893.js",
          revision: "4556c45dd113b893",
        },
        {
          url: "/_next/static/chunks/main-24337e41c3359801.js",
          revision: "24337e41c3359801",
        },
        {
          url: "/_next/static/chunks/pages/_app-54772c170987db80.js",
          revision: "54772c170987db80",
        },
        {
          url: "/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",
          revision: "a4ba2246ff8fb532",
        },
        {
          url: "/_next/static/chunks/pages/index-5f1e45948fd4ef75.js",
          revision: "5f1e45948fd4ef75",
        },
        {
          url: "/_next/static/chunks/pages/main/estadisticas-7a5fbca5454a55d1.js",
          revision: "7a5fbca5454a55d1",
        },
        {
          url: "/_next/static/chunks/pages/main/home-cdc434534d6239bc.js",
          revision: "cdc434534d6239bc",
        },
        {
          url: "/_next/static/chunks/pages/main/noticias-1d99db892dcb0232.js",
          revision: "1d99db892dcb0232",
        },
        {
          url: "/_next/static/chunks/pages/main/partidos-99b87929f547d537.js",
          revision: "99b87929f547d537",
        },
        {
          url: "/_next/static/chunks/pages/main/resultados-327394b2975ce5c7.js",
          revision: "327394b2975ce5c7",
        },
        {
          url: "/_next/static/chunks/pages/main/videos-5c552673fedab736.js",
          revision: "5c552673fedab736",
        },
        {
          url: "/_next/static/chunks/pages/session/confirm-69c5479d2b1703c6.js",
          revision: "69c5479d2b1703c6",
        },
        {
          url: "/_next/static/chunks/pages/session/forgotpassword-780a5f65897061cf.js",
          revision: "780a5f65897061cf",
        },
        {
          url: "/_next/static/chunks/pages/session/login-66f4b0b9c14b03f3.js",
          revision: "66f4b0b9c14b03f3",
        },
        {
          url: "/_next/static/chunks/pages/session/newPassword-98679e433d77e954.js",
          revision: "98679e433d77e954",
        },
        {
          url: "/_next/static/chunks/pages/session/signup-65fa08663f3d55ca.js",
          revision: "65fa08663f3d55ca",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-d7b038a63b619762.js",
          revision: "d7b038a63b619762",
        },
        {
          url: "/_next/static/css/57c5133f0cc004a9.css",
          revision: "57c5133f0cc004a9",
        },
        {
          url: "/android-chrome-192x192.png",
          revision: "ce7b165196e7baa905701c8318099283",
        },
        {
          url: "/android-chrome-512x512.png",
          revision: "f7463c87cbaabdec644a9ee323d8f78e",
        },
        {
          url: "/apple-touch-icon.png",
          revision: "9f58634516709fcc6dbc1f990cc1dc47",
        },
        {
          url: "/favicon-16x16.png",
          revision: "2b14c89317bf23bf72c3bec23d0e00b8",
        },
        {
          url: "/favicon-32x32.png",
          revision: "34ec330c06bea3f9bb7cc98c0e824cc5",
        },
        { url: "/favicon.ico", revision: "bb2c226598bf2616c9388772bb25537d" },
        { url: "/manifest.json", revision: "42e0b85a873db6650fbd43d8cce0aad9" },
        { url: "/vercel.svg", revision: "26bf2d0adaf1028a4d4c6ee77005e819" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: c,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
