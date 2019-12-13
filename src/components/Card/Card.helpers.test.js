import {getLabel} from './Card.helpers'

describe('Card helpers', () => {

    describe('getLabel function', () => {

        it('should exist', function () {
            expect(getLabel).toBeDefined()
        })

        const valueTests = [
            {
                value: 11,
                label: 'J'
            },{
                value: 12,
                label: 'Q'
            },{
                value: 13,
                label: 'K'
            },{
                value: 14,
                label: 'A'
            },
        ]

        valueTests.map(({value, label}) => {
            it(`should return label ${label} for value ${value}`, function () {
                expect(getLabel(value)).toEqual(label)
            })
        })

        const lowValueTests = [
            {
                value: 2,
                label: '2'
            },{
                value: 10,
                label: '10'
            }
        ]

        lowValueTests.map(({value, label}) => {
            it(`should return label ${label} for value ${value}`, function () {
                expect(getLabel(value)).toEqual(label)
            })
        })

    });

});