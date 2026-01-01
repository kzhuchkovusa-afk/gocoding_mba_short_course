# ✅ Восстановление двуязычности - Статус выполнения

## 🎯 Что сделано

### 1. ✅ Восстановлен переключатель языков
- Добавлена кнопка EN/RU в навигацию
- Раскомментирован `language.js` скрипт
- Добавлены `data-i18n` атрибуты для навигации

### 2. ✅ Обновлены файлы переводов

#### `js/translations-en.json` - добавлены секции:
- **pricing**: Progressive Pricing Structure (полная секция)
  - progressiveTitle, progressiveSubtitle
  - tier1-tier5 (все тарифы)
  - monthlyBadge/Title/Price/Period/Note/Features/Button
  - quarterlyBadge/Title/Price/Period/Note/Features/Button
  - valueTitle/Hourly/ROI/Compare
  - benefitsTitle + benefit1-6 (Title + Text)
  - benefitsNote

- **schedule**: Choose Your Learning Format
  - locationTitle
  - location1, location2, locationOnline
  - locationNote

#### `js/translations-ru.json` - добавлены те же секции:
- Качественный перевод всех ключей
- Адаптация под русскую аудиторию
- Сохранение эмодзи и форматирования

### 3. 📂 Вспомогательные файлы созданы:
- `new-translations-additions.json` - английские переводы для справки
- `new-translations-additions-ru.json` - русские переводы для справки

## ⚠️ Что нужно завершить

### 1. Добавить обработку в `language.js`

Нужно добавить функцию для применения переводов к новым секциям. В файл `js/language.js` в функцию `applyManualTranslations()` добавить:

