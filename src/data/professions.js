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
        ], timeLimit: 30
      },
      {
        id: 2,
        text: "Bemor dori ichishni rad etmoqda. Nima qilasiz?",
        options: [
          { text: "Majburlayman", score: 5, traits: { analytic: 1 } },
          { text: "Sababini so'rayman va tushuntiraman", score: 30, traits: { communication: 3, careful: 2 } },
          { text: "Oilasini chaqiraman", score: 20, traits: { communication: 2 } },
          { text: "Boshqa dori tavsiya qilaman", score: 25, traits: { analytic: 2, careful: 3 } }
        ], timeLimit: 30
      },
      {
        id: 3,
        text: "Tez yordam: bemor hushini yo'qotdi. Birinchi qadamingiz?",
        options: [
          { text: "Nafas yo'lini tekshiraman", score: 30, traits: { analytic: 3, careful: 3 } },
          { text: "Darhol ukol qilaman", score: 10, traits: { analytic: 1 } },
          { text: "Yurak massaji qilaman", score: 20, traits: { analytic: 2 } },
          { text: "Yordam chaqiraman", score: 15, traits: { communication: 3 } }
        ], timeLimit: 30
      },
      {
        id: 4,
        text: "Ikki bemor bir vaqtda yordam so'rayapti. Qaysi biriga birinchi?",
        options: [
          { text: "Avval kelgani", score: 10, traits: { careful: 1 } },
          { text: "Ahvoli og'irrog'i", score: 30, traits: { analytic: 3, careful: 3 } },
          { text: "Bolasi", score: 15, traits: { communication: 2 } },
          { text: "Hamkasbdan so'rayman", score: 20, traits: { communication: 3 } }
        ], timeLimit: 30
      },
      {
        id: 5,
        text: "Bemor noto'g'ri tashxis qo'yilganini bildi va g'azablanyapti. Nima qilasiz?",
        options: [
          { text: "Uzr so'rayman va tushuntiraman", score: 30, traits: { communication: 3, careful: 2 } },
          { text: "Boshqa vrachga yuboraman", score: 15, traits: { communication: 2 } },
          { text: "Hujjatlarni ko'rsataman", score: 20, traits: { analytic: 2 } },
          { text: "Jim turaman", score: 5, traits: { analytic: 1 } }
        ], timeLimit: 30
      },
      {
        id: 6,
        text: "Yangi dori haqida o'qidingiz. Bemorga tavsiya qilasizmi?",
        options: [
          { text: "Darhol tavsiya qilaman", score: 10, traits: { analytic: 1 } },
          { text: "Avval chuqur o'rganaman", score: 30, traits: { analytic: 3, careful: 3 } },
          { text: "Hamkasblar bilan maslahatlashaman", score: 25, traits: { communication: 3 } },
          { text: "Sinov natijalarini kutaman", score: 20, traits: { careful: 3 } }
        ], timeLimit: 30
      },
      {
        id: 7,
        text: "Bemor davolanishni to'xtatmoqchi. Nima qilasiz?",
        options: [
          { text: "Qarorini hurmat qilaman", score: 15, traits: { communication: 2 } },
          { text: "Oqibatlarini tushuntiraman", score: 30, traits: { communication: 3, careful: 3 } },
          { text: "Oilasini xabardor qilaman", score: 20, traits: { communication: 2 } },
          { text: "Majburlayman", score: 5, traits: { analytic: 1 } }
        ], timeLimit: 30
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
        text: "Saytingiz ishlamay qoldi. Xatoni qanday topasiz?",
        options: [
          { text: "Consoleda xatoni izlayman", score: 30, traits: { analytic: 3 } },
          { text: "Hamkasbdan so'rayman", score: 15, traits: { communication: 3 } },
          { text: "Internetdan izlayman", score: 20, traits: { analytic: 2 } },
          { text: "Qaytadan yozaman", score: 10, traits: { creative: 2 } }
        ], timeLimit: 30
      },
      {
        id: 2,
        text: "Mijoz yangi funksiya so'ramoqda, vaqt kam. Nima qilasiz?",
        options: [
          { text: "Vaqt uzaytirishni so'rayman", score: 25, traits: { communication: 3 } },
          { text: "Kechasi ishlayman", score: 15, traits: { analytic: 2 } },
          { text: "Oddiyroq variant taklif qilaman", score: 30, traits: { creative: 3, analytic: 2 } },
          { text: "Rad etaman", score: 10, traits: { communication: 1 } }
        ], timeLimit: 30
      },
      {
        id: 3,
        text: "Kod ishlayapti lekin juda sekin. Nima qilasiz?",
        options: [
          { text: "Optimallashtiraman", score: 30, traits: { analytic: 3, careful: 2 } },
          { text: "Server kuchaytirilsin deb aytaman", score: 15, traits: { analytic: 1 } },
          { text: "Mijozga aytaman", score: 10, traits: { communication: 2 } },
          { text: "Boshqacha yozaman", score: 25, traits: { creative: 3, analytic: 2 } }
        ], timeLimit: 30
      },
      {
        id: 4,
        text: "Jamoadosh sizning kodingizni tanqid qildi. Nima qilasiz?",
        options: [
          { text: "Himoya qilaman", score: 10, traits: { communication: 1 } },
          { text: "Diqqat bilan tinglayman", score: 30, traits: { communication: 3, careful: 3 } },
          { text: "E'tibor bermayman", score: 5, traits: { analytic: 1 } },
          { text: "Birgalikda yaxshilaymiz", score: 25, traits: { communication: 3, creative: 2 } }
        ], timeLimit: 30
      },
      {
        id: 5,
        text: "Loyihani o'z vaqtida topshirolmaysiz. Nima qilasiz?",
        options: [
          { text: "Oldindan xabardor qilaman", score: 30, traits: { communication: 3, careful: 3 } },
          { text: "Topshirish muddatini o'tkazaman", score: 5, traits: { analytic: 1 } },
          { text: "Tunni bedor o'tkazaman", score: 15, traits: { careful: 2 } },
          { text: "Yordam so'rayman", score: 25, traits: { communication: 3 } }
        ], timeLimit: 30
      },
      {
        id: 6,
        text: "Yangi texnologiyani o'rganish kerak. Qanday yondashasiz?",
        options: [
          { text: "Rasmiy hujjatlarni o'qiyman", score: 25, traits: { analytic: 3, careful: 2 } },
          { text: "Video darsliklar ko'raman", score: 20, traits: { creative: 2 } },
          { text: "Loyiha qilib o'rganaman", score: 30, traits: { creative: 3, analytic: 2 } },
          { text: "Kursga yozilaman", score: 15, traits: { careful: 2 } }
        ], timeLimit: 30
      },
      {
        id: 7,
        text: "Foydalanuvchilar ilovangizdan shikoyat qilmoqda. Nima qilasiz?",
        options: [
          { text: "Shikoyatlarni e'tiborsiz qoldiraman", score: 5, traits: { analytic: 1 } },
          { text: "Har bir shikoyatni o'rganaman", score: 30, traits: { analytic: 3, careful: 3 } },
          { text: "Foydalanuvchilar bilan gaplashaman", score: 25, traits: { communication: 3 } },
          { text: "Tezda yangilash chiqaraman", score: 20, traits: { creative: 2, analytic: 2 } }
        ], timeLimit: 30
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
        text: "Yangi biznes g'oyangiz bor. Birinchi qadamingiz?",
        options: [
          { text: "Darhol boshlayman", score: 15, traits: { creative: 2 } },
          { text: "Bozorni o'rganaman", score: 30, traits: { analytic: 3, careful: 3 } },
          { text: "Investor izlayman", score: 10, traits: { communication: 2 } },
          { text: "Do'stlarimdan fikr so'rayman", score: 20, traits: { communication: 3 } }
        ], timeLimit: 30
      },
      {
        id: 2,
        text: "Xodimingiz xato qildi. Nima qilasiz?",
        options: [
          { text: "Jarimalayman", score: 5, traits: { analytic: 1 } },
          { text: "Sababini tushunaman", score: 30, traits: { communication: 3, careful: 3 } },
          { text: "O'rgataman", score: 25, traits: { communication: 2, careful: 2 } },
          { text: "Ishdan bo'shataman", score: 10, traits: { analytic: 1 } }
        ], timeLimit: 30
      },
      {
        id: 3,
        text: "Raqibingiz narxni tushirdi. Siz nima qilasiz?",
        options: [
          { text: "Men ham tushiraman", score: 15, traits: { analytic: 1 } },
          { text: "Sifatni oshiraman", score: 30, traits: { creative: 3, analytic: 2 } },
          { text: "Yangi xizmat qo'shaman", score: 25, traits: { creative: 3 } },
          { text: "Bozorni o'rganaman", score: 20, traits: { analytic: 3 } }
        ], timeLimit: 30
      },
      {
        id: 4,
        text: "Biznesingiz zarar ko'rmoqda. Nima qilasiz?",
        options: [
          { text: "Xarajatlarni qisqartiraman", score: 25, traits: { analytic: 3, careful: 2 } },
          { text: "Yangi bozor izlayman", score: 30, traits: { creative: 3, analytic: 2 } },
          { text: "Kredit olaman", score: 10, traits: { analytic: 1 } },
          { text: "Mutaxassis bilan maslahatlashaman", score: 20, traits: { communication: 3 } }
        ], timeLimit: 30
      },
      {
        id: 5,
        text: "Muhim mijoz bilan muzokaraga borasiz. Qanday tayyorlanasiz?",
        options: [
          { text: "Mijoz haqida chuqur o'rganaman", score: 30, traits: { analytic: 3, careful: 3 } },
          { text: "Taqdimot tayyorlayman", score: 25, traits: { careful: 2, creative: 2 } },
          { text: "Shunchaki boraman", score: 5, traits: { creative: 1 } },
          { text: "Jamoamni olib boraman", score: 20, traits: { communication: 3 } }
        ], timeLimit: 30
      },
      {
        id: 6,
        text: "Jamoangiz motivatsiyasi pasayib ketdi. Nima qilasiz?",
        options: [
          { text: "Maoshni oshiraman", score: 15, traits: { analytic: 1 } },
          { text: "Har biri bilan alohida gaplashaman", score: 30, traits: { communication: 3, careful: 3 } },
          { text: "Jamoa sayohati uyushtiraman", score: 25, traits: { creative: 3, communication: 2 } },
          { text: "E'tibor bermayman", score: 5, traits: { analytic: 1 } }
        ], timeLimit: 30
      },
      {
        id: 7,
        text: "G'oyangizni investorga taqdim etasiz. Asosiy e'tiboringiz nimada?",
        options: [
          { text: "Moliyaviy raqamlar", score: 20, traits: { analytic: 3 } },
          { text: "Muammo va yechim", score: 30, traits: { analytic: 2, communication: 3 } },
          { text: "Jamoa tajribasi", score: 25, traits: { communication: 3 } },
          { text: "Bozor hajmi", score: 15, traits: { analytic: 2 } }
        ], timeLimit: 30
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
          { text: "Qaytadan qilaman", score: 20, traits: { creative: 2 } },
          { text: "Sababini so'rayman", score: 30, traits: { communication: 3, analytic: 2 } },
          { text: "O'z variantimni tushuntiraman", score: 25, traits: { communication: 3, creative: 2 } },
          { text: "Boshqa variant ko'rsataman", score: 20, traits: { creative: 3 } }
        ], timeLimit: 30
      },
      {
        id: 2,
        text: "Vaqt kam, dizayn tugallanmagan. Nima qilasiz?",
        options: [
          { text: "Soddalashtirib topshiraman", score: 25, traits: { analytic: 2, careful: 2 } },
          { text: "Vaqt so'rayman", score: 20, traits: { communication: 3 } },
          { text: "Kechasi ishlayman", score: 15, traits: { careful: 2 } },
          { text: "Muhim qismlarni birinchi qilaman", score: 30, traits: { analytic: 3, careful: 3 } }
        ], timeLimit: 30
      },
      {
        id: 3,
        text: "Foydalanuvchilar saytda adashmoqda. Muammoni qanday hal qilasiz?",
        options: [
          { text: "Yo'riqnoma yozaman", score: 15, traits: { communication: 2 } },
          { text: "Interfeysi qaytadan dizayn qilaman", score: 30, traits: { creative: 3, analytic: 3 } },
          { text: "Foydalanuvchilar bilan suhbatlashaman", score: 25, traits: { communication: 3, analytic: 2 } },
          { text: "Ranglarni o'zgartiraman", score: 10, traits: { creative: 1 } }
        ], timeLimit: 30
      },
      {
        id: 4,
        text: "Yangi loyiha boshlamoqchisiz. Birinchi qadamingiz?",
        options: [
          { text: "Darhol chizishni boshlayman", score: 15, traits: { creative: 2 } },
          { text: "Foydalanuvchilarni o'rganaman", score: 30, traits: { analytic: 3, careful: 3 } },
          { text: "Raqiblarni tahlil qilaman", score: 25, traits: { analytic: 3 } },
          { text: "Ilhom izlayman", score: 20, traits: { creative: 3 } }
        ], timeLimit: 30
      },
      {
        id: 5,
        text: "Ikki xil dizayn variantingiz bor. Qaysi birini tanlaysiz?",
        options: [
          { text: "Ko'proq yoqqanini", score: 15, traits: { creative: 2 } },
          { text: "Foydalanuvchi testidan o'tganini", score: 30, traits: { analytic: 3, careful: 3 } },
          { text: "Mijoz yoqtirganini", score: 20, traits: { communication: 3 } },
          { text: "Ikkalasini birlashtiraman", score: 25, traits: { creative: 3, analytic: 2 } }
        ], timeLimit: 30
      },
      {
        id: 6,
        text: "Dizayningiz texnik jihatdan amalga oshirib bo'lmaydi. Nima qilasiz?",
        options: [
          { text: "Dasturchi bilan muzokaralayman", score: 30, traits: { communication: 3, analytic: 2 } },
          { text: "Dizaynni o'zgartiraman", score: 25, traits: { creative: 3, careful: 2 } },
          { text: "Boshqa yechim izlayman", score: 20, traits: { creative: 3 } },
          { text: "Shunday qoldiram", score: 5, traits: { creative: 1 } }
        ], timeLimit: 30
      },
      {
        id: 7,
        text: "Mijoz har kuni yangi o'zgartirish so'rаmoqda. Nima qilasiz?",
        options: [
          { text: "Har birini bajaraman", score: 10, traits: { careful: 1 } },
          { text: "Chegara qo'yaman", score: 30, traits: { communication: 3, analytic: 3 } },
          { text: "Loyiha doirasini aniqlaymiz", score: 25, traits: { communication: 3, careful: 2 } },
          { text: "Shartnomani ko'rsataman", score: 20, traits: { analytic: 2 } }
        ], timeLimit: 30
      }
    ]
  },
  {
    id: "teacher",
    name: "O'qituvchi",
    emoji: "📚",
    description: "Bilim berish, yoshlarni tarbiyalash",
    questions: [
      {
        id: 1,
        text: "O'quvchi darsni tushunmayapti. Nima qilasiz?",
        options: [
          { text: "Qaytadan tushuntiraman", score: 25, traits: { communication: 3, careful: 2 } },
          { text: "Misol bilan ko'rsataman", score: 30, traits: { creative: 3, communication: 2 } },
          { text: "Uy vazifa beraman", score: 10, traits: { analytic: 1 } },
          { text: "Ota-onasiga aytaman", score: 15, traits: { communication: 2 } }
        ], timeLimit: 30
      },
      {
        id: 2,
        text: "Sinf tartibsiz, o'quvchilar tinglamayapti. Nima qilasiz?",
        options: [
          { text: "Ovozni ko'taraman", score: 5, traits: { communication: 1 } },
          { text: "Qiziqarli o'yin o'tkazaman", score: 30, traits: { creative: 3, communication: 3 } },
          { text: "Darsni to'xtataman", score: 15, traits: { analytic: 2 } },
          { text: "Har biri bilan alohida gaplashaman", score: 25, traits: { communication: 3, careful: 2 } }
        ], timeLimit: 30
      },
      {
        id: 3,
        text: "O'quvchi yig'layapti. Nima qilasiz?",
        options: [
          { text: "E'tibor bermayman", score: 5, traits: { analytic: 1 } },
          { text: "Yoniga borib so'rayman", score: 30, traits: { communication: 3, careful: 3 } },
          { text: "Darsdan keyin gaplashaman", score: 20, traits: { careful: 2 } },
          { text: "Psixologga yuboraman", score: 15, traits: { communication: 2 } }
        ], timeLimit: 30
      },
      {
        id: 4,
        text: "O'quvchilar imtihondan yomon baho oldi. Sabab nima deb o'ylaysiz?",
        options: [
          { text: "O'quvchilar yaxshi tayyorlanmagan", score: 10, traits: { analytic: 1 } },
          { text: "Men yaxshi tushuntirmagan bo'lishim mumkin", score: 30, traits: { careful: 3, analytic: 3 } },
          { text: "Imtihon qiyin edi", score: 15, traits: { analytic: 2 } },
          { text: "Har birining sababini o'rganaman", score: 25, traits: { communication: 3, careful: 2 } }
        ], timeLimit: 30
      },
      {
        id: 5,
        text: "Yangi mavzuni qanday o'rgatmoqchisiz?",
        options: [
          { text: "Kitobdan o'qib beraman", score: 10, traits: { analytic: 1 } },
          { text: "Hayotiy misollar orqali", score: 30, traits: { creative: 3, communication: 3 } },
          { text: "Video ko'rsataman", score: 20, traits: { creative: 2 } },
          { text: "O'quvchilarni o'zlari kashf etishiga yo'naltiram", score: 25, traits: { creative: 3, careful: 2 } }
        ], timeLimit: 30
      },
      {
        id: 6,
        text: "Ota-ona farzandining bahosidan norozi. Nima qilasiz?",
        options: [
          { text: "Bahoni ko'taraman", score: 5, traits: { analytic: 1 } },
          { text: "O'quvchining holatini tushuntiraman", score: 30, traits: { communication: 3, careful: 3 } },
          { text: "Qo'shimcha dars taklif qilaman", score: 25, traits: { careful: 3, communication: 2 } },
          { text: "Boshqa o'qituvchiga yuboraman", score: 10, traits: { communication: 1 } }
        ], timeLimit: 30
      },
      {
        id: 7,
        text: "O'quvchi juda iqtidorli lekin dangasa. Nima qilasiz?",
        options: [
          { text: "O'z holiga qo'yaman", score: 5, traits: { analytic: 1 } },
          { text: "Qiziqtiradigan vazifa beraman", score: 30, traits: { creative: 3, communication: 3 } },
          { text: "Ota-onasi bilan gaplashaman", score: 20, traits: { communication: 2 } },
          { text: "Maxsus dasturga yuboraman", score: 25, traits: { careful: 3, analytic: 2 } }
        ], timeLimit: 30
      }
    ]
  }
]