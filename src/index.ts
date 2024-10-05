import { cuboid, cylinder } from '@jscad/modeling/src/primitives'
import { subtract } from '@jscad/modeling/src/operations/booleans'

export const main = () => {
    const plane = cuboid({ size: [100, 100, 20] })
    const hole = cylinder({ radius: 10, height: 40 })
    const planeWithHole = subtract(plane, hole)

    return planeWithHole
}
