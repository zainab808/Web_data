'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2f986ba99ead6436a57713bac6a35e2d",
".git/config": "d6718b40884a3345fc3e63e19d5dc8fd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6096cebfe8ecef7e0880ab66a7a03d75",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "690bb048cf4b657bac339aad928867f9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c383b27e0526b9348fa278803eb4d3aa",
".git/logs/refs/heads/master": "c383b27e0526b9348fa278803eb4d3aa",
".git/logs/refs/remotes/origin/HEAD": "18a99e48fdc2da7306f86cd9581e579c",
".git/logs/refs/remotes/origin/master": "1c2d445c2a30ebfaa50e1a0419679cd5",
".git/objects/06/c82cd05939f3c8b6adbe16f64c17506151a020": "b3c7e3a2e111a1ce15d3fe02e2e454c6",
".git/objects/0b/60e851a824f68cf957142ded4597cc5b5d658e": "234a874580e09cdbbca0efc51edd9ab0",
".git/objects/0d/90a81fcae0ba80963b05c90c55e8ac683147b4": "a040e83f1536d6b39ad72b42e7ed5c1d",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/226379f34d6ff3c70db9587807ea08d1f3a5d5": "67b7f6e85020b6081e262453632b2f50",
".git/objects/12/7eba887edd71d000fc047f491d0b0772d134c3": "a2b382c47b7ca3d37f4a4a47c29737a5",
".git/objects/18/abcca4e7638635ab8a4f67b3e6de1430619b5d": "65297ce91ab8e2726fc3aaa4db7fb493",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/f20b61b17ab7b7f78c030549017249e45977dd": "2a6dabe3b658ef754cd539ad71433be9",
".git/objects/25/80cd13e670966e57be16a0d0cf1fffa60bb619": "bd91672f8343bc80ea68d0922894019b",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/a47311d7944cdb091bec3fe51227bf396ee3df": "79591b5925b8fef034f44932945a2c50",
".git/objects/2b/ee7d8bb60bdc1f1f486b340dde0e93095aec2a": "d851066c0020bfd3ad195555864f0565",
".git/objects/33/c352491c496af5a9dca2168ea8c96bd08a581c": "c46af4caf952787b50d8d5a99e680db0",
".git/objects/34/f87c42a6dd714677cb921f9a7bb72aaa94d556": "4bed5f5ee97982b638a3d42bf8446789",
".git/objects/37/24a8cb4557bebf01143a9933c629c1ceda6b51": "85c2a817769d9d19eb32ade2d16375a2",
".git/objects/3e/674c0d65f6ff8e0f6309525858c5369dc6c142": "07fe7755714f1dc51ede59e25ae8c170",
".git/objects/46/5c4222d4440ea13db0f16446a7b20eef238c87": "27a7b2453e8cfe9dadc641b475a5e5f4",
".git/objects/47/85aa15ae0f6d10f4b9578f3b76a351a241beda": "985161bea69979dbf31aadd7d4352ef5",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/66/3339550798c6e196b58458a1c8bea1eecd8250": "ae3ecd911bf96f2a064376033f4b46d9",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/7c/bb9124ee08ea37a597d5a4844064d53e2a5cfa": "2bfbc62438bfbf45c0730a39c2dbe7fc",
".git/objects/80/7d9d2fab67df7cdddb88265e67f7bc76c8eeeb": "67f6a9bae8c448761390573ed64ada13",
".git/objects/80/b2df244bd751a97e96daa9bab7ada99da3deae": "2a09087fe4a579a7b69276ea96d2ec6f",
".git/objects/83/76751123655899f11867715104d06071a8ccda": "0c6df5d201c48e73a786c3a2ce2a172f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ed6dc51b2e3e2ab1f89778087c00388a10f4cd": "26f8c25356be5bc333f0133aaf1d97e0",
".git/objects/8d/25962e0cc382ff4e975075bffee5b308b1f9df": "4dc21740b8ced312528334fa45eed107",
".git/objects/8f/f65152df30904f810d56e4565c81fcc86e3f30": "f01ca59d08de75a8c12f9244597ec578",
".git/objects/91/953abfa125105936c95538e0f33e74c99bcf06": "81e37c48fa5e4d004ec1bccca4f577c7",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/30d84d564033577d4e985b703e5df42e1884ca": "1298e80928d09609b301daac6bb7f676",
".git/objects/97/8e53a7de6f5f8d1febb9fede1df0a077c03b21": "777269cc5a91f945d075a30d97de0836",
".git/objects/a0/9f8966476fa1f6d44d4c1155175287f6bdcf09": "f5fed1cee5251a0d8ed91686d66c8986",
".git/objects/a5/802d0bead17ec5a811c923a100e0a3d18d0d1e": "5a3eae88111db33166cdfdff33797891",
".git/objects/a6/b713e9f6b6933141113ce2d8b80b5a344455cb": "de75d17e45aacbaecb6f03e16a529308",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b6/5ccd0806f1d22c33cea86ab4410f74b021e93b": "f29b099c9af4c27877d38761a4df9ac1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/8dcfdaf13c1b68ee6f0f92384f97cac994712a": "0bcc4fe6972f0ace6bd3e927a53043ba",
".git/objects/c8/ff21f0dd0ea708078fb81e352480da5e80c282": "2ebb4851840c080fc35ece002129c6bf",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/754bef765894df8b8906f9d09749dd0df8d6ed": "0207facf50b255743d437bd4f608f16b",
".git/objects/d3/f563c251fa7c5756a104844bab9a7d04a665bc": "2d3f2438031be6ae6e883328dfd3b065",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/764d26a3930448e6c145ce59931b1af95da616": "2b3ca4ef919740421581a1c28ec1f5c9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/4567aca32a9427d488a2cc948cbb9e7f68baaf": "ebb9d3e07d1417067452c6b50fba91f0",
".git/objects/e5/6341c47207e3ec1823b6e0eca3d9b4deadfc72": "d0c2c4843c5ff8f6155334f6c031dbe3",
".git/objects/e7/b50017fa206de4c6c73b546348bbc78d9f5ec7": "629d1cf24e7ef169dcc4ef1cd80c5862",
".git/objects/ea/44670195afa0782fc3f2fb28b9d606ed19f837": "0b4b045a573d5f0e9721e11e38393fbd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/c52629b7e1bcfb0789739221e740a4563313d5": "b1ae81f1d9fe79b25eb5a94f23fdeebf",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/50d728306312d98a7e0d958f75dcd1778da430": "69c886393703bdd8607773d9fde0cb72",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/master": "36de96b6f024d1d211fd66076ba5054e",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "36de96b6f024d1d211fd66076ba5054e",
"assets/AssetManifest.bin": "9bb15d0e5dad89aa5fb314e25fe17695",
"assets/AssetManifest.bin.json": "d7fb3a693b2bb0fac8fb20ae23ac2dbe",
"assets/AssetManifest.json": "21abf074a2168f2b2ae7fe43a846ab07",
"assets/flower/cap.png": "3f19a1d6eb263b200c84cbab5eec78c7",
"assets/flower/doll.png": "193f8dbdb4dd3989ff9f80fb1bfc9ea0",
"assets/FontManifest.json": "6f8ddfe72f9187f860e41087e5cad17c",
"assets/fonts/baloo.ttf": "3633c80679fe5ccb57ffdc242547836d",
"assets/fonts/MaterialIcons-Regular.otf": "67c637b446b919e7f4c421ec7aad2a69",
"assets/fonts/noto.ttf": "b72e420edb95cdf06e6e0a27bc0d964d",
"assets/fonts/raboto.ttf": "5b03341126c5c0b1d4db52bca7f45599",
"assets/NOTICES": "15a219e4dead34cac73938e2db553d74",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "b09f738fdc747ea827082dc099b70140",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "dcf7851751c850049f08f4870b419abe",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
