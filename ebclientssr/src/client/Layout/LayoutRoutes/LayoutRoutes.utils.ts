export const buildCategoryPath = (categoryUrl: string): string => {
	return `/category/${categoryUrl}`;
};

export const buildHomePath = (): string => {
	return '/';
};

export const buildArticlePath = (articleUrl: string): string => {
	return `/article/${articleUrl}`;
};
