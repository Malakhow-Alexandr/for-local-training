function r(r){return fetch(`http://localhost:3000/video-cards/${r}`).then((r=>{if(!r.ok)throw new Error;return r.json()}))}fetch("http://localhost:3000/video-cards").then((r=>{if(!r.ok)throw new Error;return r.json})),r(2),r(4);
//# sourceMappingURL=index.059c7e9d.js.map
