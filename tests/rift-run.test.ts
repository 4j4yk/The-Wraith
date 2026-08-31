import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import {
  createDailyRunSeed,
  getChoiceEffects,
  getRiftRunState,
  sanitizePath,
  sanitizeSeed,
  shipDoctrines,
} from '../lib/rift-run.ts'

describe('Rift Run deterministic reconstruction', () => {
  it('reconstructs identical state from the same ship, seed, and path', () => {
    const first = getRiftRunState('wraith', 'signal-2026-08-31', '012')
    const replay = getRiftRunState('wraith', 'signal-2026-08-31', '012')

    assert.deepEqual(replay, first)
    assert.equal(first.complete, true)
    assert.equal(first.log.length, 3)
  })

  it('keeps ship doctrine effects deterministic and ship-specific', () => {
    const stealthChoice = getRiftRunState('wraith', 'doctrine-check', '').encounter?.choices.find(
      (choice) => choice.kind === shipDoctrines.wraith.kind,
    )
    assert.ok(stealthChoice)

    const baseRift = stealthChoice.effects.rift ?? 0
    const baseCrew = stealthChoice.effects.crew ?? 0
    const boosted = getChoiceEffects('wraith', stealthChoice)
    const unboosted = getChoiceEffects('emberdrake', stealthChoice)

    assert.equal(boosted.rift, baseRift + 6)
    assert.equal(boosted.crew, baseCrew + 2)
    assert.equal(unboosted.rift ?? 0, baseRift)
    assert.equal(unboosted.crew ?? 0, baseCrew)
  })

  it('falls back to Wraith starting meters for an unknown ship', () => {
    assert.deepEqual(
      getRiftRunState('unknown-vessel', 'fallback-check', '').meters,
      getRiftRunState('wraith', 'fallback-check', '').meters,
    )
  })

  it('caps all projected meters within the documented 0–100 range', () => {
    for (const shipId of ['wraith', 'emberdrake']) {
      for (const path of ['000', '111', '222', '012', '210']) {
        const state = getRiftRunState(shipId, 'boundary-check', path)
        for (const value of Object.values(state.meters)) {
          assert.ok(value >= 0 && value <= 100)
        }
      }
    }
  })
})

describe('shareable URL input boundaries', () => {
  it('normalizes seeds to a bounded lowercase allow-list', () => {
    assert.equal(sanitizeSeed(' SIGNAL-2026-08-31<script> '), 'signal-2026-08-31scr')
    assert.equal(sanitizeSeed(null), 'firstlight')
  })

  it('retains only three valid choice indexes', () => {
    assert.equal(sanitizePath('0x1-223'), '012')
    assert.equal(sanitizePath(null), '')
  })

  it('creates stable UTC daily signal seeds', () => {
    assert.equal(createDailyRunSeed(new Date('2026-08-31T23:59:59Z')), 'signal-2026-08-31')
    assert.equal(createDailyRunSeed(new Date('2026-09-01T00:00:00Z')), 'signal-2026-09-01')
  })
})
