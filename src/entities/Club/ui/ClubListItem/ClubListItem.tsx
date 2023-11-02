import classNames from "classnames";
import cls from './ClubListItem.module.scss';
import {Club} from "../../model/types/club";
import {NavLink} from "react-router-dom";
import {Skeleton} from "src/shared/ui/Skeleton/Skeleton";


interface ClubListItemProps {
	className?: string,
	club: Club;
	isLoading?: boolean;
	isLink?: boolean
}

export const ClubListItem = (props: ClubListItemProps) => {
	const {className, club, isLoading = false, isLink = false} = props;
	const content = () => {
		return (
				<>
					<div className={classNames(cls.logoWrap)}>
						<img src={club.logo} alt="logo"/>
					</div>
					<span className={classNames(cls.itemHdr)}>{club.name}</span>
					<span className={classNames(cls.itemDescription)}>{club.description}</span>
				</>
		)
	}

	if(isLoading) {
		return (
				<div className={classNames(cls.clublistitem, className)}>
					<Skeleton className={classNames(cls.skeletonLogo)} width={180} height={182} border='50%'></Skeleton>
					<Skeleton className={classNames(cls.skeletonHdr)} width='100%' height={26}></Skeleton>
					<Skeleton className={classNames(cls.skeletonDescr)} width='100%' height={96}></Skeleton>
				</div>
		)
	}

	return (
			<>
				{isLink ? (
						<NavLink to={`club/${club.id}`} className={classNames(cls.clublistitem, className)}>
							{content()}
						</NavLink>
				) : (
						<div className={classNames(cls.clublistitem, className)}>
							{content()}
						</div>
				)}
			</>

	);
};