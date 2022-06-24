'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "3b668c1fd054108f3ec686c2080d5421",
"assets/AssetManifest.json": "8d62ba723775ee0e9039848bac1c4d58",
"assets/assets/images/facebook.png": "2377fcaeb3bd710630b96f033876591c",
"assets/assets/images/python.png": "64aeac68d191109b6041934d98b8847c",
"assets/assets/images/python_circle.png": "b85d209d9c34e721a8f420175edf1a04",
"assets/assets/images/flutter_circle.png": "59abe6cc666a648c33f9488e53663858",
"assets/assets/images/flutter.png": "7a48d7c8f2d7f65d904aaa538e7252ca",
"assets/assets/images/android.png": "a0a5cd9e33ffc5367589650d36fd6fb2",
"assets/assets/images/java_circle.png": "cb18683cd0bb39f5ea863c4fe9ee2b2c",
"assets/assets/images/backend_icon.png": "a9f40c5e289f8a24b377154ee3f61af9",
"assets/assets/images/logo.png": "f7dfd181285df99cdeca5da3d55531ff",
"assets/assets/images/flutter_.png": "9893070aed3ec4e282a7a92c76a6cd4d",
"assets/assets/images/linkedIn.png": "539e826d2e9efd907a4a487e3fd4c27a",
"assets/assets/images/khalid.png": "d844bf2982bc466a968c2107542a0489",
"assets/assets/images/java.png": "8f7e4cc176298fd0724a1fe3b1c3f18e",
"assets/assets/images/iyke.png": "7994dca7c8b850291f1df26efbcc960d",
"assets/assets/images/github.png": "b17444f181dfac9004b1138776afc162",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "c5155001e63954e19cee4ba5698f3b52",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "b0e0595acb8c99f15644b9516f9ec0a2",
"icons/icon-192.png": "10cb611203171b17d7a112813f8e4260",
"icons/icon-512.png": "be0be3ac9d719bed147c786242ebef4d",
"main.dart.js": "cb7ba2114d2cd1c8d7c729f462eb5af4",
"index.html": "07b5e2ecca10f15a1b0fb56ea9adfc32",
"/": "07b5e2ecca10f15a1b0fb56ea9adfc32",
"version.json": "009c9e65172e010890f7f65fde438006",
".git/COMMIT_EDITMSG": "4a955c41c28e487a05dbcc66d4414ca5",
".git/logs/HEAD": "a40ca9ac2af686c900919adf2cfd5612",
".git/logs/refs/heads/main": "3825e6e257f3fc0910e996a0ade21d39",
".git/logs/refs/remotes/origin/main": "51f7369e2331f8b46c16d3bee48ee0f7",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/d8/127a5ce4dd7fea28bdf7ade8e142607e293c45": "aec93aef711c9e3d3c92a830affb927c",
".git/objects/7b/b91e27c485dd9a3b069e3379d18ebc723c432d": "5a1c36f403c3162893967492272437c5",
".git/objects/fe/32336f1a02f6e20c3e8af1a744ec5805b9cd1a": "fab5391de15f683ba1866b304b614fff",
".git/objects/b8/d4dc908b5218037e0a4c32ee22d2f676c97bac": "fcfe89b5cffa4ea532d00ff2ba22a5aa",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/66/7da58243dc2ebf2ed2722f83c305e7598e203d": "2c11e91c72e40cad220f6af1f801a68e",
".git/objects/f0/d8aebae2c19331fca3863f6eb51352e5069469": "a22866013214a199795cbfe1751d174b",
".git/objects/f0/fbf08287affe641afd8a379e81ec557b2dbaf4": "e6177bf4aaeb7be1c2898e6950826a63",
".git/objects/f1/857ed284ff5707448967bc6f3d0c1319049b46": "22bcce95c06213f2a607d6a4cb9ddcf8",
".git/objects/63/fee959b6bd69a0d44bd4a0eea746e586a231f5": "943252f1befd0fff9e50aeeae76b595a",
".git/objects/8c/99d67288d7f98ae50e8b1e91af888edf54a8d9": "44d1de9b4724e0f0c575d933ab7da073",
".git/objects/3b/4c29b45347e4cdfa8fab12d624cb480ba62046": "a8e61fe9f452b0edf255fc8345672bdb",
".git/objects/8b/308e453e65ebd2255bd25224f118da758f5961": "878dba7710294b8c7c780c22a2f10223",
".git/objects/1b/d05f2374a38332f25fd80b14f6adcdf9b3e9e5": "a1378c17df0d866d13b6d163c94a8ec1",
".git/objects/5d/333d3fc98f6bfce6c73773717b87c615fe7d3e": "48336892caf8eee439ab4b343d76f76c",
".git/objects/11/7469f3c8acd5a3807d4470a66856afd69942cc": "30274db738a03ab8dc0e2f702b371d7d",
".git/objects/a6/b0456af358df6a2326e25c19472c63e7eb59b7": "79c358729fc773dfec0635028d3c5dfc",
".git/objects/b5/b9a2727f5d639a106641275ba9aab391317d09": "6f5a571e358f6fecc502accc92802110",
".git/objects/24/1a35fef26b7411aa2e5cfb233dde58c1fcbf51": "fab4bd668784a6eb610aef1f6b63a7b3",
".git/objects/7d/084a93c34db19b76c7e881bd4e07ca90231111": "17f002cf02c284cc85b8bd123a4dc1a2",
".git/objects/ba/f2e8cf78e5e0e7c8150ec496aa7554323d1112": "e164c200db5d4376926adea1d6f92743",
".git/objects/d5/0feeb629e460e26a2f18c99837934ceb71f281": "3e369b5a31a5f54fb010eaf0ed73cfeb",
".git/objects/18/b31ccc7d603e57c4e351761223dc0e2d9f7c4c": "0134036e2d050d559ab3aafea75448a7",
".git/objects/4a/dd3c1db22ed31aed26f77e9665af454761a8f5": "a8e0a255fd1d0cfec300039b1e79a7aa",
".git/objects/4a/0f0ff9928303beed747cab8b037b5172f8473b": "506bc2e858af1fceffc9e9a4b7480158",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ae/5d34fe5c538519f1afd0ffe986f8617bacfd8a": "6651d4314fc45ebc153a8056237163aa",
".git/objects/ae/84e0bf2a61f6008b8d679c849623e139fdb2f5": "7d0ac875f68ef91aab6f8054e1d63fe5",
".git/objects/1e/7779b829072d2d0386c24aa5ed0c4be6a6cf79": "b7fe322c086d9cbaaadc90e328a6e626",
".git/objects/70/d60e70644b64ddd17bc44af2dee4111bc78c29": "096e2da2254ef642336ed4274de4588b",
".git/objects/0f/1ac36155eb193703d8d4f3a30d380f15cb6bfc": "d49f2b46a64fc54a317098002617d21b",
".git/objects/9e/b464ea337785ef59539ac8d5e78ada533130fe": "1bd9d04057a2e5447f607f7ce66b5572",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/16/34caccd1dfe17a6dc818db8ee6ca3f9ec68195": "37109879a043caacc737d6f2ab7ce256",
".git/objects/f3/d18f5f5d60483adb9da811c37e18e1c6bf87fe": "a6e4778de375218ae5bad9e36f176c7f",
".git/objects/db/da30cbf73e7c6e9f94e9ae3319c3019bfed147": "38c456c607898f52f5102125155b96fc",
".git/objects/56/41959d65b22e4571f5c51f9a623ea5c00dbb84": "89716a4beb77ad0377f2482493517a51",
".git/objects/37/c3ac0b0880db7a80c91837c934bb6ae93aa33d": "a97279fcb0a978e9fe14fbae48b08ea9",
".git/objects/f6/b60b41a4054912ee86d47ed0ee4ca3b39c52c9": "180cfa3b9430d509fbc77c52e012afa2",
".git/objects/f6/89684752fa497d97cd7e6b48c4c9373b9a9e71": "7a7ea0b3c71545cc5e17077a7f752dd7",
".git/objects/02/9840b0062d987002f262ea7b10b6b2c421a588": "40a9235c87533176c48a06be202e0507",
".git/objects/02/cb6bf486d56004d5335c2cd39dcb82c8457491": "e7b0cd7ad79aea82b7dacc44747abb1c",
".git/objects/1d/4e14e2a9c4cf15ac1d72ebe5750fc5914e463c": "b269ef3cde5d257fd238987fd0db236e",
".git/objects/42/641261d49baf13dffae2a77c9cb879a3d88b75": "b94db320ab820af9fb615654200359fe",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/de/09ffe9f345b4865e5961096a7337bc32fed4d5": "8998b2fb2e85e1d1b1be201346cb585b",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/66ee95e5767c97cfc745fe5cd35c4390915c37": "4827c6acdeba5e18533f01f79e553a9f",
".git/objects/1f/0850cfafec15d8184c472a9cbc3130dc5c35e0": "7db9caa30436fda37c907e07fe42d6f3",
".git/index": "b985953f03adef23464fcf113b50c73c",
".git/refs/heads/main": "07db1f4019788ea337adddb61b913169",
".git/refs/remotes/origin/main": "07db1f4019788ea337adddb61b913169",
".git/config": "158e106c5d19d370266c0994019af600",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"favicon.ico": "f55fc14a5aacfc43e10d62eae5df16a6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
