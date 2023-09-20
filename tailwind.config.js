module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/lib/**/*.{js,ts}',
    './node_modules/flowbite/lib/**/*.{js,ts}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
    },
    fontFamily: {
      wix: 'Wix Madefor Display',
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      body: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    colors: {
      'gray-50': '#F9FAFB',
      'gray-100': '#F3F4F6',
      'gray-200': '#E5E7EB',
      'gray-300': '#D1D5DB',
      'gray-400': '#9CA3AF',
      'gray-500': '#6B7280',
      'gray-600': '#4B5563',
      'gray-700': '#374151',
      'gray-800': '#1F2A37',
      'gray-900': '#111928',
      'primary-50': '#EEEEEE',
      'primary-100': '#E0E0E0',
      'primary-200': '#C4C4C4',
      'primary-300': '#A8A8A8',
      'primary-400': '#8C8C8C',
      'primary-500': '#707070',
      'primary-600': '#545454',
      'primary-700': '#383838',
      'primary-800': '#1C1C1C',
      'primary-900': '#000000',
    },
    extend: {
      display: ['group-hover'],
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')],
}
