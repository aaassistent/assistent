export interface UserStateDrinking {
    type: 'drinking';
}

type UserState = UserStateDrinking;

interface User {
    id: string;
    states: UserState[];
}