```javascript
// Pricing Section - Progressive Pricing
const pricingSection = document.querySelector('.pricing-section');
if (pricingSection && t.pricing) {
    // Progressive Pricing Alert
    const pricingAlert = pricingSection.querySelector('.pricing-alert');
    if (pricingAlert) {
        const alertTitle = pricingAlert.querySelector('.alert-content h3');
        const alertSubtitle = pricingAlert.querySelector('.alert-subtitle');
        const alertNote = pricingAlert.querySelector('.alert-note');
        
        if (alertTitle) alertTitle.textContent = t.pricing.progressiveTitle;
        if (alertSubtitle) alertSubtitle.textContent = t.pricing.progressiveSubtitle;
        if (alertNote) alertNote.innerHTML = t.pricing.alertNote;
        
        // Pricing Tiers
        const tiers = pricingAlert.querySelectorAll('.tier');
        if (tiers[0]) {
            tiers[0].querySelector('.tier-spots').textContent = t.pricing.tier1;
            tiers[0].querySelector('.tier-price').textContent = t.pricing.tier1Price;
            const status = tiers[0].querySelector('.tier-status');
            if (status) status.textContent = t.pricing.tier1Status;
        }
        if (tiers[1]) {
            tiers[1].querySelector('.tier-spots').textContent = t.pricing.tier2;
            tiers[1].querySelector('.tier-price').textContent = t.pricing.tier2Price;
        }
        if (tiers[2]) {
            tiers[2].querySelector('.tier-spots').textContent = t.pricing.tier3;
            tiers[2].querySelector('.tier-price').textContent = t.pricing.tier3Price;
        }
        if (tiers[3]) {
            tiers[3].querySelector('.tier-spots').textContent = t.pricing.tier4;
            tiers[3].querySelector('.tier-price').textContent = t.pricing.tier4Price;
        }
        if (tiers[4]) {
            tiers[4].querySelector('.tier-spots').textContent = t.pricing.tier5;
            tiers[4].querySelector('.tier-price').textContent = t.pricing.tier5Price;
        }
    }
    
    // Pricing Cards
    const pricingCards = pricingSection.querySelectorAll('.pricing-card');
    if (pricingCards[0]) { // Monthly card
        const badge = pricingCards[0].querySelector('.pricing-badge');
        const title = pricingCards[0].querySelector('h3');
        const price = pricingCards[0].querySelector('.price-amount');
        const period = pricingCards[0].querySelector('.price-period');
        const note = pricingCards[0].querySelector('.price-note');
        const button = pricingCards[0].querySelector('.btn span');
        
        if (badge) badge.textContent = t.pricing.monthlyBadge;
        if (title) title.textContent = t.pricing.monthlyTitle;
        if (price) price.textContent = t.pricing.monthlyPrice;
        if (period) period.textContent = t.pricing.monthlyPeriod;
        if (note) note.textContent = t.pricing.monthlyNote;
        if (button) button.textContent = t.pricing.monthlyButton;
        
        const features = pricingCards[0].querySelectorAll('.pricing-features li span');
        if (features[0]) features[0].textContent = t.pricing.monthlyFeature1;
        if (features[1]) features[1].textContent = t.pricing.monthlyFeature2;
        if (features[2]) features[2].textContent = t.pricing.monthlyFeature3;
        if (features[3]) features[3].innerHTML = t.pricing.monthlyFeature4;
    }
    
    if (pricingCards[1]) { // Quarterly card
        const badge = pricingCards[1].querySelector('.pricing-badge');
        const title = pricingCards[1].querySelector('h3');
        const price = pricingCards[1].querySelector('.price-amount');
        const period = pricingCards[1].querySelector('.price-period');
        const note = pricingCards[1].querySelector('.price-note');
        const button = pricingCards[1].querySelector('.btn span');
        
        if (badge) badge.textContent = t.pricing.quarterlyBadge;
        if (title) title.textContent = t.pricing.quarterlyTitle;
        if (price) price.textContent = t.pricing.quarterlyPrice;
        if (period) period.textContent = t.pricing.quarterlyPeriod;
        if (note) note.textContent = t.pricing.quarterlyNote;
        if (button) button.textContent = t.pricing.quarterlyButton;
        
        const features = pricingCards[1].querySelectorAll('.pricing-features li span');
        if (features[0]) features[0].textContent = t.pricing.quarterlyFeature1;
        if (features[1]) features[1].textContent = t.pricing.quarterlyFeature2;
        if (features[2]) features[2].textContent = t.pricing.quarterlyFeature3;
        if (features[3]) features[3].innerHTML = t.pricing.quarterlyFeature4;
    }
    
    // Value Breakdown
    const valueSection = pricingSection.querySelector('.value-breakdown-section');
    if (valueSection) {
        const title = valueSection.querySelector('.breakdown-title');
        if (title) title.textContent = t.pricing.valueTitle;
        
        const cards = valueSection.querySelectorAll('.breakdown-card');
        if (cards[0]) {
            cards[0].querySelector('.breakdown-number').textContent = t.pricing.valueHourly;
            cards[0].querySelector('.breakdown-label').textContent = t.pricing.valueHourlyLabel;
            cards[0].querySelector('.breakdown-desc').textContent = t.pricing.valueHourlyDesc;
        }
        if (cards[1]) {
            cards[1].querySelector('.breakdown-number').textContent = t.pricing.valueROI;
            cards[1].querySelector('.breakdown-label').textContent = t.pricing.valueROILabel;
            cards[1].querySelector('.breakdown-desc').textContent = t.pricing.valueROIDesc;
        }
        
        const compare = valueSection.querySelector('.breakdown-comparison p:first-child');
        if (compare) compare.innerHTML = t.pricing.valueCompare;
        
        const comparisonItems = valueSection.querySelectorAll('.comparison-item');
        if (comparisonItems[0]) {
            comparisonItems[0].querySelector('.comparison-service').textContent = t.pricing.valueTutoring;
            comparisonItems[0].querySelector('.comparison-price').textContent = t.pricing.valueTutoringPrice;
        }
        if (comparisonItems[1]) {
            comparisonItems[1].querySelector('.comparison-service').textContent = t.pricing.valueBootcamp;
            comparisonItems[1].querySelector('.comparison-price').textContent = t.pricing.valueBootcampPrice;
        }
        if (comparisonItems[2]) {
            comparisonItems[2].querySelector('.comparison-service').textContent = t.pricing.valueMBA;
            comparisonItems[2].querySelector('.comparison-price').textContent = t.pricing.valueMBAPrice;
        }
        
        const compareNote = valueSection.querySelector('.comparison-note');
        if (compareNote) compareNote.innerHTML = t.pricing.valueNote;
    }
    
    // Benefits List
    const benefitsBreakdown = pricingSection.querySelector('.breakdown-benefits');
    if (benefitsBreakdown) {
        const benefitsTitle = benefitsBreakdown.querySelector('h4');
        if (benefitsTitle) benefitsTitle.textContent = t.pricing.benefitsTitle;
        
        const benefits = benefitsBreakdown.querySelectorAll('.benefit-item');
        for (let i = 0; i < benefits.length; i++) {
            const strong = benefits[i].querySelector('strong');
            const div = benefits[i].querySelector('div');
            const titleKey = 'benefit' + (i+1) + 'Title';
            const textKey = 'benefit' + (i+1) + 'Text';
            
            if (strong && t.pricing[titleKey]) strong.textContent = t.pricing[titleKey];
            if (div && t.pricing[textKey]) {
                div.innerHTML = `<strong>${t.pricing[titleKey]}</strong> — ${t.pricing[textKey]}`;
            }
        }
        
        const benefitsNote = benefitsBreakdown.querySelector('.benefits-note');
        if (benefitsNote) benefitsNote.innerHTML = t.pricing.benefitsNote;
    }
}

// Schedule/Location Section
const scheduleLocation = document.querySelector('.schedule-location');
if (scheduleLocation && t.schedule) {
    const locationTitle = scheduleLocation.querySelector('.location-info h4');
    if (locationTitle) locationTitle.textContent = t.schedule.locationTitle;
    
    const locationOptions = scheduleLocation.querySelectorAll('.location-option');
    if (locationOptions[0]) locationOptions[0].querySelector('div').innerHTML = t.schedule.location1;
    if (locationOptions[1]) locationOptions[1].querySelector('div').innerHTML = t.schedule.location2;
    if (locationOptions[2]) locationOptions[2].querySelector('div').innerHTML = t.schedule.locationOnline;
    
    const locationNote = scheduleLocation.querySelector('.location-note');
    if (locationNote) locationNote.textContent = t.schedule.locationNote;
}
```

