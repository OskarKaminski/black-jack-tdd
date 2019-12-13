export function getLabel(value){
    const cardLabels = {11: 'J', 12: 'Q', 13: 'K', 14: 'A'}
    return cardLabels[value] || value.toString()
}