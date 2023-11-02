import classNames from "classnames";
import cls from './ContentContainer.module.scss';

interface ContentContainerProps {
	className?: string
	children: React.ReactNode
}

export const ContentContainer = (props: ContentContainerProps) => {
	const {className, children} = props;

	return (
			<div className={classNames(cls.contentcontainer, className)}>
				{children}
			</div>
	);
};