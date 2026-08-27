export type MeterKey = 'hull' | 'rift' | 'crew' | 'loot'
export type ChoiceKind = 'stealth' | 'assault' | 'stabilize'

export type Meters = Record<MeterKey, number>

export type RiftChoice = {
  label: string
  detail: string
  result: string
  kind: ChoiceKind
  effects: Partial<Meters>
}

export type RiftEncounter = {
  id: string
  sector: string
  title: string
  description: string
  choices: RiftChoice[]
}

export type RunLogEntry = {
  encounter: RiftEncounter
  choice: RiftChoice
  result: string
}

export type RiftRunState = {
  meters: Meters
  stage: number
  encounter: RiftEncounter | null
  log: RunLogEntry[]
  complete: boolean
  failed: boolean
  rank: string
  ending: string
}

const MAX_STAGES = 3

const encounters: RiftEncounter[] = [
  {
    id: 'leviathan',
    sector: 'Brass Meridian',
    title: 'The Clockwork Leviathan',
    description:
      'A continent-sized machine wakes beneath the brass sea. Its aperture tracks your rift signature and begins to charge.',
    choices: [
      {
        label: 'Ghost the aperture',
        detail: 'Cut every lamp and drift through its blind geometry.',
        result: 'The leviathan fires at your fading wake while the crew charts its hidden vaults.',
        kind: 'stealth',
        effects: { rift: -7, crew: 4, loot: 10 },
      },
      {
        label: 'Fire a full broadside',
        detail: 'Break the targeting crown before it finishes charging.',
        result: 'The crown shatters into valuable brass constellations, but the return fire bites deep.',
        kind: 'assault',
        effects: { hull: -16, crew: -4, loot: 20 },
      },
      {
        label: 'Tune to its heartbeat',
        detail: 'Match the engine pulse and pass as another ancient mechanism.',
        result: 'For one impossible minute, ship and leviathan breathe as the same machine.',
        kind: 'stabilize',
        effects: { rift: 13, crew: 6, loot: 3 },
      },
    ],
  },
  {
    id: 'mirror-storm',
    sector: 'The Glass Tide',
    title: 'A Storm of Other Selves',
    description:
      'Mirror lightning reveals a hundred versions of your ship, each insisting that it is the original and you are the echo.',
    choices: [
      {
        label: 'Sail between reflections',
        detail: 'Follow the one wake that casts no shadow.',
        result: 'The false fleets peel away. One reflection leaves a map scratched into your hull.',
        kind: 'stealth',
        effects: { hull: -5, rift: 8, loot: 8 },
      },
      {
        label: 'Challenge every double',
        detail: 'Make the storm decide which ship deserves to remain.',
        result: 'Cannon thunder settles the argument, though several crew members remember dying elsewhere.',
        kind: 'assault',
        effects: { hull: -13, crew: -9, loot: 18 },
      },
      {
        label: 'Anchor to a true memory',
        detail: 'Have the crew speak the same story until reality agrees.',
        result: 'The shared memory becomes a lighthouse and the mirror storm folds around it.',
        kind: 'stabilize',
        effects: { rift: 15, crew: 10, loot: -2 },
      },
    ],
  },
  {
    id: 'ghost-armada',
    sector: 'The Unfinished War',
    title: 'The Ghost Armada',
    description:
      'Warships erased from history surround the rift. Their admiral offers safe passage in exchange for one living name.',
    choices: [
      {
        label: 'Wear a dead flag',
        detail: 'Slip into formation beneath the colors of a forgotten kingdom.',
        result: 'The armada salutes as you pass. Their quartermaster quietly transfers a spectral prize.',
        kind: 'stealth',
        effects: { rift: -4, crew: 2, loot: 14 },
      },
      {
        label: 'Refuse with cannon fire',
        detail: 'No name leaves this deck while the guns still answer.',
        result: 'The dead remember fear. You escape through their broken line trailing pale fire.',
        kind: 'assault',
        effects: { hull: -18, crew: 5, loot: 16 },
      },
      {
        label: 'Offer a name not yet born',
        detail: 'Pay the toll with a paradox the future can afford.',
        result: 'The admiral accepts the impossible name and grants a current through the war.',
        kind: 'stabilize',
        effects: { rift: 10, crew: -5, loot: 7 },
      },
    ],
  },
  {
    id: 'star-eater',
    sector: 'Night Without Coordinates',
    title: 'The Star-Eater Opens Its Eye',
    description:
      'Every constellation vanishes at once. Something ahead mistakes your rift-drive for the last warm star.',
    choices: [
      {
        label: 'Become a mote of darkness',
        detail: 'Bleed power until even the void forgets where you are.',
        result: 'The eye passes over you. In its wake drifts a pearl made from compressed midnight.',
        kind: 'stealth',
        effects: { rift: -14, crew: -4, loot: 18 },
      },
      {
        label: 'Feed it a burning decoy',
        detail: 'Launch the powder reserve and ignite it like a newborn sun.',
        result: 'The creature turns toward the false star while your scorched ship dives for daylight.',
        kind: 'assault',
        effects: { hull: -10, crew: 3, loot: 8 },
      },
      {
        label: 'Invert the rift current',
        detail: 'Turn hunger into thrust and let the beast pull you home.',
        result: 'The impossible current slingshots the ship across three realities in a single breath.',
        kind: 'stabilize',
        effects: { hull: -6, rift: 18, crew: -2, loot: 4 },
      },
    ],
  },
  {
    id: 'impossible-market',
    sector: 'The Bazaar Between Seconds',
    title: 'The Market Is Collapsing',
    description:
      'A city of suspended stalls has nine seconds left to exist. Every merchant is offering a final impossible bargain.',
    choices: [
      {
        label: 'Steal the unguarded minute',
        detail: 'Take time itself while every eye watches the jewels.',
        result: 'You escape with sixty seconds no clock can claim and a very offended chronology.',
        kind: 'stealth',
        effects: { rift: 7, crew: -3, loot: 17 },
      },
      {
        label: 'Raid the gravity vault',
        detail: 'Use the collapse as cover for one glorious charge.',
        result: 'The vault breaks open. Its bottled gravity dents the deck and enriches the crew.',
        kind: 'assault',
        effects: { hull: -12, crew: 7, loot: 23 },
      },
      {
        label: 'Hold the city together',
        detail: 'Spend rift power to give thousands of strangers one more minute.',
        result: 'The market survives long enough to evacuate, and its merchants repay mercy with maps.',
        kind: 'stabilize',
        effects: { rift: -11, crew: 14, loot: 10 },
      },
    ],
  },
]