### 2. Где добавить код

Откройте файл `js/language.js`, найдите функцию `applyManualTranslations()` и добавьте этот код **ПЕРЕД** закрывающей скобкой функции (перед строкой с `}`).

### 3. Тестирование

После добавления кода:
1. Откройте `index.html` в браузере
2. Нажмите кнопку **RU** в навигации
3. Проверьте, что переводятся:
   - Навигационное меню
   - Секция Progressive Pricing
   - Pricing Cards (Monthly/Quarterly)
   - Value Breakdown
   - Benefits List
   - Location Options

## 📋 Чек-лист проверки

- [ ] Навигация переводится (Program, Results, etc.)
- [ ] Progressive Pricing Title переводится
- [ ] Все 5 тарифов переводятся
- [ ] Monthly Payment карточка переводится
- [ ] 3-Month Payment карточка переводится
- [ ] Value Breakdown переводится
- [ ] Benefits List переводится (все 6 пунктов)
- [ ] Location Options переводятся
- [ ] При переключении EN → RU и обратно всё работает
- [ ] Нет ошибок в консоли браузера

## 🔧 Если возникли проблемы

### Проблема: Переводы не применяются
**Решение**: Откройте консоль браузера (F12) и проверьте наличие ошибок JavaScript.

### Проблема: Некоторые элементы не переводятся
**Решение**: Убедитесь, что CSS селекторы в коде совпадают с реальной структурой HTML.

### Проблема: При переключении языка страница прыгает
**Решение**: Это нормально, добавьте `scroll-behavior: smooth;` в CSS если нужно.

## 📚 Дополнительная информация

### Структура переводов:
- `translations-en.json` - английский (по умолчанию)
- `translations-ru.json` - русский
- `language.js` - логика переключения языков
- Переводы сохраняются в `localStorage` (ключ: 'mba-language')

### Новые секции добавлены:
1. **pricing** - 40+ ключей перевода
2. **schedule** - 4 ключа перевода

---

**Статус**: 90% завершено  
**Осталось**: Добавить JavaScript код для применения переводов  
**Время**: ~15 минут на добавление кода и тестирование

**Дата**: 24 декабря 2024  
**Версия**: 2.0.0 (с двуязычностью)
