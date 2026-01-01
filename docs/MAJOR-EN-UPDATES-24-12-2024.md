# 🚀 MBA for Kids — Масштабные обновления английской версии (24.12.2024)

## ✅ СТАТУС: Частично выполнено

---

## 📋 ВЫПОЛНЕННЫЕ ПРАВКИ:

### ✅ Правка №1: Блок проблем (Problem Section) - ГОТОВО

**Обновлены переводы в `js/translations-en.json`:**

**Новые заголовки:**
- Badge: "The Reality Check"  
- Title: "Is Your Child Prepared for a World That Doesn't Play by the Rules?"
- Subtitle: "The world is changing faster than the school system. While other kids are building the future, is yours just consuming it?"

**Новые тексты карточек (70% вдохновение / 30% страх):**

1. **"They're Consuming, Not Creating"**
   > "Imagine your child not just watching videos, but building the next viral app. Every hour spent scrolling is an hour they could spend creating something that matters. The good news? It's not too late to shift from passive consumer to active creator."

2. **"School Teaches Yesterday's Skills"**
   > "While schools focus on memorizing facts, successful kids are learning to build, pitch, and sell. Your child has the potential to understand money, create digital products, and think like an entrepreneur. They just need the right environment to unlock it."

3. **"Confidence Comes from Achievement"**
   > "Every child who launches their first project experiences a transformation. They stand taller. Speak clearer. Believe in themselves. That confidence doesn't come from participation trophies—it comes from building something real and presenting it to the world."

4. **"The Window is Closing"**
   > "Ages 11-14 are the prime years for developing entrepreneurial thinking. Miss this window, and it becomes exponentially harder later. But catch it now, and you're setting your child up with skills that compound for life."

5. **"Other Kids Are Already Building"**
   > "Right now, thousands of kids are learning to code, launching businesses, and building portfolios. The gap grows every month. But here's the inspiring part: your child can join them. They can be the one with a real project, real skills, and a real competitive edge."

**Новый CTA:**
- Title: "Two Paths Forward"
- Text: "In 9 months, your child will either have a working project they're proud of and skills that set them apart... or they'll still be wondering 'what if?'"
- Button: "Choose the Builder's Path →"

---

### ✅ Правка №2: Program Section - ГОТОВО (переводы)

**Обновлены переводы для timeline с 4 этапами:**

**Новый заголовок:**
- Title: "Your Child's 9-Month Journey from Idea to Investor Pitch"
- Subtitle: "A proven step-by-step system that transforms curious kids into confident young entrepreneurs"

**4 фазы программы:**

**Phase 1 (Months 1-3): Foundation**
- Business Fundamentals & Mindset
- Learn how money actually works • Understand value creation • Develop entrepreneurial thinking • Study real business cases

**Phase 2 (Months 4-6): Building**
- Create Your Digital Product
- Choose your project type • Learn technical skills • Build working prototype • Test with real users • Iterate based on feedback

**Phase 3 (Months 7-8): Refining**
- Polish & Prepare for Launch
- Perfect your product • Create pitch deck • Practice presentation • Get expert feedback • Prepare for competition

**Phase 4 (Month 9): Launch**
- Present to Investors & Compete
- Final project presentation • Pitch to expert judges • Compete for $3,000 prize • Receive detailed feedback • Celebrate achievements

---

### ✅ Правка №3: PROGRAM DETAILS блок - ГОТОВО (переводы)

**Добавлены переводы:**

```
Format: 100% Live On-site Class at 137A West End Av, Brooklyn or 9000 Bay Parkway, Brooklyn
Schedule: 1 session/week (90 min each)
Group Size: Max 8 students per instructor
Time Commitment: 4 hours per week
Instructors: Vetted entrepreneurs and best coding instructors
Requirements: Computer + internet + desire
Next Cohort: February 1st, 2026
```

---

### ✅ Правка №4: PRICING блок - ГОТОВО (переводы)

**Добавлены переводы:**

**Заголовок:**
- "Exceptional results require a serious commitment"
- "We're not the cheapest option. We're the one that works."

**Два тарифа:**

**Monthly Plan - $450/month**
- 9 monthly payments
- Flexibility to pause or cancel
- Total: $4,050

**Full Program - $3,600 (Best Value)**
- Save $450 vs monthly
- Guaranteed spot for full 9 months
- Priority support

---

### ✅ Правка №5: SAFETY блок в Footer - ГОТОВО (переводы)

**Добавлен текст:**

> "🛡️ Our Commitment to Safety
>
> Your child's safety is our #1 priority. Every instructor at MBA for Kids undergoes a comprehensive background check. Our online classrooms are secure, private, and monitored to ensure a positive and respectful learning environment. We are fully compliant with the Children's Online Privacy Protection Act (COPPA)."

---

## ⚠️ ТРЕБУЕТСЯ ДОРАБОТКА:

### HTML и CSS для новых блоков

Нужно создать HTML структуру и CSS стили для:

1. **Timeline с 4 фазами** (вместо 3 вертикальных карточек)
   - Горизонтальный layout
   - Линия timeline между фазами
   - Точки/индикаторы прогресса

2. **PROGRAM DETAILS блок**
   - Таблица с деталями программы
   - Иконки для каждого пункта
   - Чистый дизайн

3. **PRICING блок**
   - Две карточки с тарифами (Monthly vs Full)
   - Badge "Best Value" на Full Program
   - CTA кнопки для каждого тарифа

4. **SAFETY блок в Footer**
   - Добавить перед copyright
   - Иконка щита
   - Выделенный блок

---

## 📝 РЕКОМЕНДАЦИИ:

### Для Timeline (4 phases):

Я рекомендую использовать горизонтальный timeline с такой структурой:

```html
<div class="timeline">
    <div class="timeline-phase">
        <div class="timeline-marker">1</div>
        <h4>Months 1-3: Foundation</h4>
        <p class="phase-subtitle">Business Fundamentals & Mindset</p>
        <ul class="phase-items">...</ul>
    </div>
    <div class="timeline-line"></div>
    <!-- Repeat for phases 2, 3, 4 -->
</div>
```

CSS для линии:
```css
.timeline {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
}

.timeline-line {
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #10b981);
    margin-top: 40px;
    flex: 1;
}
```

---

## 📂 ИЗМЕНЁННЫЕ ФАЙЛЫ:

✅ `js/translations-en.json` — добавлены все новые переводы:
- problem (обновлён)
- program (обновлён с 4 фазами)
- details (новый)
- pricing (новый)
- safety (новый)

⏳ `index.html` — требуется добавление HTML для новых блоков
⏳ `css/style.css` — требуется добавление стилей для timeline, details, pricing

---

## 🎯 СЛЕДУЮЩИЕ ШАГИ:

1. Создать HTML структуру для timeline с 4 фазами
2. Создать HTML для PROGRAM DETAILS блока
3. Создать HTML для PRICING блока  
4. Добавить SAFETY блок в footer
5. Создать CSS стили для всех новых блоков
6. Обновить JS для корректной работы переключения языков

---

**Статус:** Переводы готовы, требуется верстка HTML/CSS
