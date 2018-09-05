'use strict';

module.exports = {
	theme: {
		slug: 'xiusrex',
		name: 'Xius Rex', /* Text-domain for any translation strings */
		author: 'Vanja Anderson'
	},
	dev: {
		browserSync: {
			live: true,
			proxyURL: 'wprig.test:8888',
			bypassPort: '8181'
		},
		browserslist: [ // See https://github.com/browserslist/browserslist
			'> 1%',
			'last 2 versions'
		],
		debug: {
			styles: false, // Render verbose CSS for debugging.
			scripts: false // Render verbose JS for debugging.
		}
	},
	export: {
		compress: true
	}
};
