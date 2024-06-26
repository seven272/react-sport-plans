//импорт тренированчых планов
import { simpleMarathonPlan } from '../plans/run/42km/simpleMarathonPlan'
import { firstMarathonPlan } from '../plans/run/42km/firstMarathonPlan'
import { sub3MarathonPlan } from '../plans/run/42km/sub3MarathonPlan'
import { simpleHalfMarathonPlan } from '../plans/run/21km/simpleHalfMarathonPlan'
import { fiveKmForActivePeoplePlan } from '../plans/run/5km/fiveKmForActivePeoplePlan'
import { halfBaseTriPlan } from '../plans/tri/ironmanBasePlan'
//импорт иконо и изображений
import iconRun from '../images/run_plan.jpg'
import iconBike from '../images/bike_plan.jpg'
import iconSwim from '../images/swim_plan.jpg'
import iconTri from '../images/tri_plan.jpg'

const typePlans = [
  {
    name: 'все',
    distances: [],
  },
  {
    name: 'бег',
    distances: [
      {
        title: '42km',
        plans: [
          {
            title: 'Упрощенный план подготовки к первому марафону',
            id: 'run42-1',
            period: '16 недель',
            picture: iconRun,
            plan: simpleMarathonPlan,
            description:
              'Этот план подготовит вас к финишу на первом марафоне без конкретной привязке ко времени и темпу, главная задача состоит в прохождении первого марафона с комфортом. Каждая неделя включает в себя 5 тренировочных дней, один из которых отведен под длительную тренировку, и 2 дня под восстановление. Во время занятий по плану временами будет появляться желание увеличить дистанцию или пробежать быстрее указанного темпа, настоятельно рекомендуется оставаться в тренировочных границах тренировки, указанных в плане. Также как и не желательно пропускать или значительно сокращать тренировки. План это система, которая выстроена по определенной спортивной логике и самым лучшем решением будет последовательно и ответственно следовать ей. Данный план рассчитан на 16 недель. Количество тренировок в неделю — 5. Дистанция 42 км. Цель — преодоление дистанции. ',
            forWhom: '',
            planUrl: 'run42km-1',
            tags: ['бег', 'run', 'первый', 'марафон'],
          },
          {
            title: 'Подробный план подготовки к первому марафону',
            id: 'run42-2',
            period: '16 недель',
            picture: iconRun,
            plan: firstMarathonPlan,
            description:
              'Этот план подготовит вас к финишу на первом марафоне без конкретной привязке ко времени и темпу, главная задача состоит в прохождении первого марафона с комфортом. Каждая неделя включает в себя 5 тренировочных дней, один из которых отведен под длительную тренировку, и 2 дня под восстановление. Во время занятий по плану временами будет появляться желание увеличить дистанцию или пробежать быстрее указанного темпа, настоятельно рекомендуется оставаться в тренировочных границах тренировки, указанных в плане. Также как и не желательно пропускать или значительно сокращать тренировки. План это система, которая выстроена по определенной спортивной логике и самым лучшем решением будет последовательно и ответственно следовать ей. Данный план рассчитан на 16 недель. Количество тренировок в неделю — 5. Дистанция 42 км. Цель — преодоление дистанции. ',
            forWhom: '',
            planUrl: 'run42km-2',
            tags: ['бег', 'run', 'первый', 'марафон'],
          },

          {
            title: 'Марафон за 3 часа',
            id: 'run42-3',
            period: '16 недель',
            picture: iconRun,
            plan: sub3MarathonPlan,
            description:
              'Марафон продолжительностью в 3 часа - это темп 4.15 минут за км. Чтобы финишировать марафон  за 3 часа, вы должны быть способны пробежать полумарафон за 1 час 25 минут, а 10 км за 38 минут. Или чтобы приступить к тренировкам по этому планы ваш последний личный рекорд на марафоне должен быть 3.10 — 3.15 часа. Каждая неделя будет включать в себя легкие, длительные, темповые и скоростные тренировки, а также  сбу, дни отдыха и кросс-тренинги. По умолчанию каждая тренировка за исключением восстановительных и длительных  включает в себя заминку и разминку  продолжительностью по 10-15 минут каждая. Данный план рассчитан на 16 недель. Количество тренировок в неделю: 5-6. Дистанция 42 км. Цель — sub3.',
            forWhom: '',
            planUrl: 'run42km-3',
            tags: ['бег', '3 ', 'скорость', 'марафон'],
          },
        ],
      },
      {
        title: '21km',
        plans: [
          {
            title:
              'Упрощенный план подготовки к первому полумарафону',
            id: 'run21-1',
            period: '12 недель',
            picture: iconRun,
            plan: simpleHalfMarathonPlan,
            description:
              'Этот план подготовит вас к финишу на первом марафоне без конкретной привязке ко времени и темпу, главная задача состоит в прохождении первого марафона с комфортом. Каждая неделя включает в себя 5 тренировочных дней, один из которых отведен под длительную тренировку, и 2 дня под восстановление. Во время занятий по плану временами будет появляться желание увеличить дистанцию или пробежать быстрее указанного темпа, настоятельно рекомендуется оставаться в тренировочных границах тренировки, указанных в плане. Также как и не желательно пропускать или значительно сокращать тренировки. План это система, которая выстроена по определенной спортивной логике и самым лучшем решением будет последовательно и ответственно следовать ей. Данный план рассчитан на 16 недель. Количество тренировок в неделю — 5. Дистанция 42 км. Цель — преодоление дистанции. ',
            forWhom: '',
            planUrl: 'run21km-1',
            tags: ['бег', '21км', 'первый', 'полумарафон'],
          },
          {
            title: 'Полумарафон за 1.30',
            tags: [
              'hard run',
              '1 часа',
              '10 км',
              'hard run',
              '1 часа',
              'ff-gf',
            ],
            picture: iconRun,
            plan: 'тут уже сам план',
          },
          {
            title: 'Полумарафон за 1.45 часа',
            tags: ['hard run', '2 часа', '21 км'],
            picture: '',
            plan: 'тут уже сам план',
          },
        ],
      },
      {
        title: '10km',
        plans: [
          {
            title:
              'Упрощенный план подготовки к первому полумарафону',
            id: 'run21-1',
            period: '12 недель',
            picture: iconRun,
            plan: simpleHalfMarathonPlan,
            description:
              'Этот план подготовит вас к финишу на первом марафоне без конкретной привязке ко времени и темпу, главная задача состоит в прохождении первого марафона с комфортом. Каждая неделя включает в себя 5 тренировочных дней, один из которых отведен под длительную тренировку, и 2 дня под восстановление. Во время занятий по плану временами будет появляться желание увеличить дистанцию или пробежать быстрее указанного темпа, настоятельно рекомендуется оставаться в тренировочных границах тренировки, указанных в плане. Также как и не желательно пропускать или значительно сокращать тренировки. План это система, которая выстроена по определенной спортивной логике и самым лучшем решением будет последовательно и ответственно следовать ей. Данный план рассчитан на 16 недель. Количество тренировок в неделю — 5. Дистанция 42 км. Цель — преодоление дистанции. ',
            forWhom: '',
            planUrl: 'run21km-1',
            tags: ['бег', '21км', 'первый', 'полумарафон'],
          },

          {
            title: 'Десятка за 40 минут',
            tags: ['бег', '40 минут', '10 км'],
            picture: iconRun,
            plan: 'тут уже сам план',
          },
          
        ],
      },
      {
        title: '5km',
        plans: [
          {
            title:
              'План подготовки к забегу на 5км для активных людей за 4 недели',
            id: 'run5-1',
            period: '4 недели',
            picture: iconRun,
            plan: fiveKmForActivePeoplePlan,
            description:
              'Структура этого плана  включает   2 интервальные тренировки и одну  длительную пробежку в неделю. Длинные пробежки следует выполнять в медленном и комфортном темпе – ваша цель – стараться  бежать все время, хотя, если необходимо, можно переходить на шаг. Забудьте о темпе. Просто сосредоточься на том, чтобы пробежать всю дистанцию без оглядки на время.  Если вы чувствуете себя уставшим, переутомленным, то разумно пропустить тренировку и дать возможность организму отдохнуть. Старайтесь делать 3  кросс-тренироки в неделю:  это могут быть силовые упражнения для бегунов, йога, велосипед или любые другие силовые упражнения.',
            forWhom: '',
            planUrl: 'run5km-1',
            tags: ['бег', '5км', '4 недели'],
          },

          {
            title: '5 за 20 минут',
            tags: ['бег', '20 минут', '5 км'],
            picture: iconRun,
            plan: 'тут уже сам план',
          },
          
        ],
      },
    ],
  },
  {
    name: 'велосипед',
    distances: [
      {
        title: '50 километров',
        plans: [
          {
            title: 'Первые 50 км на велике',
            tags: ['hard run', '1 часа', '10 км'],
            picture: iconBike,
            plan: 'тут уже сам план',
          },
        ],
      },
      {
        title: '100 километров',
        plans: [],
      },
      {
        title: '180 километров',
        plans: [],
      },
    ],
  },
  {
    name: 'плавание',
    distances: [
      {
        title: '4 километра',
        plans: [],
      },
      {
        title: '2 километра',
        plans: [
          {
            title: 'Первые 2 км',
            tags: [
              'hard run',
              '1 часа',
              '10 км',
              'hard run',
              '1 часа',
              'ff-gf',
            ],
            picture: iconSwim,
            plan: 'тут уже сам план',
          },
          {
            title: '2км за 35 минут',
            tags: ['hard run', '1 часа', '10 км'],
            picture: iconSwim,
            plan: 'тут уже сам план',
          },
        ],
      },
      {
        title: '500 метров',
        plans: [
          {
            title: '500 за 15 ',
            tags: ['hard run', '1 часа', '10 км'],
            picture: iconSwim,
            plan: 'тут уже сам план',
          },
        ],
      },
    ],
  },
  {
    name: 'триатлон',
    distances: [
      {
        title: 'Железная дистанция 226 км',
        plans: [
          {
            title: 'Первая железка за 12 месяцев',
            tags: ['триатлон', 'план', '226 км'],
            picture: iconTri,
            plan: 'тут уже сам план',
          },

          {
            title: '226 км за 11 часов',
            tags: ['226 ', '11 часов', '100км'],
            picture: iconTri,
            plan: 'тут уже сам план',
          },
        ],
      },
      {
        title: 'Полужелезная дистанция 113км',
        plans: [
          {
            title: 'План подготовки к первой половинке',
            id: 'tri113-1',
            period: '12 недель',
            picture: iconRun,
            plan: halfBaseTriPlan,
            description:
              'Этот план подготовит вас к финишу на  первой полужелезной дистанции без конкретной привязке ко времени и темпу, главная задача состоит в прохождении  всех этапов с комфортном. Каждая неделя включает в себя 5 — 6 тренировочных дней, с чередованием различных видов, а также  2 дня в неделю отводится под восстановление. Во время занятий по плану временами будет появляться желание увеличить дистанцию или пробежать быстрее указанного темпа, настоятельно рекомендуется оставаться в тренировочных границах, указанных в плане. Также как и не желательно пропускать или значительно сокращать тренировки. План это система, которая выстроена по определенной спортивной логике и самым лучшем решением будет последовательно и ответственно следовать ей. Данный план рассчитан на 12 недель. Количество тренировок в неделю — 5-6. Дистанция общая 113км(плавание 1.9 км; велосипед 90км; бег 21км). Цель — преодоление дистанции.',
            forWhom: '',
            planUrl: 'tri113-1',
            tags: [
              'триатлон',
              '113',
              'swim-bike-run',
              'первая половинка',
            ],
          },
        ],
      },
      {
        title: 'Олимпийская дистанция',
        plans: [
          {
            title: 'Олимпийка за 2 часа',
            tags: ['Олтмпийска', '2 часа', '10км'],
            picture: iconTri,
            plan: 'тут уже сам план',
          },
        ],
      },
    ],
  },
]

export { typePlans }
