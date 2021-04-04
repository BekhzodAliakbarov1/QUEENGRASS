import {SeedersSportFields as SeedersSportFields1, SeedersSportFieldsText as SeedersSportFieldsText1} from './5x2'
import {SeedersSportFields, SeedersSportFieldsText} from './7x2'
import  {hideoutJudging, hideoutJudgingText}  from  './HideoutJudging'
import  {hideoutTeam, hideoutTeamText}  from  './HideoutTeam'
import  {miniFootball, miniFootballText}  from  './MiniFootball'
import  {regbyGoal, regbyGoalText}  from  './RegbyGoal'

export const harrodRender = [
    {
        cards: SeedersSportFields1,
        text:SeedersSportFieldsText1,
        url: '1',
        nameOfProduct: 'ФУТБОЛЬНЫЕ ВОРОТА 7,32 M Х 2,44 М'
    },
    {
        cards: SeedersSportFields,
        text:SeedersSportFieldsText,
        url: '2',
        nameOfProduct: 'ФУТБОЛЬНЫЕ ВОРОТА 5 М Х 2 М'
    },
    {
        cards: miniFootball,
        text:miniFootballText,
        url: '3',
        nameOfProduct: 'МИНИ-ФУТБОЛ'
    },
    {
        cards: hideoutTeam,
        text:hideoutTeamText,
        url: '4',
        nameOfProduct: 'УКРЫТИЯ ДЛЯ КОМАНД'
    },
    {
        cards: hideoutJudging,
        text:hideoutJudgingText,
        url: '5',
        nameOfProduct: 'УКРЫТИЯ ДЛЯ СУДЕЙСТВА'
    },
    {
        cards: regbyGoal,
        text:regbyGoalText,
        url: '6',
        nameOfProduct: 'ВОРОТА РЕГБИЙНЫЕ'
    },

]
