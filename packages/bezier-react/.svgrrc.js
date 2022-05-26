const svgElements = [
  'a',,
  'animate',
  'animateMotion',
  'animateTransform',
  'audio',
  'canvas',
  'circle',
  'clipPath',
  'defs',
  'desc',
  'discard',
  'ellipse',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDistantLight',
  'feDropShadow',
  'feFlood',
  'feFuncA',
  'feFuncB',
  'feFuncG',
  'feFuncR',
  'feGaussianBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'fePointLight',
  'feSpecularLighting',
  'feSpotLight',
  'feTile',
  'feTurbulence',
  'filter',
  'foreignObject',
  'g',
  'iframe',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'metadata',
  'mpath',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'script',
  'set',
  'stop',
  'style',
  'switch',
  'symbol',
  'text',
  'textPath',
  'title',
  'tspan',
  'unknown',
  'use',
  'video',
  'view',
]

module.exports = {
  "icon": true,
  "typescript": true,
  "singleQuote": true,
  "prettier": true,
  "prettierConfig": {
    "dimensions": false,
    "semi": false,
    "endOfLine": "lf",
    "singleQuote": true
  },
  "jsx": {
    babelConfig: {
      plugins: [
        [
          '@svgr/babel-plugin-remove-jsx-attribute',
          {
            elements: svgElements,
            attributes: ['fill'],
          },
        ],
        [
          '@svgr/babel-plugin-add-jsx-attribute',
          {
            elements: svgElements,
            attributes: [
              {
                name: 'fill',
                value: 'currentColor',
                position: 'start',
              }
            ],
          }
        ]
      ],
    },
  }
}