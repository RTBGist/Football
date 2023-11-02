import classNames from "classnames";
import cls from './ClubList.module.scss';
import {Club} from "../../model/types/club";
import {ClubListItem} from "../ClubListItem/ClubListItem";


interface ClubListProps {
	className?: string;
	clubList: Club[];
	isLoading: boolean;
}

export const ClubList = (props: ClubListProps) => {
	const {className, clubList, isLoading} = props;

	return (
			<div className={classNames(cls.clublist, className)}>
				{clubList.map((club) => (
						<ClubListItem isLoading={isLoading} club={club} key={club.id} />
				))}
			</div>
	);
};