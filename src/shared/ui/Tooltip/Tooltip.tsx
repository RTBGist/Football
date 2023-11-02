import classNames from "classnames";
import cls from './Tooltip.module.scss';
import {createPortal} from "react-dom";
import {useEffect, useState} from "react";
import {TooltipProps} from "./model/types";

export const Tooltip = (props: TooltipProps) => {
	const {className, isVisible = false, type, children} = props;
	const [showModal, setShowModal] = useState<boolean>(isVisible);

	useEffect(() => {
		setTimeout(() => {
			setShowModal(false);
		}, 5000)
	})

	return (
			<>
				{showModal && createPortal(
						<div className={classNames(cls.tooltip, className)}>{children}</div>,
						document.body
				)}
			</>
	);
};