# Based on

[Article on Codrops](https://tympanus.net/codrops/?p=69521)

[Demo](http://tympanus.net/Tutorials/DiceRoller/)

## Installation

No package manager / build system is needed.
You can run the page as it is on local server (any web server, really).

The page is using the following libs:

1) Three.js + their addons OrbitControls and mergeBufferGeometries.
   https://threejs.org/docs/#manual/en/introduction/Installation

2) cannon-es
   https://github.com/pmndrs/cannon-es

Both tools are added as JS modules via CDN with import map. Other installation options are available (see the links above)

## SVGS
https://thenounproject.com/

## Infra
Squarespace Domain
Cloudflare DNS

Github Actions -> Minifies css and js -> Publishes to `gh-pages` branch
Cloudflare Pages looks at the `gh-pages` branch and publishes automatically

https://virtualsexdice.com