const startingMeters: Record<string, Meters> = {
  wraith: { hull: 78, rift: 86, crew: 76, loot: 0 },
  emberdrake: { hull: 92, rift: 68, crew: 80, loot: 0 },
}

function hash(value: string) {
  let result = 2166136261
  for (let index = 0; index < value.length; index += 1) {
    result ^= value.charCodeAt(index)
    result = Math.imul(result, 16777619)
  }
  return result >>> 0
}

function clamp(value: number) {
  return Math.max(0, Math.min(100, value))
}

function encounterOrder(shipId: string, seed: string) {
  return encounters
    .map((encounter) => ({ encounter, order: hash(`${seed}:${shipId}:${encounter.id}`) }))
    .sort((left, right) => left.order - right.order)
    .map(({ encounter }) => encounter)
    .slice(0, MAX_STAGES)
}

function applyDoctrine(shipId: string, choice: RiftChoice) {
  const effects = { ...choice.effects }

  if (shipId === 'wraith' && choice.kind === 'stealth') {
    effects.rift = (effects.rift ?? 0) + 6
    effects.crew = (effects.crew ?? 0) + 2
  }

  if (shipId === 'emberdrake' && choice.kind === 'assault') {
    effects.hull = (effects.hull ?? 0) + 5
    effects.loot = (effects.loot ?? 0) + 6
  }

  return effects
}

export function sanitizeSeed(value: string | null) {
  return value?.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 12) || 'firstlight'
}

export function sanitizePath(value: string | null) {
  return (value ?? '').replace(/[^0-2]/g, '').slice(0, MAX_STAGES)
}

export function createRunSeed() {
  const values = new Uint32Array(1)
  crypto.getRandomValues(values)
  return values[0].toString(36).slice(0, 8)
}

export function getRiftRunState(shipId: string, seed: string, path: string): RiftRunState {
  const orderedEncounters = encounterOrder(shipId, seed)
  const choices = sanitizePath(path).split('').map(Number)
  let meters = { ...(startingMeters[shipId] ?? startingMeters.wraith) }
  const log: RunLogEntry[] = []

  for (let stage = 0; stage < choices.length; stage += 1) {
    const encounter = orderedEncounters[stage]
    const choice = encounter.choices[choices[stage]] ?? encounter.choices[0]
    const effects = applyDoctrine(shipId, choice)

    for (const key of Object.keys(effects) as MeterKey[]) {
      meters = { ...meters, [key]: clamp(meters[key] + (effects[key] ?? 0)) }
    }

    log.push({ encounter, choice, result: choice.result })
  }

  const failed = meters.hull <= 25 || meters.rift <= 25 || meters.crew <= 25
  const complete = failed || choices.length >= MAX_STAGES
  const score = meters.hull + meters.rift + meters.crew + meters.loot
  const rank = failed ? 'Lost to the rift' : score >= 285 ? 'Rift legend' : score >= 235 ? 'Realm runner' : 'Scarred survivor'
  const ending = failed
    ? 'The voyage becomes a warning told in ports that do not officially exist.'
    : score >= 285
      ? 'You return ahead of your own departure, holds bright with impossible treasure.'
      : score >= 235
        ? 'The fleet welcomes you home with a new realm inked onto the forbidden charts.'
        : 'You limp back through the veil with a story worth more than the damaged hull.'

  return {
    meters,
    stage: choices.length,
    encounter: complete ? null : orderedEncounters[choices.length],
    log,
    complete,
    failed,
    rank,
    ending,
  }
}

export function getChoiceEffects(shipId: string, choice: RiftChoice) {
  return applyDoctrine(shipId, choice)
}

export const meterLabels: Record<MeterKey, string> = {
  hull: 'Hull',
  rift: 'Rift',
  crew: 'Crew',
  loot: 'Loot',
}

export const maxRunStages = MAX_STAGES
