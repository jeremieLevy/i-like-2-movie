import type { Actor } from './Actor.type'
import type { CrewMember } from './CrewMember.type'

export type MovieCredits = {
    id: number
    cast: Actor[]
    crew: CrewMember[]
}