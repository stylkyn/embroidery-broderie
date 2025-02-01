export interface NavItem {
	label: string;
	subLabel?: string;
	items?: NavItem[];
	href?: string;
}
