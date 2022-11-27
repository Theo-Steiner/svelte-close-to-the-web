import Highlight from 'reveal.js/plugin/highlight/highlight';
import Markdown from 'reveal.js/plugin/markdown/markdown';
import RevealNotes from 'reveal.js/plugin/notes/notes';

// Import theme
import 'reveal.js/dist/theme/black.css';
import './reveal-overrides.css';

// Import CSS for plugins
import './solarized-hl.css';

export default {
  // App Config
  app: {
    name: 'Svelte - Close to the Web',
  },
  // Reveal Config
  revealConfig: {
    plugins: [Highlight, Markdown, RevealNotes],
    hash: true,
  },
};
