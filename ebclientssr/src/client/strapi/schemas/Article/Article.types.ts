export interface Article {
	id: string;
	short_name: string;
	url: string;
	content: string;
	type: 'page' | 'article';
	parent_article: Article;
	articles: Article[];
}
