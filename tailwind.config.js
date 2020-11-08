module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
			fontFamily: {
				sans: [
					'source sans pro',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
				serif: [
					'Georgia',
					'Cambria',
					'"Times New Roman"',
					'Times',
					'serif',
				],
				mono: [
					'Menlo',
					'Monaco',
					'Consolas',
					'"Liberation Mono"',
					'"Courier New"',
					'monospace',
				],
			},
			backgroundOpacity: {
				'95': '0.95',
			},
		},
		fontSize: {
			'xs': '.75rem',
			'sm': '.875rem',
			'tiny': '.875rem',
			'base': '1rem',
			'lg': '1.125rem',
			'xl': '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
			'8xl': '6rem',
		},

  },
  variants: {},
  plugins: [
	{
		resolve: 'gatsby-background-image-es5',
		options: {
		  // add your own characters to escape, replacing the default ':/'
		  specialChars: '/:',
		},
	  },
  ],
}
