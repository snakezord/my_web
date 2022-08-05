const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'https://mywebcms.herokuapp.com' : 'https://mywebcms.herokuapp.com';
