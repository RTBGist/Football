import classNames from "classnames";
import cls from './ClubForm.module.scss';
import {useEffect, useState} from "react";
import {Club} from "../../model/types/club";
import {ContentContainer} from "src/shared/ui/ContentContainer/ContentContainer";
import {ClubListItem} from "../ClubListItem/ClubListItem";
import {addClub} from "src/pages/CreatePage/model/services/addClub";
import {useAppDispatch} from "src/shared/libs/hooks/useAppDispatch";
import {updateClub} from "src/pages/CreatePage/model/services/updateClub";
import {deleteClub} from "src/pages/CreatePage/model/services/deleteClub";
import {Skeleton} from "src/shared/ui/Skeleton/Skeleton";
import {NavLink} from "react-router-dom";


interface ClubFormProps {
	className?: string;
	editModeProp?: boolean;
	clubData?: Club;
	isLoading?: boolean;
}

export const ClubForm = (props: ClubFormProps) => {
	const {className, editModeProp = true, clubData, isLoading = false} = props;
	const dispatch = useAppDispatch();
	const [editMode, setEditMode] = useState(editModeProp);
	const [clubForm, setClubForm] = useState<Club>({
		name: '',
		description: '',
		logo: ''
	});
	const isNewClub = !clubForm.id;

	useEffect(() => {
		if(clubData) {
			setClubForm(() => {
				return {
					logo: clubData?.logo,
					description: clubData?.description,
					name: clubData?.name,
					id: clubData?.id
				}
			})
		}
	}, [clubData])

	const onChangeForm = (e) => {
		setClubForm(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	const onSaveClub = () => {
		if(isNewClub) {
			dispatch(addClub(clubForm))
		} else {
			dispatch(updateClub(clubForm))
		}
	}

	const onDeleteClub = () => {
		dispatch(deleteClub(clubForm))
	}

	if(isLoading) {
		return (
				<ContentContainer className={classNames(cls.clubForm)}>
					<ClubListItem club={clubForm} isLoading={isLoading} />

					<div className={classNames(cls.skeletonBtnWrap)}>
						<Skeleton width='200px' height={31}></Skeleton>
					</div>
				</ContentContainer>
		)
	}

	if(!editMode) {
		return (
				<ContentContainer className={classNames(cls.clubForm, className)}>
					<NavLink to={'/'}>Назад</NavLink>
					<ClubListItem club={clubForm} />

					<div className={classNames(cls.clubBtnWrap)}>
						<button onClick={onSaveClub}>Сохранить</button>
						<button onClick={() => setEditMode(true)}>Изменить</button>
						{isNewClub ? null : <button onClick={onDeleteClub}>Удалить</button>}
					</div>
				</ContentContainer>
		)
	}

	return (
			<ContentContainer className={classNames(cls.clubForm, className)}>
				<div className={classNames(cls.clubInpWrap)}>
					<input type="text" name="name" placeholder="Имя клуба" value={clubForm.name} onChange={onChangeForm}/>
				</div>
				<div className={classNames(cls.clubInpWrap)}>
					<input type="text" name="description" value={clubForm.description} onChange={onChangeForm} placeholder="Описание"/>
				</div>
				<div className={classNames(cls.clubInpWrap)}>
					<input type="text" name="logo" value={clubForm.logo} onChange={onChangeForm} placeholder="Ссылка на лого"/>
				</div>

				<div className={classNames(cls.clubBtnWrap)}>
					<button onClick={onSaveClub}>Сохранить</button>
					<button onClick={() => setEditMode(false)}>Посмотреть</button>
					{isNewClub ? null : <button onClick={onDeleteClub}>Удалить</button>}
				</div>
			</ContentContainer>
	);
};