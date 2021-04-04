import {PneumaticMachines, PneumaticMachinesText} from './PneumaticMachines'
import {Scarifiers, ScarifiersText} from './Scarifiers'
import {stackerRoller, stackerRollerText} from './StackerRoller'
import {suction, suctionText} from './Suction'
import {VacumDevice, VacumDeviceText} from './VacumDevice'
import {Wrapper, WrapperText} from './Wrapper'
import {vacuumCollector, vacuumCollectorText} from './vacuumCollector'


export const triloRender = [
    {
        cards: PneumaticMachines,
        text:PneumaticMachinesText,
        url: '1',
        nameOfProduct: 'ПНЕВМОМАШИНЫ ДЛЯ УХОДА ЗА ГАЗОННЫМИ ПОКРЫТИЯМИ'
    },
    {
        cards: VacumDevice,
        text:VacumDeviceText,
        url: '2',
        nameOfProduct: 'ВАКУУМНАЯ ПОДМЕТАЛЬНО УБОРОЧНАЯ МАШИНА'
    },
    {
        cards: vacuumCollector,
        text:vacuumCollectorText,
        url: '3',
        nameOfProduct: 'ВАКУУМНЫЕ СБОРЩИКИ'
    },
    {
        cards: Scarifiers,
        text:ScarifiersText,
        url: '4',
        nameOfProduct: 'ЧТО ПРЕДСТАВЛЯЮТ СОБОЙ СКАРИФИКАТОРЫ ДЛЯ ГАЗОНА?'
    },
    {
        cards: stackerRoller,
        text:stackerRollerText,
        url: '5',
        nameOfProduct: 'КЛАДЧИК РУЛОННОГО ГАЗОНА'
    },
    {
        cards: suction,
        text:suctionText,
        url: '6',
        nameOfProduct: 'УПАКОВЩИК ПОДДОНОВ'
    },
    {
        cards: Wrapper,
        text:WrapperText,
        url: '7',
        nameOfProduct: 'ВСАСЫВАЮЩИЕ КОНТЕЙНЕРЫ'
    },
]
