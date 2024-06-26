const infoPlan = {
  title:
    'План подготовки на 5 км для активных людей, которые хотят начать бегать',
  descr:
    'Структура этого плана  включает   2 интервальные тренировки и одну  длительную пробежку в неделю. Длинные пробежки следует выполнять в медленном и комфортном темпе – ваша цель – стараться  бежать все время, хотя, если необходимо, можно переходить на шаг. Забудьте о темпе. Просто сосредоточься на том, чтобы пробежать всю дистанцию без оглядки на время.  Если вы чувствуете себя уставшим, переутомленным, то разумно пропустить тренировку и дать возможность организму отдохнуть. Старайтесь делать 3  кросс-тренироки в неделю:  это могут быть силовые упражнения для бегунов, йога, велосипед или любые другие силовые упражнения.',
}

const arrTypes = [
  'run',
  'bike',
  'swim',
  'stretch',
  'strength',
  'rest',
  'other',
]

const arrSubtypes = [
  'easy',
  'long',
  'intervals',
  'tempo',
  'progression',
  'fartlek',
  'hills',
  'exercises',
  'other',
]

const fiveKmForActivePeoplePlan = [
  //1 неделя
  [
    {
      id: 1,
      day: 'ПН',
      title: 'отдых или кросс-тренинг',
      type: 'run',
      subtype: 'rest',
      description: '',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 2,
      day: 'ВТ',
      title: 'ходьба/бег',
      type: 'run',
      subtype: 'easy',
      description: '10х[2мин ходьба, 1 мин бег]',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 3,
      day: 'СР',
      title: 'отдых или кросс-тренинг',
      type: 'run',
      subtype: 'rest',
      description: '',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 4,
      day: 'ЧТ',
      title: 'ходьба/бег',
      type: 'run',
      subtype: 'easy',
      description: '10х[2мин ходьба, 1 мин бег]',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 5,
      day: 'ПТ',
      title: 'кросс-тренинг',
      type: 'run',
      subtype: 'other',
      description:
        'Кросс-тренинг с упором на силовые упражнения. Время тренировки 45-60 минут.',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 6,
      day: 'СБ',
      title: 'отдых или кросс-тренинг',
      type: 'run',
      subtype: 'rest',
      description: '',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 7,
      day: 'ВС',
      title: 'длительный бег',
      type: 'run',
      subtype: 'long',
      description: 'длительная пробежка в течении 12 минут',
      note: '',
      isCompleted: false,
      optional: [],
    },
  ],
  //2 неделя
  [
    {
      id: 8,
      day: 'ПН',
      title: 'отдых или кросс-тренинг',
      type: 'run',
      subtype: 'rest',
      description: '',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 9,
      day: 'ВТ',
      title: 'ходьба/бег',
      type: 'run',
      subtype: 'easy',
      description: '15х[1мин ходьба, 1 мин бег]',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 10,
      day: 'СР',
      title: 'отдых или кросс-тренинг',
      type: 'run',
      subtype: 'rest',
      description: '',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 11,
      day: 'ЧТ',
      title: 'ходьба/бег',
      type: 'run',
      subtype: 'easy',
      description: '15х[1мин ходьба, 1 мин бег]',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 12,
      day: 'ПТ',
      title: 'кросс-тренинг',
      type: 'run',
      subtype: 'other',
      description:
        'Кросс-тренинг с упором на силовые упражнения. Время тренировки 45-60 минут.',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 13,
      day: 'СБ',
      title: 'отдых или кросс-тренинг',
      type: 'run',
      subtype: 'rest',
      description: '',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 14,
      day: 'ВС',
      title: 'длительный бег',
      type: 'run',
      subtype: 'long',
      description: 'длительная пробежка в течении 18 минут',
      note: '',
      isCompleted: false,
      optional: [],
    },
  ],
  //3 неделя
  [
    {
      id: 15,
      day: 'ПН',
      title: 'отдых или кросс-тренинг',
      type: 'run',
      subtype: 'rest',
      description: '',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 16,
      day: 'ВТ',
      title: 'ходьба/бег',
      type: 'run',
      subtype: 'easy',
      description: '15х[30 сек ходьба, 1.5 мин бег]',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 17,
      day: 'СР',
      title: 'отдых или кросс-тренинг',
      type: 'run',
      subtype: 'rest',
      description: '',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 18,
      day: 'ЧТ',
      title: 'ходьба/бег',
      type: 'run',
      subtype: 'easy',
      description: '15х[30 сек ходьба, 1.5 мин бег]',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 19,
      day: 'ПТ',
      title: 'кросс-тренинг',
      type: 'run',
      subtype: 'other',
      description:
        'Кросс-тренинг с упором на силовые упражнения. Время тренировки 45-60 минут.',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 20,
      day: 'СБ',
      title: 'отдых или кросс-тренинг',
      type: 'run',
      subtype: 'rest',
      description: '',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 21,
      day: 'ВС',
      title: 'длительный бег',
      type: 'run',
      subtype: 'long',
      description: 'длительная пробежка в течении 26 минут',
      note: '',
      isCompleted: false,
      optional: [],
    },
  ],
  //4 неделя
  [
    {
      id: 22,
      day: 'ПН',
      title: 'отдых или кросс-тренинг',
      type: 'run',
      subtype: 'rest',
      description: '',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 23,
      day: 'ВТ',
      title: 'ходьба/бег',
      type: 'run',
      subtype: 'easy',
      description: '10х[1мин ходьба, 2 мин бег]',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 24,
      day: 'СР',
      title: 'отдых или кросс-тренинг',
      type: 'run',
      subtype: 'rest',
      description: '',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 25,
      day: 'ЧТ',
      title: 'ходьба/бег',
      type: 'run',
      subtype: 'easy',
      description: '10х[1мин ходьба, 2 мин бег]',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 26,
      day: 'ПТ',
      title: 'кросс-тренинг',
      type: 'run',
      subtype: 'other',
      description:
        'Кросс-тренинг с упором на силовые упражнения. Время тренировки 45-60 минут.',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 27,
      day: 'СБ',
      title: 'отдых или кросс-тренинг',
      type: 'run',
      subtype: 'rest',
      description: '',
      note: '',
      isCompleted: false,
      optional: [],
    },
    {
      id: 28,
      day: 'ВС',
      title: 'длительный бег',
      type: 'run',
      subtype: 'long',
      description: 'длительная пробежка - дистанция 5км',
      note: '',
      isCompleted: false,
      optional: [],
    },
  ],
]

export { fiveKmForActivePeoplePlan, infoPlan, arrTypes, arrSubtypes }
