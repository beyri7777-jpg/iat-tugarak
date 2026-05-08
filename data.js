// ========== DATA STORAGE SYSTEM ==========
// Единая система хранения данных для всех курсов и материалов

class DataStorage {
  constructor() {
    this.storageKey = 'iat-tugarak-data';
    this.initData();
  }

  initData() {
    if (!localStorage.getItem(this.storageKey)) {
      const defaultData = {
        courses: {
          web: {
            id: 'web',
            icon: '🌐',
            title: "Web Dizayn",
            level: "BOSHLANG'ICH DARAJA",
            color: '#3dffb0',
            duration: '3 oy',
            description: 'HTML, CSS va JavaScript bilan veb-saytlar yaratish asoslari',
            videos: [
              { title: 'Dars 1: HTML nima? Asosiy tuzilish', duration: '12:34', id: 'UB1O30fR-EE', order: 1 },
              { title: 'Dars 2: HTML teglar va atributlar', duration: '15:22', id: 'PlxWf493en4', order: 2 },
              { title: 'Dars 3: CSS bilan uslublash asoslari', duration: '18:10', id: 'yfoY53QXEnI', order: 3 },
              { title: 'Dars 4: CSS Box Model tushunchasi', duration: '14:05', id: 'rIO5326FgPE', order: 4 },
              { title: "Dars 5: Flexbox bilan tartib va joylash", duration: '20:33', id: 'fYq5PXgSsbE', order: 5 },
              { title: "Dars 6: JavaScript asoslari - O'zgaruvchilar", duration: '16:48', id: 'W6NZfCO5SIk', order: 6 },
              { title: "Dars 7: JavaScript - Funksiyalar", duration: '13:57', id: 'N8ap4k_1QEQ', order: 7 },
              { title: "Dars 8: Responsive Dizayn va Media Queries", duration: '17:22', id: 'srvUrn5OoLo', order: 8 }
            ],
            materials: [
              { type: 'pdf', title: 'HTML5 — To\'liq qo\'llanma', desc: 'Barcha HTML teglar va ularning ishlatilishi', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', order: 1 },
              { type: 'pdf', title: 'CSS3 Cheat Sheet', desc: 'CSS xususiyatlari va qiymatlari ro\'yxati', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference', order: 2 },
              { type: 'link', title: 'W3Schools HTML Tutorial', desc: 'Interaktiv HTML darslari', url: 'https://www.w3schools.com/html/', order: 3 },
              { type: 'link', title: 'CSS Flexbox Oyini — Flexbox Froggy', desc: "O'yinli tarzda Flexbox o'rganish", url: 'https://flexboxfroggy.com/', order: 4 }
            ],
            quiz: [
              { q: 'HTML qisqartmasi nima?', opts: ['HyperText Markup Language','High Tech Modern Language','Hyperlink and Text Markup Language','Home Tool Markup Language'], ans: 0 },
              { q: "HTML da sarlavha uchun qaysi teg ishlatiladi?", opts: ['<head>','<h1>','<header>','<title>'], ans: 1 },
              { q: 'CSS da rang berish uchun qaysi xususiyat ishlatiladi?', opts: ['font-color','text-color','color','background'], ans: 2 },
              { q: "Flexbox konteyner uchun qaysi display qiymati ishlatiladi?", opts: ['block','inline','flex','grid'], ans: 2 },
              { q: 'HTML da rasm qo\'shish uchun qaysi teg?', opts: ['<pic>','<image>','<img>','<src>'], ans: 2 }
            ],
            test: [
              { q: 'HTML5 da yangi semantik teglar qaysilar?', opts: ['<div>, <span>','<header>, <footer>, <article>','<b>, <i>','<table>, <tr>'], ans: 1 },
              { q: 'CSS Box Model qaysi elementlardan iborat?', opts: ['margin, border, padding, content','width, height, color','font, text, background','display, position, float'], ans: 0 },
              { q: "JavaScript da o'zgaruvchi e'lon qilish uchun:", opts: ['var, let, const','def, var','int, string','dim, set'], ans: 0 },
              { q: 'Responsive dizayn uchun qaysi CSS qoidasi ishlatiladi?', opts: ['@keyframes','@media','@import','@font-face'], ans: 1 },
              { q: 'HTML da havola (link) yaratish uchun:', opts: ['<link>','<href>','<a>','<url>'], ans: 2 }
            ]
          },
          ai: {
            id: 'ai',
            icon: '🧠',
            title: "Sun'iy Intellekt",
            level: "ILGOR DARAJA",
            color: '#4d9fff',
            duration: '5 oy',
            description: 'Machine learning va AI asoslarini o\'rganib, aqlli ilovalar yarating',
            videos: [
              { title: "Dars 1: Sun'iy intellekt nima?", duration: '14:20', id: 'ad79nYk2keg', order: 1 },
              { title: 'Dars 2: Machine Learning asoslari', duration: '22:15', id: 'ukzFI9rgwfU', order: 2 },
              { title: "Dars 3: Python bilan ma'lumot tahlili", duration: '19:40', id: 'r-uOLxNfiNM', order: 3 }
            ],
            materials: [
              { type: 'link', title: 'Google ML Crash Course', desc: "Google'dan bepul Machine Learning kursi", url: 'https://developers.google.com/machine-learning/crash-course', order: 1 },
              { type: 'link', title: 'Kaggle — Amaliy ML', desc: "Real ma'lumotlar bilan ishlash platforma", url: 'https://www.kaggle.com/learn', order: 2 }
            ],
            quiz: [
              { q: "AI - Sun'iy Intellekt qisqartmasi:", opts: ['Automated Interface','Artificial Intelligence','Advanced Internet','Auto Integration'], ans: 1 },
              { q: 'Machine Learning - bu:', opts: ["Kompyuterni qo'lda dasturlash","Kompyuterni ma'lumotlardan o'rganishga o'rgatish","Internet tarmog'i","Grafik dizayn"], ans: 1 }
            ],
            test: [
              { q: "Machine Learning'ning asosiy turlari qaysilar?", opts: ["Supervised, Unsupervised, Reinforcement","Fast, Slow, Medium","Online, Offline, Cloud","Simple, Complex, Advanced"], ans: 0 },
              { q: "Overfitting muammosi nima?", opts: ["Model juda sekin ishlaydi","Model faqat train ma'lumotda yaxshi, yangi ma'lumotda yomon","Model umuman ishlamaydi","Model juda katta"], ans: 1 }
            ]
          },
          cyber: {
            id: 'cyber',
            icon: '🔐',
            title: "Kiberxavfsizlik",
            level: "ILGOR DARAJA",
            color: '#ff6b4a',
            duration: '5 oy',
            description: 'Raqamli xavfsizlik asoslarini o\'rganib, tarmoqlarni himoya qilishni bilib oling',
            videos: [
              { title: 'Dars 1: Kiberxavfsizlik asoslari', duration: '13:45', id: 'inWWhr5tnEA', order: 1 },
              { title: "Dars 2: Tarmoq xavfsizligi tushunchalari", duration: '17:30', id: 'E03gh1huvW4', order: 2 },
              { title: "Dars 3: Linux asoslari - Xavfsizlik uchun", duration: '20:15', id: 'ROjZy1WbCIA', order: 3 }
            ],
            materials: [
              { type: 'link', title: 'TryHackMe — Amaliy Kiberxavfsizlik', desc: "O'yinli tarzda hacking o'rganish", url: 'https://tryhackme.com/', order: 1 },
              { type: 'link', title: 'Hack The Box — CTF Platforma', desc: "Real stsenariy asosida mashq qilish", url: 'https://www.hackthebox.com/', order: 2 }
            ],
            quiz: [
              { q: 'Kiberxavfsizlikning asosiy 3 tamoyili (CIA):', opts: ["Confidentiality, Integrity, Availability","Computer, Internet, Access","Control, Inspect, Audit","Cloud, Infrastructure, Application"], ans: 0 },
              { q: 'Firewall nima vazifa bajaradi?', opts: ["Ma'lumot saqlaydi","Tarmoq trafikini filterlaydi","Dastur ishlatadi","Internet tezligini oshiradi"], ans: 1 }
            ],
            test: [
              { q: "SQL Injection hujumidan himoyalanish uchun:", opts: ["Parolni murakkablashtirish","Prepared statements va parametrlangan so'rovlar ishlatish","Tarmoqni o'chirish","Firewall o'rnatish"], ans: 1 },
              { q: "Man-in-the-Middle (MITM) hujumi:", opts: ["Foydalanuvchini kuzatish","Ikkita tomon orasidagi aloqani tutib qolish","Server bloklash","Parol taxmin qilish"], ans: 1 }
            ]
          }
        },
        users: [],
        userProgress: {}
      };
      localStorage.setItem(this.storageKey, JSON.stringify(defaultData));
    }
  }

  // Получить все данные
  getAllData() {
    return JSON.parse(localStorage.getItem(this.storageKey));
  }

  // Получить все курсы
  getCourses() {
    const data = this.getAllData();
    return data.courses;
  }

  // Получить курс по ID
  getCourse(courseId) {
    const data = this.getAllData();
    return data.courses[courseId];
  }

  // Обновить курс
  updateCourse(courseId, updatedCourse) {
    const data = this.getAllData();
    data.courses[courseId] = { ...data.courses[courseId], ...updatedCourse };
    localStorage.setItem(this.storageKey, JSON.stringify(data));
    return data.courses[courseId];
  }

  // Добавить видео в курс
  addVideo(courseId, video) {
    const data = this.getAllData();
    const course = data.courses[courseId];
    video.order = (course.videos.length || 0) + 1;
    course.videos.push(video);
    localStorage.setItem(this.storageKey, JSON.stringify(data));
    return course;
  }

  // Обновить видео
  updateVideo(courseId, videoIndex, updatedVideo) {
    const data = this.getAllData();
    data.courses[courseId].videos[videoIndex] = { ...data.courses[courseId].videos[videoIndex], ...updatedVideo };
    localStorage.setItem(this.storageKey, JSON.stringify(data));
    return data.courses[courseId];
  }

  // Удалить видео
  deleteVideo(courseId, videoIndex) {
    const data = this.getAllData();
    data.courses[courseId].videos.splice(videoIndex, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(data));
    return data.courses[courseId];
  }

  // Добавить материал
  addMaterial(courseId, material) {
    const data = this.getAllData();
    const course = data.courses[courseId];
    material.order = (course.materials.length || 0) + 1;
    course.materials.push(material);
    localStorage.setItem(this.storageKey, JSON.stringify(data));
    return course;
  }

  // Обновить материал
  updateMaterial(courseId, materialIndex, updatedMaterial) {
    const data = this.getAllData();
    data.courses[courseId].materials[materialIndex] = { ...data.courses[courseId].materials[materialIndex], ...updatedMaterial };
    localStorage.setItem(this.storageKey, JSON.stringify(data));
    return data.courses[courseId];
  }

  // Удалить материал
  deleteMaterial(courseId, materialIndex) {
    const data = this.getAllData();
    data.courses[courseId].materials.splice(materialIndex, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(data));
    return data.courses[courseId];
  }

  // Добавить вопрос в викторину
  addQuizQuestion(courseId, question) {
    const data = this.getAllData();
    data.courses[courseId].quiz.push(question);
    localStorage.setItem(this.storageKey, JSON.stringify(data));
    return data.courses[courseId];
  }

  // Обновить вопрос викторины
  updateQuizQuestion(courseId, questionIndex, updatedQuestion) {
    const data = this.getAllData();
    data.courses[courseId].quiz[questionIndex] = { ...data.courses[courseId].quiz[questionIndex], ...updatedQuestion };
    localStorage.setItem(this.storageKey, JSON.stringify(data));
    return data.courses[courseId];
  }

  // Удалить вопрос викторины
  deleteQuizQuestion(courseId, questionIndex) {
    const data = this.getAllData();
    data.courses[courseId].quiz.splice(questionIndex, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(data));
    return data.courses[courseId];
  }

  // Экспортировать данные (JSON)
  exportData() {
    const data = this.getAllData();
    return JSON.stringify(data, null, 2);
  }

  // Импортировать данные
  importData(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      localStorage.setItem(this.storageKey, JSON.stringify(data));
      return { success: true, message: 'Data imported successfully' };
    } catch (err) {
      return { success: false, message: 'Invalid JSON format' };
    }
  }

  // Очистить все данные
  clearData() {
    localStorage.removeItem(this.storageKey);
    this.initData();
    return { success: true, message: 'Data cleared' };
  }

  // Получить статистику
  getStats() {
    const data = this.getAllData();
    return {
      totalCourses: Object.keys(data.courses).length,
      totalVideos: Object.values(data.courses).reduce((sum, course) => sum + (course.videos?.length || 0), 0),
      totalMaterials: Object.values(data.courses).reduce((sum, course) => sum + (course.materials?.length || 0), 0),
      totalQuestions: Object.values(data.courses).reduce((sum, course) => sum + (course.quiz?.length || 0), 0)
    };
  }
}

// Инициализировать глобальный объект хранилища
const dataStorage = new DataStorage();

// Экспортировать для использования в других скриптах
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DataStorage;
}
