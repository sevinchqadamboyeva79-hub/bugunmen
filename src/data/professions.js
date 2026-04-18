export const professions = [
  {
    id: "doctor",
    name: "Shifokor",
    emoji: "🩺",
    description: "Bemorlarni davolash, hayot saqlab qolish",
    questions: [
      {
        id: 1,
        text: "Bemor 38.5 isitmasi bilan keldi. Siz nima qilasiz?",
        options: [
          { text: "Darhol rentgen", score: 10, traits: { analytic: 2 } },
          { text: "Qon tahlili buyuraman", score: 30, traits: { analytic: 3, careful: 3 } },
          { text: "Ultratovush", score: 20, traits: { analytic: 2, careful: 2 } },
          { text: "Katta vrach chaqiraman", score: 15, traits: { communication: 3 } }
        ],
        timeLimit: 30
      },
      {
        id: 2,
        text: "Bemor dori ichishni rad etyapti. Nima qilasiz?",
        options: [
          { text: "Majburlayman", score: 5, traits: { analytic: 1 } },
          { text: "Sababini suraman", score: 30, traits: { communication: 3, careful: 2 } },
          { text: "Oilasini chaqiraman", score: 20, traits: { communication: 2 } },
          { text: "Boshqa dori tavsiya qilaman", score: 25, traits: { analytic: 2, careful: 3 } }
        ],
        timeLimit: 30
      },
      {
        id: 3,
        text: "Tez yordam: bemor hushini yoqotdi. Birinchi qadam?",
        options: [
          { text: "Nafas yolini tekshiraman", score: 30, traits: { analytic: 3, careful: 3 } },
          { text: "Darhol ukol qilaman", score: 10, traits: { analytic: 1 } },
          { text: "Yuragini massaj qilaman", score: 20, traits: { analytic: 2 } },
          { text: "Yordam chaqiraman", score: 15, traits: { communication: 3 } }
        ],
        timeLimit: 30
      }
    ]
  },
  {
    id: "coder",
    name: "Dasturchi",
    emoji: "💻",
    description: "Dasturlar va saytlar yaratish",
    questions: [
      {
        id: 1,
        text: "Saytingiz ishlamay qoldi. Xato topasiz:",
        options: [
          { text: "Console da xatoni izlayman", score: 30, traits: { analytic: 3 } },
          { text: "Hamkasbdan suraman", score: 15, traits: { communication: 3 } },
          { text: "Internetdan izlayman", score: 20, traits: { analytic: 2 } },
          { text: "Qayta yozaman", score: 10, traits: { creative: 2 } }
        ],
        timeLimit: 30
      },
      {
        id: 2,
        text: "Mijoz yangi funksiya sorayapti, vaqt kam. Nima qilasiz?",
        options: [
          { text: "Vaqtni kopaytirish suraman", score: 25, traits: { communication: 3 } },
          { text: "Kechasi ishlayman", score: 15, traits: { analytic: 2 } },
          { text: "Oddiyroq variant taklif qilaman", score: 30, traits: { creative: 3, analytic: 2 } },
          { text: "Rad etaman", score: 10, traits: { communication: 1 } }
        ],
        timeLimit: 30
      },
      {
        id: 3,
        text: "Kod ishlayapti lekin juda sekin. Nima qilasiz?",
        options: [
          { text: "Optimallashtiraman", score: 30, traits: { analytic: 3, careful: 2 } },
          { text: "Server kuchaytiraman", score: 15, traits: { analytic: 1 } },
          { text: "Mijozga aytaman", score: 10, traits: { communication: 2 } },
          { text: "Boshqacha yozaman", score: 25, traits: { creative: 3, analytic: 2 } }
        ],
        timeLimit: 30
      }
    ]
  },
  {
    id: "entrepreneur",
    name: "Tadbirkor",
    emoji: "🚀",
    description: "Biznes qurish, jamoa boshqarish",
    questions: [
      {
        id: 1,
        text: "Yangi biznes goyangiz bor. Birinchi qadam?",
        options: [
          { text: "Darhol boshlayaman", score: 15, traits: { creative: 2 } },
          { text: "Bozorni organaman", score: 30, traits: { analytic: 3, careful: 3 } },
          { text: "Investor izlayman", score: 10, traits: { communication: 2 } },
          { text: "Dostlarimdan suraman", score: 20, traits: { communication: 3 } }
        ],
        timeLimit: 30
      },
      {
        id: 2,
        text: "Xodimingiz xato qildi. Nima qilasiz?",
        options: [
          { text: "Jarimalayman", score: 5, traits: { analytic: 1 } },
          { text: "Sababini tushunaman", score: 30, traits: { communication: 3, careful: 3 } },
          { text: "Oqitaman", score: 25, traits: { communication: 2, careful: 2 } },
          { text: "Ishdan boshataman", score: 10, traits: { analytic: 1 } }
        ],
        timeLimit: 30
      },
      {
        id: 3,
        text: "Raqibingiz narxni tushirdi. Siz nima qilasiz?",
        options: [
          { text: "Men ham tushiraman", score: 15, traits: { analytic: 1 } },
          { text: "Sifatni oshiraman", score: 30, traits: { creative: 3, analytic: 2 } },
          { text: "Yangi xizmat qoshaman", score: 25, traits: { creative: 3 } },
          { text: "Bozorni organaman", score: 20, traits: { analytic: 3 } }
        ],
        timeLimit: 30
      }
    ]
  },
  {
    id: "designer",
    name: "Dizayner",
    emoji: "🎨",
    description: "Chiroyli va qulay interfeys yaratish",
    questions: [
      {
        id: 1,
        text: "Mijoz dizayningizni yoqtirmadi. Nima qilasiz?",
        options: [
          { text: "Qayta qilaman", score: 20, traits: { creative: 2 } },
          { text: "Sababini suraman", score: 30, traits: { communication: 3, analytic: 2 } },
          { text: "Oz variantimni tushuntiraman", score: 25, traits: { communication: 3, creative: 2 } },
          { text: "Boshqa variant korsataman", score: 20, traits: { creative: 3 } }
        ],
        timeLimit: 30
      },
      {
        id: 2,
        text: "Vaqt kam, dizayn tugallanmagan. Nima qilasiz?",
        options: [
          { text: "Soddalashtirib topshiraman", score: 25, traits: { analytic: 2, careful: 2 } },
          { text: "Vaqt suraman", score: 20, traits: { communication: 3 } },
          { text: "Kechasi ishlayman", score: 15, traits: { careful: 2 } },
          { text: "Muhim qismlarni birinchi qilaman", score: 30, traits: { analytic: 3, careful: 3 } }
        ],
        timeLimit: 30
      },
      {
        id: 3,
        text: "Foydalanuvchilar saytda adashyapti. Muammoni hal qilasiz:",
        options: [
          { text: "Yoriqnoma yozaman", score: 15, traits: { communication: 2 } },
          { text: "Interfeysi qayta dizayn qilaman", score: 30, traits: { creative: 3, analytic: 3 } },
          { text: "Foydalanuvchilardan suraman", score: 25, traits: { communication: 3, analytic: 2 } },
          { text: "Ranglarni ozgartiraman", score: 10, traits: { creative: 1 } }
        ],
        timeLimit: 30
      }
    ]
  },
  {
    id: "teacher",
    name: "Oqituvchi",
    emoji: "📚",
    description: "Bilim berish, yoshlarni tarbiyalash",
    questions: [
      {
        id: 1,
        text: "Oquvchi dars tushunmayapti. Nima qilasiz?",
        options: [
          { text: "Qayta tushuntiraman", score: 25, traits: { communication: 3, careful: 2 } },
          { text: "Misol bilan korsataman", score: 30, traits: { creative: 3, communication: 2 } },
          { text: "Uy vazifa beraman", score: 10, traits: { analytic: 1 } },
          { text: "Ota-onasiga aytaman", score: 15, traits: { communication: 2 } }
        ],
        timeLimit: 30
      },
      {
        id: 2,
        text: "Sinf tartibsiz, oquvchilar tinglamayapti. Nima qilasiz?",
        options: [
          { text: "Ovozni koteraman", score: 5, traits: { communication: 1 } },
          { text: "Qiziqarli oyin otkazaman", score: 30, traits: { creative: 3, communication: 3 } },
          { text: "Darsni toxtataman", score: 15, traits: { analytic: 2 } },
          { text: "Individual gaplashaman", score: 25, traits: { communication: 3, careful: 2 } }
        ],
        timeLimit: 30
      },
      {
        id: 3,
        text: "Oquvchi yiglayapti, nima bolganini bilmaysiz. Nima qilasiz?",
        options: [
          { text: "Etibor bermayman", score: 5, traits: { analytic: 1 } },
          { text: "Yoniga borib suraman", score: 30, traits: { communication: 3, careful: 3 } },
          { text: "Darsdan keyin gaplashaman", score: 20, traits: { careful: 2 } },
          { text: "Psixologga yuboraman", score: 15, traits: { communication: 2 } }
        ],
        timeLimit: 30
      }
    ]
  }
]