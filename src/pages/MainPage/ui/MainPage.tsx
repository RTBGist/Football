import {useEffect} from "react";
import {fetchAllClubs} from "../model/services/fetchAllClubs";
import {ContentContainer} from "src/shared/ui/ContentContainer/ContentContainer";
import {ClubList} from "src/entities/Club/ui/ClubList/ClubList";
import {useAppDispatch} from "src/shared/libs/hooks/useAppDispatch";
import {getAllClubs, getAllClubsError, getAllClubsIsLoading} from "../model/selectors/getAllClubs";
import {useSelector} from "react-redux";
import {Tooltip} from "src/shared/ui/Tooltip/Tooltip";
import {TooltipType} from "src/shared/ui/Tooltip/model/types";

interface MainPageProps {
	className?: string
}

export const MainPage = (props: MainPageProps) => {
	const {className} = props;
	const dispatch = useAppDispatch();
	const clubsList = useSelector(getAllClubs);
	const clubsListIsLoading = useSelector(getAllClubsIsLoading);
	const clubsListError = useSelector(getAllClubsError);

	useEffect(() => {
		dispatch(fetchAllClubs())
	}, [])

	return (
			<>
				<ContentContainer>
					<ClubList clubList={clubsList} isLoading={clubsListIsLoading} isLink />
				</ContentContainer>

				{clubsList.length ? (
						<Tooltip type={TooltipType.SUCCESS} isVisible timeout={3000}>
							<>
								Успешно!
							</>
						</Tooltip>
				) : null}

				{clubsListError && (
						<Tooltip type={TooltipType.ERROR} isVisible>
							<>
								{clubsListError}
							</>
						</Tooltip>
				)}
			</>
	);
};