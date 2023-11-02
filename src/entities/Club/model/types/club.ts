export interface Club {
	id?: string,
	name: string,
	description: string,
	logo: string
}

export interface ClubState {
	isLoading: boolean,
	error: string | undefined,
	data: Club[],
}

export interface ClubDetailState {
	isLoading: boolean,
	error: string | undefined,
	data: Club,
}