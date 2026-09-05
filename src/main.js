import './style.css';
import { init } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
  init().catch((error) => {
    console.error('[ERP Guidance] Init failed:', error);
  });
});
