import { resolve as _resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const resolve = {
  alias: {
    '@': _resolve(__dirname, 'src'),
  },
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
};
