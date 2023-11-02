import classNames from "classnames";
import cls from './Tooltip.module.scss';
import {createPortal} from "react-dom";
import {useEffect, useState} from "react";
import {TooltipProps} from "./model/types";

export const Tooltip = (props: TooltipProps) => {
	const {className, isVisible = false, type, children, timeout = 7000} = props;
	const [showModal, setShowModal] = useState<boolean>(false);

	useEffect(() => {
		if(isVisible) {
			setShowModal(true)
		}

		setTimeout(() => {
			setShowModal(false);
		}, timeout)
	}, [])

	return (
			<>
				{createPortal(
						<div onClick={() => setShowModal(false)} className={classNames(cls.tooltip,  showModal ? cls.visible : '', cls[type])}>{children}</div>,
						document.body
				)}
			</>
	);
};