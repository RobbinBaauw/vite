import type { UserConfig } from 'vite'
import { jsPlugin } from './plugins/jsPlugin'
import { i18nTransform } from './custom-blocks/i18nTransform'
import * as Vugel from 'vugel'

const config: UserConfig = {
  alias: {
    alias: '/alias/aliased',
    '/@alias/': require('path').resolve(__dirname, 'alias/aliased-dir')
  },
  jsx: 'preact',
  minify: false,
  serviceWorker: !!process.env.USE_SW,
  plugins: [jsPlugin],
  vueTemplateCompilers: {
    vugel: Vugel
  },
  vueCustomBlockTransforms: { i18n: i18nTransform },
  optimizeDeps: {
    exclude: ['bootstrap', 'rewrite-unoptimized-test-package'],
    link: ['optimize-linked']
  },
  cssPreprocessOptions: {
    modifyVars: {
      'preprocess-custom-color': 'green'
    }
  }
}

export default config
