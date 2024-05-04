import * as a from '../actionTypes'
import avatarIcon from '../../assets/images/avatar1.jpg'

const initialState = {
  avatar: avatarIcon,
  persona: {
    name: 'Mike Reshetnyak',
    age: 34,
    weight: 89,
    height: 180,
  },
  records: {
    five: '0 ч. 0 мин. 0 сек.',
    ten: '0 ч. 0 мин. 0 сек.',
    halfmarathon: '0 ч. 0 мин. 0 сек.',
    marathon: '0 ч. 0 мин. 0 сек.',
  },
  pulses: {
    zone1: '89-110',
    zone2: '111-120',
    zone3: '121-150',
    zone4: '151-170',
    zone5: '171-190',
  },
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_PERSONA: {
      return {
        ...state,
        persona: { ...action.payload },
      }
    }

    case a.ADD_PULSES: {
      return {
        ...state,
        pulses: { ...action.payload },
      }
    }
    case a.ADD_RECORDS: {
      return {
        ...state,
        records: { ...action.payload },
      }
    }

    default:
      return state
  }
}

export default userReducer
