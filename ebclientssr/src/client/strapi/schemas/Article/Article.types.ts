export interface Article {
	id: string;
	name: string;
	content: string;
	parent_article?: Article;
	articles: Article[];
}
