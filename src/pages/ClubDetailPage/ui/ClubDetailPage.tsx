import classNames from "classnames";
import cls from './ClubDetailPage.module.scss';
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {ContentContainer} from "../../../shared/ui/ContentContainer/ContentContainer";
import {ClubForm} from "../../../entities/Club";
import {useAppDispatch} from "../../../shared/libs/hooks/useAppDispatch";
import {getClubById} from "../model/services/getClubById";
import {useSelector} from "react-redux";
import {getClub, getClubIsLoading} from "../model/selectors/getClub";


interface ClubDetailPageProps {
	className?: string
}

export const ClubDetailPage = (props: ClubDetailPageProps) => {
	const {className} = props;
	const {id} = useParams();
	const dispatch = useAppDispatch();
	const clubData = useSelector(getClub);
	const clubDataIsLoading = useSelector(getClubIsLoading);


	useEffect(() => {
		dispatch(getClubById(id))
	}, [id])

	return (
			<ContentContainer className={classNames(cls.clubdetailpage, className)}>
				<ClubForm editModeProp={false} clubData={clubData} isLoading={clubDataIsLoading}/>
			</ContentContainer>
	);
};