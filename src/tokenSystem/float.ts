import { createTokens } from 'styled-tokens'

const draftFloats = {
  values: {
    none: 'none',
    left: 'left',
    right: 'right',
  },
  propName: {
    float: 'float',
  },
}

export type FloatSystem = Partial<{
  float: keyof typeof draftFloats.values
}>

export default createTokens(draftFloats)
