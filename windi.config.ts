import { defineConfig } from 'vite-plugin-windicss';
import typography from 'windicss/plugin/typography';
import plugin from 'windicss/plugin';
import colors from 'windicss/colors';

const buttons = plugin(({ addComponents, theme }) => {
  addComponents({
    '.btn': {
      padding: '.25rem 0.5rem',
      borderRadius: '.25rem',
      fontWeight: '600',
      fontSize: '14px',
    },
    '.btn-blue': {
      backgroundColor: colors.blue[400],
      color: colors.white,
      '&:hover': {
        backgroundColor: colors.blue[500],
      },
    },
  });
});

const forms = plugin(({ addComponents }) => {
  addComponents({
    '.form-control': {
      border: '2px solid',
      borderColor: colors.blue[400],
      borderRadius: '0.375rem',
      padding: '0 1rem',
      color: colors.blue[400],
      /*  border border-2 border-blue-300
            text-blue-500
            rounded-md
            px-4 */
    },
  });
});

export default defineConfig({
  darkMode: 'class',
  plugins: [typography(), buttons, forms],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
      serif: ['Montserrat', 'ui-serif', 'Georgia'],
      mono: ['Fira Sans', 'ui-monospace', 'SFMono-Regular'],
    },
  },
});
