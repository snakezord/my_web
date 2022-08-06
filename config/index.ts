const dev = process.env.NODE_ENV !== 'production';

export const getImageUrl = (url: string) => {
	if (url.startsWith('https://')) {
		return url
	} else {
		return `${server}${url}`
	}
}

export const server = dev ? 'https://mywebcms.herokuapp.com' : 'https://mywebcms.herokuapp.com';
