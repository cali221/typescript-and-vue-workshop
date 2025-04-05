import type { restaurantStatusList, dietList } from "./constants"
export type Restaurant = {
    id: string
    name: string
    address: string
    website: string
    status: Status
    diet?: Diet // optional
}

export type Dish = {
    id: string
    name: string
    status: Status
    diet?: Diet // optional
}


// | is the union operator
type Status = typeof restaurantStatusList[number]

type Diet = typeof dietList[number]