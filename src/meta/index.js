import { createMetaManager, defaultConfig } from 'vue-meta/dist/vue-meta.esm-browser.js';

export default createMetaManager(false, {
    ...defaultConfig,
    meta: {
        name: 'meta',
        nameless: true
    }
});
