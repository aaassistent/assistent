export function method(message) {

    if (isDrinkingMessage(message)) {
        db.putJob(drinkingNotify)
    }


    return {};

    function drinkingNotify() {

    }
}



function makeBot(sendMessage) {
    let isAskedAllright = false

    return (message) => {

        if (isYaBuhayu(message)) {
            isDrinking = true
            setTimeout(() => {
                isAskedAllright = true
                sendMessage('Всё в порядке?')
            }, 30*1000*60)
        }

        if (isAskedAllright) {
            if (isAllright(message)) {
                sendMessage('Отлично!')
            } else {
                sendMessage('Нужна помощь!',arthurId)
            }
        }
    }
}

function* coreScenario() {
    yield runScenario(drinkingScenario)
    yield stopScenario(drinkingScenario)
}

function* drinkingScenario() {
    yield waitMessage(isYaBuhayu)
    yield wait(30)
    yield sendMessage('Всё в порядке?')

    const message = yield waitMessage()

    if (isAllright(message)) {
        yield sendMessage('Ништяк')
    } else {
        yield sendMessage('Нужна помощь!',arthurId)
    }
}

function* tripScenario() {
    yield waitMessage(yaHochuVIspaniu)
    yield wait(30)
    yield sendMessage('Всё в порядке?')

    const message = yield waitMessage()

    if (isAllright(message)) {
        yield sendMessage('Ништяк')
    } else {
        yield sendMessage('Нужна помощь!',arthurId)
    }
}




interface Bot {

}




export interface UserStateDrinking {
    type: 'drinking'
}

type UserState = UserStateDrinking

interface User {
    name: string;
    states: UserState
}