import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    lib: {
      name: 'AudioQuote',
      // the proper extensions will be added
      fileName: 'audioquote',
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/AudioQuote.tsx'),

      /*
       * XXX: Auto-injecting CSS
       *   We only care about 'es', right?
       *   Vite defaults to ['es', 'umd']
       *   but it fails when trying to build 'umd' because of 'import "./style.css";' (the output.intro we added).

      formats: ['es'],
       */
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react/jsx-runtime'],
      output: {
        /*
         * XXX: Auto-injecting CSS

        intro: 'import "./style.css";',
        */
      },
    },
  },
})
