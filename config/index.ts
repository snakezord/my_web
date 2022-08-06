const dev = process.env.NODE_ENV !== 'production';

export const getImageUrl = (url: string) => {
	if (url.startsWith('https://')) {
		return url
	} else {
		return `${server}${url}`
	}
}

export const server = dev ? 'http://localhost:1337' : 'https://mywebcms.herokuapp.com';
