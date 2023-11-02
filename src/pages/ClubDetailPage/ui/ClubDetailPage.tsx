import classNames from "classnames";
import cls from './ClubDetailPage.module.scss';
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {ContentContainer} from "../../../shared/ui/ContentContainer/ContentContainer";
import {ClubForm} from "../../../entities/Club";
import {useAppDispatch} from "../../../shared/libs/hooks/useAppDispatch";
import {getClubById} from "../model/services/getClubById";
import {useSelector} from "react-redux";
import {getClub, getClubError, getClubIsLoading} from "../model/selectors/getClub";
import {Tooltip} from "../../../shared/ui/Tooltip/Tooltip";
import {TooltipType} from "../../../shared/ui/Tooltip/model/types";


interface ClubDetailPageProps {
	className?: string
}

export const ClubDetailPage = (props: ClubDetailPageProps) => {
	const {className} = props;
	const {id} = useParams();
	const dispatch = useAppDispatch();
	const clubData = useSelector(getClub);
	const clubDataIsLoading = useSelector(getClubIsLoading);
	const clubDataError = useSelector(getClubError);


	useEffect(() => {
		dispatch(getClubById(id))
	}, [id])

	return (
			<>
				<ContentContainer className={classNames(cls.clubdetailpage, className)}>
					<ClubForm editModeProp={false} clubData={clubData} isLoading={clubDataIsLoading}/>
				</ContentContainer>

				{clubData && (
						<Tooltip type={TooltipType.SUCCESS} isVisible timeout={3000}>
							<>
								Успешно!
							</>
						</Tooltip>
				)}

				{clubDataError && (
						<Tooltip type={TooltipType.ERROR} isVisible>
							<>
								{clubDataError}
							</>
						</Tooltip>
				)}
			</>
	);
};