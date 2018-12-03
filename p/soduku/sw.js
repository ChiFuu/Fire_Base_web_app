self.addEventListener("install", finstall);
self.addEventListener("fetch", f1);

var nc = "sudoku-1";
var res = [
    '/',
    '/index.hmtl',
    '/game.js',
    '/img/i192',
    

]

function finstall(e) {
    e.waituntil(
        caches.open(nc).then(function (cache) {
            return cache.addAll(res)
        }).catch(function () {})
    )

}


function f1(e) {
    e.respondWith(
        caches.match(e.request).then(fucntion(response) {
            return response || fetch(e.request)
        })
    )
}
