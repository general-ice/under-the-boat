import {EquipmentCard, EquipmentCardType} from "./type";

const ipsumString = '\n' +
    'Suspendisse posuere at ipsum eget rhoncus. Nam aliquam consectetur malesuada. Integer congue enim a quam pretium, egestas condimentum nibh dignissim. Duis non justo porta mi lobortis accumsan id at lectus. Donec finibus non ipsum vitae vulputate. Ut finibus ex ac porta sollicitudin. Phasellus tellus massa, cursus in leo sit amet.'

const ipsumWords = ipsumString.split(' ')

const getRandomDescription = (wordCount: number = 3) =>
    Array.from(Array(wordCount).keys())
        .map(_ => ipsumWords[Math.round(Math.random() * ipsumWords.length)])
        .join(' ')

const equips: Array<Pick<EquipmentCard, 'type'>>  = [
    {
        type: EquipmentCardType.weapon,
    },
    {
        type: EquipmentCardType.resource
    },
    {
        type: EquipmentCardType.treasures
    }
]

const getRandomType = () => {
    const rnd = Math.round(Math.random() * 10)
    switch (rnd % 3) {
        case 0:
            return EquipmentCardType.weapon
        case 1:
            return EquipmentCardType.resource
        case 2:
            return EquipmentCardType.treasures
    }
}

// const manyEquips = Array.from(Array(40).keys())
//     .map((_, id) => ({
//         type: getRandomType(),
//         description: getRandomDescription(),
//         id
//     }))