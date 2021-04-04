import {Aeration, AerationText} from './Aeration'
import {synthetic, syntheticText} from './AutoMobile'
import {surface, surfaceText} from './Cleaning'
import {seeder, seederText} from './Seeder'
import {seven, sevenText} from './Seven'
import {surface1, surface1Text} from './Suface'
import {synthetic1, synthetic1Text} from './Synthetic'


export const redeximRender = [
    {
        cards: Aeration,
        text:AerationText,
        url: '1',
        nameOfProduct: 'АЭРАЦИЯ ПОВЕРХНОСТЕЙ'
    },
    {
        cards: surface1,
        text:surface1Text,
        url: '2',
        nameOfProduct: 'ПОВЕРХНОСТНОЕ ПЕСКОВАНИЕ / ВНЕСЕНИЕ ЗАПОЛНИТЕЛЯ'
    },
    {
        cards: seeder,
        text:seederText,
        url: '3',
        nameOfProduct: 'ПОСЕВ / ПОДСЕВ / СЕЯЛКИ'
    },
    {
        cards: surface,
        text:surfaceText,
        url: '4',
        nameOfProduct: 'РЕНОВАЦИЯ ПОЛЯ. УБОРКА И ОБСЛУЖИВАНИЕ'
    },
    {
        cards: synthetic1,
        text:synthetic1Text,
        url: '5',
        nameOfProduct: 'ОБОРУДОВАНИЕ ДЛЯ ИСКУССТВЕННЫХ ПОКРЫТИЙ'
    },
    {
        cards: synthetic,
        text:syntheticText,
        url: '6',
        nameOfProduct: 'САМОХОДНЫЙ ТЯГАЧ'
    },
    {
        cards: seven,
        text:sevenText,
        url: '7',
        nameOfProduct: 'ЗАПАСНЫЕ ЧАСТИ'
    },
]
