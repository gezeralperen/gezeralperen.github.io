'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "962b9e99c6fc32608e4953327a24433e",
"index.html": "b0b9893a96b1ea0e893d04c8abb4fecc",
"/": "b0b9893a96b1ea0e893d04c8abb4fecc",
"main.dart.js": "98dfeff5c2cd1fa0af50ac9213ab8bbf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c95560d9e8b7a0823254e01a0d2b008f",
".git/config": "c8810cf112aff8e9059a26bd7e734096",
".git/objects/0d/eb86a2e01a0379a784ceb924a0cd5fc27000cd": "e99e4162d0296bd76e06a57fe55714c9",
".git/objects/66/c6798bc9b9f64bd3e3a9e8f78b35306f41e1be": "6c695d11dba19354ebc1ce84a071b09d",
".git/objects/03/6dd64d25a1cfb41748b949ce788d4effcac9b9": "dbc40f16fdd61b68c4474ebe6c754c50",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/2b97769d6693a36c3693938b42f4e5bf038433": "983375df0ef57a6b5948e99345e24234",
".git/objects/56/b5ebbb0d48cbe5913afb7d425497e225294662": "820f0d33236a1a6d73019466cc1664ba",
".git/objects/51/887482848111d746db557f27fe557c1d2a31cc": "b1812c5e87eb6b80734ba606abc3e315",
".git/objects/67/565ab44ccf592fc80a95b6835764b6f7b08ddc": "df59324b283147a0afe5558b7bcad8ed",
".git/objects/67/1c17c76054cdea6ea5c0e4811a9b7b18dec3a9": "19d63e888138893a05f3e48c930d8787",
".git/objects/67/a11144a766d5f4f4d566a3dd705e7b3cbfb0ca": "d7792dcf2ea5ae2d1a7df4a2120698b2",
".git/objects/60/bad1b45d840279fbbbc5613d92f16aae5540de": "5c42fe3631443d85a964c4423bbc6ec3",
".git/objects/05/d5817baa71e377aef4a3171b2c29c3643ef352": "32c611481cec605eaab28c613e7ed8a5",
".git/objects/05/044f23ee260fa84b5945dfb592f89d70d872d9": "bdf80c158b30d12a1a062daa6669d799",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/d7/a57e39f3b0ba0c3292cfad81c7f1740573419d": "4afe366468051fd78605e176c7fac1d3",
".git/objects/a2/5f5f98205793c870b3a14eac8c2e15c4579879": "a06bb43f309ad916798294eb16a35b90",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c1/b2965f7fb120de1fdfab4ace4ead014636919e": "b717e2c2f94619a7cffabc39fe9d76c4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/87/d5711db3903fac70bd366d185abcda4795a069": "227f5252e914b28b68a01d964d7c10f7",
".git/objects/28/f578e2ed7a601ab4fa9df7b82f7eec07e5ea05": "262d9253708640c2e50d39d543317e67",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/96fc095a8d6a2f10e1dbf7812062aa756c9c71": "204fcbff4b043f52923db31ed6543cb5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/e40614edc74980a123e0b74d84f37d7a29ae49": "0407dd50769e005393907767261adce4",
".git/objects/9f/1cca3ab68dc67eb9cb3305e36f941ba9fd904f": "691a7dfb0d28ebf6f4fc628ea08afacd",
".git/objects/9f/8cb8c062903db86ff96097c53a1414952e0ffa": "091257220463aba4e480f6bd1de908b4",
".git/objects/07/b39803c9f180be4cbe4e79ba096e2c00849f63": "6c7c43838b94e028228b837a9e2e1ca2",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/5c/c5dffb38e775adf83f5a38565a67c154644059": "85ba9f11364e116849ce806dcf76285e",
".git/objects/06/e99313c6931eee4e5d3b793bd3f505f83e56e5": "96631a232a3348584fafdf8b78afcdc9",
".git/objects/06/fc5b00b6a99a6f4f66a31f237ecc151a0e388f": "d527eca84c8a223bd3df644a1cf6a0e8",
".git/objects/6c/ef736e1c942d8faa74dcd3ad59556ce98519d5": "9b68a3de06f9c1fa5b7bb92f04f45d59",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/a7/e7be4643078ea74b180b876474822cfd3f36b5": "8ff004d47553111c9693ec578b8ab416",
".git/objects/b6/297ad74ca796f185f93c16656a27e0b16d32c8": "fa3c47a61467b11ac59d818e5f760e88",
".git/objects/d5/11aa16ce7b3b8a7a2a2d31fc43953f9e04d20a": "eec7db6274e97fd73b8a8de49ae50654",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/a200af3684067a2ad62c663bd273f39cbbc104": "5293f250cc2f5a0c05f5ce572a1303d4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e6/fc0c9a39a9075c317899cf472b784e80c92f1b": "d53497c4ad41cf5ec3dac796f07eccc5",
".git/objects/f7/feacecda70fdbb1e3882939c2b980f942b64c4": "d0b873a60f439b86b5543bcb242a065b",
".git/objects/e7/0f118dba3bf4a9153b58157669f53b1dff44b7": "3c08242bf6d075ce6e3feb0a57540878",
".git/objects/f8/09f492221a1b48d330174161a70827a1b1422c": "c7d8a970f28309fd60458084533fce95",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/1243fa79389a3f133b68ec03c35eccad5d6a3a": "2f922463acc3c758fcf95c64f61c88a8",
".git/objects/49/2bc20817a32996a730b52d06f3fcf280d56cbd": "46259a56d678c9208c847a23c6d3dc2a",
".git/objects/49/9e3ccb9a0a42da29146a15837c7ce87599762a": "7be7e39c43e6c6ae6d589ef489327110",
".git/objects/40/eba3b863493a104d0e59cdea4083438b4488ff": "80f0016c95e5212826d87857c6ab35a3",
".git/objects/7f/464052f72bb85ff3571e8fef2b704ab32cf722": "0e4ac1ba74d305048ea520701ea6a540",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f033078c6f71707d3ff477f447672db7",
".git/logs/refs/heads/main": "75dcb4a6c302f6de60def09278969c8e",
".git/logs/refs/remotes/origin/main": "ece27e8601209be90b40ab72b4213d49",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c545ab2d7f8a73456a94c327b880c0bf",
".git/refs/remotes/origin/main": "c545ab2d7f8a73456a94c327b880c0bf",
".git/index": "9b328ec2affc007969c921b00fb9222e",
".git/COMMIT_EDITMSG": "00d7fe3db5f74bbbd798bca16d6880f5",
"assets/AssetManifest.json": "887f66f3db3898d8c62cf9355c96b6a4",
"assets/NOTICES": "13450826df6e1e6081377681883d011f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/dict.txt": "a527f4b91196ebd3b04d5bf1b60f8d92",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
