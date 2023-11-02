export enum TooltipType {
	ERROR = 'error',
	SUCCESS = 'success'
}

export interface TooltipProps {
	type: TooltipType,
	isVisible: boolean,
	className?: string,
	children: React.ReactChildren,
	timeout?: number
}