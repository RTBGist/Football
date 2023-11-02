export enum TooltipType {
	ERROR = 'ERROR',
	SUCCESS = 'SUCCESS'
}

export interface TooltipProps {
	type: TooltipType,
	isVisible: boolean,
	className?: string,
	children: React.ReactChildren
}