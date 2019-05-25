import {method} from '../src/backend';

describe('start', () => {
    it('Работа с пьяным', () => {

        const bus: Bus = createBus()

        const arturId = bus.addUser()
        const alexanderId = bus.addUser()
        const arturBot = bot(arturId)
        const alexanderBot = bot(alexanderId)

        bus.subscribe(arturBot)
        bus.subscribe(alexanderBot)

        bus.send(alexanderId, 'Я бухаю')
        wait(30)
        bus.assertMessage(alexanderBot, alexanderId, 'Всё в порядке?')
    });



});

interface Bus {
    addChannel(channel: any)

    addUser(): number

    send(id: number, text: string)
    assertMessage(from: number, to: number, message: string)

    subscribe(callback: (text: string, author: number) => void): number
}


function bot(onwerId): any {

}


function createBus(): any {
}

function wait(time: number) {

}


function method