self.addEventListener('install', e=>{
    const recursos = caches.open("Boveda01").then(cache=>{
        cache.add('/'),
        cache.add('index.html'),
        cache.add('manifest.json'),
        cache.add('css/stylesheet.css'),
        cache.add('css/css/bootstrap.min.css'),
        cache.add('css/css/bootstrap.css'),
        cache.add('js/js/bootstrap.min.js'),
        cache.add('js/js/bootstrap.js'),
        cache.add('js/Scripts.js'),
        cache.add('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
    });
    e.waitUntil(recursos);
    const recursos2 = caches.open("Boveda02").then(cache=>{
        cache.add('/'),
        cache.add('Resources/Anabelle.jpg'),
        cache.add('Resources/bg.jpg'),
        cache.add('Resources/Cars.jpg'),
        cache.add('Resources/Default.jpg'),
        cache.add('Resources/favicon.ico'),
        cache.add('Resources/Halo.jpg'),
        cache.add('Resources/Shrek.jpg'),
        cache.add('Resources/wallE.jpg');
    });
    e.waitUntil(recursos2);
})
// self.addEventListener('fetch', e=>{
//     e.respondWith(caches.match(e.request));
// })

function print(string){
    console.log(string);
}


//Tarea: Hacer un 404 personalizado
//Tarea 2: Cable USB con telefono
//Tarea 3: git hub y git page
//Tarea 4: Iconos de diversos tamaños: 
/*
32
48 
64
72
*/


//Estrategia 2
// self.addEventListener('fetch', e => {
//     const respuesta = caches.match(e.request)
//         .then(res => {
//             if (res) return res;
//             console.log('No existe el recurso de caché ->', e.request.url);
//             return fetch(e.request).then(newResp => {
//                 caches.open("Boveda02")
//                     .then(cache => {
//                         cache.put(e.request, newResp)
//                     });
//             });
//         });
//     e.respondWith(respuesta);
// })


//Estrategia 3
// let a = document.getElementById("a");
// a.innerHTML
let BovedaAUsar = "Boveda01";
let aux = "";
self.addEventListener('fetch', e => {
    const respuesta = fetch(e.request).then(newResp => {
        aux = ((newResp.url).split('/'))[((newResp.url).split('/')).length - 1];
        aux = (aux.split('.'))[1];
        console.log(aux);
        caches.open("Boveda02").then(cache => {
            cache.put(e.request, newResp)
        });
        return newResp.clone();
    }).catch(err =>{
        return caches.match(e.request);
    });
    e.respondWith(respuesta);
})

/*
Est0 Only Net (Solo internet, online)
Est1 Only Cache (Unicamente se depende del cache, si se borra entonces no hay datos)
Est2 First cache, then network (Checa si hay cache, si algo falla se va a internet y se respalda)
Est3 First network, then cache (Primero checa internet y respalda, luego checa el cache si no hay net)
*/
