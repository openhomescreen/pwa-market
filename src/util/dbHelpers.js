import { update } from 'idb-keyval'

export const getManifest = (src) => {
  return new Promise((resolve, reject) => {
    fetch('https://raw.githubusercontent.com/openhomescreen/pwa-market/main/data/manifests/'+encodeURIComponent(btoa(src))+'.json')
    .then(resp => {
      resp.json().then(data => {
          // sort the icons to give three priorities
          // 1. maskable
          // 2. in the sweet spot (>=64px && <=192px) (too large or too small is bad)
          // 3. size (larger is better)
          if(Object.prototype.toString.call(data.icons) == '[object Array]') {
            data.icons.sort((a, b) => {
              if((a.purpose && a.purpose == 'maskable') && (!b.purpose || b.purpose != 'maskable')) return -1
              if((b.purpose && b.purpose == 'maskable') && (!a.purpose || a.purpose != 'maskable')) return 1

              let aSize = parseInt(a.sizes.split('x')[0]);
              let bSize = parseInt(b.sizes.split('x')[0]);
              if(aSize > bSize) return -1
              if(bSize > aSize) return 1
              return 0
            })
          }

          resolve(data)
      })
      .catch(reason => {
        reject(reason)
      })
    })
    .catch(reason => {
      reject(reason)
    })
  });
}