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
