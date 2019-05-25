export function method() {
    return {};
}


export interface UserStateDrinking {
    type: 'drinking'
}

type UserState = UserStateDrinking

interface User {
    name: string;
    states: UserState
}