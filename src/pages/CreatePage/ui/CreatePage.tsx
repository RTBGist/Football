import {ClubForm} from "src/entities/Club";

interface CreatePageProps {
	className?: string
}

export const CreatePage = (props: CreatePageProps) => {
	const {className} = props;

	return (
			<ClubForm />
	);
};