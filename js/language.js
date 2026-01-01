// ===========================
// Language Switcher
// ===========================

// Default to English (clean URL always shows English)
let currentLang = 'en';
let translations = {};

// Load translations
async function loadTranslations(lang) {
    try {
        const response = await fetch(`js/translations-${lang}.json`);
        translations = await response.json();
        applyTranslations();
        updateLanguageButtons(lang);
        currentLang = lang;
        localStorage.setItem('mba-language', lang);
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

// Apply translations to the page
function applyTranslations() {
    // Translate elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let value = translations;
        
        for (const key of keys) {
            value = value[key];
            if (!value) break;
        }
        
        if (value) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = value;
            } else {
                element.innerHTML = value;
            }
        }
    });
    
    // Apply manual translations based on selectors
    applyManualTranslations();
    
    // Update document language attribute
    document.documentElement.lang = currentLang;
}

// Manual translations for elements without data-i18n
function applyManualTranslations() {
    const t = translations;
    
    // Pre-Hero Sections
    if (t.preHero) {
        // Main Headline
        const mainHeadline = document.querySelector('.main-headline');
        const headlineSubtext = document.querySelector('.headline-subtext');
        if (mainHeadline) mainHeadline.textContent = t.preHero.mainHeadline;
        if (headlineSubtext) headlineSubtext.textContent = t.preHero.mainSubtext;
        
        // Subheadlines
        const subheadlineItems = document.querySelectorAll('.subheadline-item');
        if (subheadlineItems[0]) {
            subheadlineItems[0].innerHTML = '<strong>' + t.preHero.subheadline1.split(' who')[0].replace('If you\'re a parent', '') + '</strong> who' + t.preHero.subheadline1.split(' who')[1];
        }
        if (subheadlineItems[1]) {
            subheadlineItems[1].innerHTML = '<strong>' + t.preHero.subheadline2.split(' of')[0].replace('If you\'re tired', '') + '</strong> of' + t.preHero.subheadline2.split(' of')[1];
        }
        if (subheadlineItems[2]) {
            subheadlineItems[2].innerHTML = '<strong>' + t.preHero.subheadline3.split(' so')[0].replace('And if you\'re ready to invest', '') + '</strong> so' + t.preHero.subheadline3.split(' so')[1];
        }
        
        const subheadlineConclusion = document.querySelector('.subheadline-conclusion');
        const subheadlineIntro = document.querySelector('.subheadline-intro');
        if (subheadlineConclusion) subheadlineConclusion.textContent = t.preHero.conclusion;
        if (subheadlineIntro) subheadlineIntro.textContent = t.preHero.intro;
        
        // Story Block
        const storyHeader = document.querySelector('.story-header span');
        const storyTitle = document.querySelector('.story-title');
        const storyParagraphs = document.querySelectorAll('.story-paragraph');
        const storyListItems = document.querySelectorAll('.story-list li');
        
        if (storyHeader) storyHeader.textContent = t.preHero.storyBadge;
        if (storyTitle) storyTitle.textContent = t.preHero.storyTitle;
        
        if (storyParagraphs[0]) storyParagraphs[0].textContent = t.preHero.storyP1;
        if (storyParagraphs[1]) storyParagraphs[1].textContent = t.preHero.storyP2;
        if (storyParagraphs[2]) storyParagraphs[2].textContent = t.preHero.storyP3;
        if (storyParagraphs[3]) storyParagraphs[3].innerHTML = '<strong>' + t.preHero.storyP4 + '</strong>';
        if (storyParagraphs[4]) storyParagraphs[4].textContent = t.preHero.storyP5;
        
        if (storyListItems[0]) storyListItems[0].textContent = t.preHero.storyItem1;
        if (storyListItems[1]) storyListItems[1].textContent = t.preHero.storyItem2;
        if (storyListItems[2]) storyListItems[2].textContent = t.preHero.storyItem3;
        if (storyListItems[3]) storyListItems[3].textContent = t.preHero.storyItem4;
        
        const quoteText = document.querySelector('.quote-text');
        const quoteMain = document.querySelector('.quote-main');
        const quoteAuthor = document.querySelector('.quote-author');
        const storyConclusion = document.querySelector('.story-conclusion');
        
        if (quoteText) quoteText.textContent = t.preHero.quoteIntro;
        if (quoteMain) quoteMain.textContent = t.preHero.quoteMain;
        if (quoteAuthor) quoteAuthor.textContent = t.preHero.quoteAuthor;
        if (storyConclusion) storyConclusion.textContent = t.preHero.storyConclusion;
    }
    
    // Hero Section
    const heroSection = document.querySelector('.hero');
    if (heroSection && t.hero) {
        const heroBadge = heroSection.querySelector('.hero-badge span');
        const heroTitle = heroSection.querySelector('.hero-title');
        const heroSubtitles = heroSection.querySelectorAll('.hero-subtitle');
        const heroCTA = heroSection.querySelector('.hero-cta .btn span');
        
        if (heroBadge) heroBadge.textContent = t.hero.badge;
        if (heroTitle) heroTitle.innerHTML = t.hero.title;
        if (heroSubtitles[0]) heroSubtitles[0].textContent = t.hero.subtitle1;
        if (heroSubtitles[1]) heroSubtitles[1].textContent = t.hero.subtitle2;
        if (heroCTA) heroCTA.textContent = t.hero.cta;
        
        // Stats
        const stats = heroSection.querySelectorAll('.stat-item');
        if (stats[0]) {
            const number = stats[0].querySelector('.stat-number');
            const label = stats[0].querySelector('.stat-label');
            if (number) number.textContent = t.hero.stat1;
            if (label) label.textContent = t.hero.stat1Label;
        }
        if (stats[1]) {
            const number = stats[1].querySelector('.stat-number');
            const label = stats[1].querySelector('.stat-label');
            if (number) number.textContent = t.hero.stat2;
            if (label) label.textContent = t.hero.stat2Label;
        }
        if (stats[2]) {
            const number = stats[2].querySelector('.stat-number');
            const label = stats[2].querySelector('.stat-label');
            if (number) number.textContent = t.hero.stat3;
            if (label) label.textContent = t.hero.stat3Label;
        }
    }
    
    // Problem Section
    const problemSection = document.querySelector('.problem-section');
    if (problemSection && t.problem) {
        const badge = problemSection.querySelector('.section-badge');
        const title = problemSection.querySelector('.section-header h2');
        if (badge) badge.textContent = t.problem.badge;
        if (title) title.textContent = t.problem.title;
        
        const cards = problemSection.querySelectorAll('.problem-card');
        if (cards[0]) {
            cards[0].querySelector('h3').textContent = t.problem.card1Title;
            cards[0].querySelector('p').textContent = t.problem.card1Text;
        }
        if (cards[1]) {
            cards[1].querySelector('h3').textContent = t.problem.card2Title;
            cards[1].querySelector('p').textContent = t.problem.card2Text;
        }
        if (cards[2]) {
            cards[2].querySelector('h3').textContent = t.problem.card3Title;
            cards[2].querySelector('p').textContent = t.problem.card3Text;
        }
        if (cards[3]) {
            cards[3].querySelector('h3').textContent = t.problem.card4Title;
            cards[3].querySelector('p').textContent = t.problem.card4Text;
        }
        if (cards[4]) {
            cards[4].querySelector('h3').textContent = t.problem.card5Title;
            cards[4].querySelector('p').textContent = t.problem.card5Text;
        }
        
        const ctaBox = problemSection.querySelector('.cta-box');
        if (ctaBox) {
            ctaBox.querySelector('h3').textContent = t.problem.ctaTitle;
            ctaBox.querySelector('p').textContent = t.problem.ctaText;
            ctaBox.querySelector('.btn').textContent = t.problem.ctaButton;
        }
    }
    
    // Results Section
    const resultsSection = document.querySelector('.results-section');
    if (resultsSection && t.results) {
        const badge = resultsSection.querySelector('.section-badge');
        const title = resultsSection.querySelector('.section-header h2');
        const subtitle = resultsSection.querySelector('.section-header p');
        if (badge) badge.textContent = t.results.badge;
        if (title) title.textContent = t.results.title;
        if (subtitle) subtitle.textContent = t.results.subtitle;
        
        const cards = resultsSection.querySelectorAll('.result-card');
        if (cards[0]) {
            cards[0].querySelector('h3').textContent = t.results.card1Title;
            cards[0].querySelector('p').textContent = t.results.card1Text;
            const badge1 = cards[0].querySelector('.result-badge');
            if (badge1) badge1.textContent = t.results.card1Badge;
        }
        if (cards[1]) {
            cards[1].querySelector('h3').textContent = t.results.card2Title;
            cards[1].querySelector('p').textContent = t.results.card2Text;
        }
        if (cards[2]) {
            cards[2].querySelector('h3').textContent = t.results.card3Title;
            cards[2].querySelector('p').textContent = t.results.card3Text;
        }
        if (cards[3]) {
            cards[3].querySelector('h3').textContent = t.results.card4Title;
            cards[3].querySelector('p').textContent = t.results.card4Text;
        }
        if (cards[4]) {
            cards[4].querySelector('h3').textContent = t.results.card5Title;
            cards[4].querySelector('p').textContent = t.results.card5Text;
        }
        if (cards[5]) {
            cards[5].querySelector('h3').textContent = t.results.card6Title;
            cards[5].querySelector('p').textContent = t.results.card6Text;
        }
        if (cards[6]) {
            cards[6].querySelector('h3').textContent = t.results.card7Title;
            cards[6].querySelector('p').textContent = t.results.card7Text;
            const badge7 = cards[6].querySelector('.result-badge');
            if (badge7) badge7.textContent = t.results.card7Badge;
        }
    }
    
    // Program Section
    const programSection = document.querySelector('.program-section');
    if (programSection && t.program) {
        const badge = programSection.querySelector('.section-badge');
        const title = programSection.querySelector('.section-header h2');
        const subtitle = programSection.querySelector('.section-header p');
        if (badge) badge.textContent = t.program.badge;
        if (title) title.textContent = t.program.title;
        if (subtitle) subtitle.textContent = t.program.subtitle;
        
        const steps = programSection.querySelectorAll('.step-card');
        if (steps[0]) {
            steps[0].querySelector('h3').textContent = t.program.step1Title;
            const desc = steps[0].querySelector('.step-description');
            desc.querySelector('p').textContent = t.program.step1Subtitle;
            const items = desc.querySelectorAll('li');
            if (items[0]) items[0].childNodes[1].textContent = ' ' + t.program.step1Item1;
            if (items[1]) items[1].childNodes[1].textContent = ' ' + t.program.step1Item2;
            if (items[2]) items[2].childNodes[1].textContent = ' ' + t.program.step1Item3;
            const result = desc.querySelector('.step-result');
            if (result && t.program.step1Result) {
                const resultLabel = currentLang === 'en' ? 'Your outcome:' : 'Результат:';
                result.innerHTML = '<strong>' + resultLabel + '</strong> ' + t.program.step1Result.replace('Your outcome: ', '').replace('Результат: ', '').replace('Result: ', '');
            }
        }
        if (steps[1]) {
            steps[1].querySelector('h3').textContent = t.program.step2Title;
            const desc = steps[1].querySelector('.step-description');
            desc.querySelector('p').textContent = t.program.step2Subtitle;
            const items = desc.querySelectorAll('li');
            if (items[0]) items[0].childNodes[1].textContent = ' ' + t.program.step2Item1;
            if (items[1]) items[1].childNodes[1].textContent = ' ' + t.program.step2Item2;
            if (items[2]) items[2].childNodes[1].textContent = ' ' + t.program.step2Item3;
            const result = desc.querySelector('.step-result');
            if (result && t.program.step2Result) {
                const resultLabel = currentLang === 'en' ? 'Your outcome:' : 'Результат:';
                result.innerHTML = '<strong>' + resultLabel + '</strong> ' + t.program.step2Result.replace('Your outcome: ', '').replace('Результат: ', '').replace('Result: ', '').replace('Outcome: ', '');
            }
        }
        if (steps[2]) {
            steps[2].querySelector('h3').textContent = t.program.step3Title;
            const desc = steps[2].querySelector('.step-description');
            desc.querySelector('p').textContent = t.program.step3Subtitle;
            const items = desc.querySelectorAll('li');
            if (items[0]) items[0].childNodes[1].textContent = ' ' + t.program.step3Item1;
            if (items[1]) items[1].childNodes[1].textContent = ' ' + t.program.step3Item2;
            if (items[2]) items[2].childNodes[1].textContent = ' ' + t.program.step3Item3;
            const result = desc.querySelector('.step-result');
            if (result && t.program.step3Result) {
                const resultLabel = currentLang === 'en' ? 'Your outcome:' : 'Результат:';
                result.innerHTML = '<strong>' + resultLabel + '</strong> ' + t.program.step3Result.replace('Your outcome: ', '').replace('Результат: ', '').replace('Result: ', '').replace('Outcome: ', '');
            }
        }
    }
    
    // Skills Section
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection && t.skills) {
        const badge = skillsSection.querySelector('.section-badge');
        const title = skillsSection.querySelector('.section-header h2');
        if (badge) badge.textContent = t.skills.badge;
        if (title) title.textContent = t.skills.title;
        
        const skills = skillsSection.querySelectorAll('.skill-card h4');
        const skillKeys = ['skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6', 
                          'skill7', 'skill8', 'skill9', 'skill10', 'skill11', 'skill12'];
        skills.forEach((skill, index) => {
            if (t.skills[skillKeys[index]]) {
                skill.textContent = t.skills[skillKeys[index]];
            }
        });
    }
    
    // Benefits Section
    const benefitsSection = document.querySelector('.benefits-section');
    if (benefitsSection && t.benefits) {
        const badge = benefitsSection.querySelector('.section-badge');
        const title = benefitsSection.querySelector('.section-header h2');
        if (badge) badge.textContent = t.benefits.badge;
        if (title) title.textContent = t.benefits.title;
        
        const cards = benefitsSection.querySelectorAll('.benefit-card');
        if (cards[0]) {
            cards[0].querySelector('h3').textContent = t.benefits.card1Title;
            cards[0].querySelector('p').textContent = t.benefits.card1Text;
            const items = cards[0].querySelectorAll('li');
            if (items[0]) items[0].textContent = t.benefits.card1Item1;
            if (items[1]) items[1].textContent = t.benefits.card1Item2;
            if (items[2]) items[2].textContent = t.benefits.card1Item3;
            if (items[3]) items[3].textContent = t.benefits.card1Item4;
        }
        if (cards[1]) {
            cards[1].querySelector('h3').textContent = t.benefits.card2Title;
            cards[1].querySelector('p').textContent = t.benefits.card2Text;
        }
        if (cards[2]) {
            cards[2].querySelector('h3').textContent = t.benefits.card3Title;
            cards[2].querySelector('p').textContent = t.benefits.card3Text;
        }
        if (cards[3]) {
            cards[3].querySelector('h3').textContent = t.benefits.card4Title;
            cards[3].querySelector('p').textContent = t.benefits.card4Text;
        }
    }
    
    // Value Section
    const valueSection = document.querySelector('.value-section');
    if (valueSection && t.value) {
        const badge = valueSection.querySelector('.section-badge');
        const title = valueSection.querySelector('.value-left h2');
        const intro = valueSection.querySelector('.value-intro');
        if (badge) badge.textContent = t.value.badge;
        if (title) title.textContent = t.value.title;
        if (intro) intro.textContent = t.value.intro;
        
        const items = valueSection.querySelectorAll('.value-item span');
        if (items[0]) items[0].textContent = t.value.item1;
        if (items[1]) items[1].textContent = t.value.item2;
        if (items[2]) items[2].textContent = t.value.item3;
        if (items[3]) items[3].textContent = t.value.item4;
        
        const boxTitle = valueSection.querySelector('.value-box h3');
        if (boxTitle) boxTitle.textContent = t.value.boxTitle;
        
        const points = valueSection.querySelectorAll('.value-point');
        if (points[0]) {
            points[0].querySelector('strong').textContent = t.value.point1Title;
            points[0].querySelector('p').textContent = t.value.point1Text;
        }
        if (points[1]) {
            points[1].querySelector('strong').textContent = t.value.point2Title;
            points[1].querySelector('p').textContent = t.value.point2Text;
        }
        if (points[2]) {
            points[2].querySelector('strong').textContent = t.value.point3Title;
            points[2].querySelector('p').textContent = t.value.point3Text;
        }
        
        const result = valueSection.querySelector('.value-result');
        if (result) result.innerHTML = '<strong>MBA for Kids:</strong> ' + t.value.result.replace('MBA for Kids: ', '');
    }
    
    // Guarantee Section
    const guaranteeSection = document.querySelector('.guarantee-section');
    if (guaranteeSection && t.guarantee) {
        const title = guaranteeSection.querySelector('h2');
        const text = guaranteeSection.querySelector('.guarantee-text');
        const content = guaranteeSection.querySelector('.guarantee-content p');
        const highlight = guaranteeSection.querySelector('.guarantee-highlight');
        if (title) title.textContent = t.guarantee.title;
        if (text) text.innerHTML = t.guarantee.text;
        if (content) content.innerHTML = t.guarantee.content1;
        if (highlight) highlight.textContent = t.guarantee.highlight;
    }
    
    // Bonuses Section
    const bonusesSection = document.querySelector('.bonuses-section');
    if (bonusesSection && t.bonuses) {
        const badge = bonusesSection.querySelector('.section-badge');
        const title = bonusesSection.querySelector('.section-header h2');
        const subtitle = bonusesSection.querySelector('.bonuses-deadline');
        if (badge) badge.textContent = t.bonuses.badge;
        if (title) title.textContent = t.bonuses.title;
        if (subtitle) subtitle.textContent = t.bonuses.subtitle;
        
        const cards = bonusesSection.querySelectorAll('.bonus-card');
        if (cards[0]) {
            cards[0].querySelector('h3').textContent = t.bonuses.card1Title;
            cards[0].querySelector('p').textContent = t.bonuses.card1Text;
        }
        if (cards[1]) {
            cards[1].querySelector('h3').textContent = t.bonuses.card2Title;
            cards[1].querySelector('p').textContent = t.bonuses.card2Text;
        }
        if (cards[2]) {
            cards[2].querySelector('h3').textContent = t.bonuses.card3Title;
            cards[2].querySelector('p').textContent = t.bonuses.card3Text;
        }
        if (cards[3]) {
            cards[3].querySelector('h3').textContent = t.bonuses.card4Title;
            cards[3].querySelector('p').textContent = t.bonuses.card4Text;
        }
    }
    
    // Pricing Section
    const pricingSection = document.querySelector('.pricing-section');
    if (pricingSection && t.pricing) {
        const badge = pricingSection.querySelector('.section-badge');
        const title = pricingSection.querySelector('.section-header h2');
        const subtitle = pricingSection.querySelector('.section-header p');
        if (badge) badge.textContent = t.pricing.badge;
        if (title) title.textContent = t.pricing.title;
        if (subtitle) subtitle.textContent = t.pricing.subtitle;
    }
    
    // Pricing Section - Progressive Pricing Alert
    const pricingAlert = document.querySelector('.pricing-alert');
    if (pricingAlert && t.pricing) {
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
    const pricingCards = document.querySelectorAll('.pricing-card');
    if (pricingCards.length > 0 && t.pricing) {
        // Monthly card
        if (pricingCards[0]) {
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
        
        // Quarterly card
        if (pricingCards[1]) {
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
    }
    
    // Value Breakdown
    const valueBreakdown = document.querySelector('.value-breakdown-section');
    if (valueBreakdown && t.pricing) {
        const title = valueBreakdown.querySelector('.breakdown-title');
        if (title) title.textContent = t.pricing.valueTitle;
        
        const cards = valueBreakdown.querySelectorAll('.breakdown-card');
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
        
        const compare = valueBreakdown.querySelector('.breakdown-comparison p:first-child');
        if (compare) compare.innerHTML = t.pricing.valueCompare;
        
        const comparisonItems = valueBreakdown.querySelectorAll('.comparison-item');
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
        
        const compareNote = valueBreakdown.querySelector('.comparison-note');
        if (compareNote) compareNote.innerHTML = t.pricing.valueNote;
    }
    
    // Benefits List (What Average Student Gets)
    const benefitsBreakdown = document.querySelector('.breakdown-benefits');
    if (benefitsBreakdown && t.pricing) {
        const benefitsTitle = benefitsBreakdown.querySelector('h4');
        if (benefitsTitle) benefitsTitle.textContent = t.pricing.benefitsTitle;
        
        const benefits = benefitsBreakdown.querySelectorAll('.benefit-item');
        for (let i = 0; i < benefits.length && i < 6; i++) {
            const div = benefits[i].querySelector('div');
            const titleKey = 'benefit' + (i+1) + 'Title';
            const textKey = 'benefit' + (i+1) + 'Text';
            
            if (div && t.pricing[titleKey] && t.pricing[textKey]) {
                div.innerHTML = `<strong>${t.pricing[titleKey]}</strong> — ${t.pricing[textKey]}`;
            }
        }
        
        const benefitsNote = benefitsBreakdown.querySelector('.benefits-note');
        if (benefitsNote) benefitsNote.innerHTML = t.pricing.benefitsNote;
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
    
    // CTA Section
    const ctaSection = document.querySelector('.cta-section');
    if (ctaSection && t.cta) {
        const badge = ctaSection.querySelector('.cta-badge');
        const title = ctaSection.querySelector('h2');
        const subtitle = ctaSection.querySelectorAll('p')[0];
        if (badge) badge.textContent = t.cta.badge;
        if (title) title.textContent = t.cta.title;
        if (subtitle) subtitle.textContent = t.cta.subtitle;
        
        const features = ctaSection.querySelectorAll('.cta-feature span');
        if (features[0]) features[0].textContent = t.cta.feature1;
        if (features[1]) features[1].textContent = t.cta.feature2;
        if (features[2]) features[2].textContent = t.cta.feature3;
        
        const button = ctaSection.querySelector('.cta-main');
        if (button) {
            const buttonText = button.querySelector('span') || button.childNodes[button.childNodes.length - 1];
            if (buttonText.nodeType === Node.TEXT_NODE) {
                buttonText.textContent = ' ' + t.cta.button;
            } else {
                buttonText.textContent = t.cta.button;
            }
        }
        
        const contacts = ctaSection.querySelectorAll('.cta-contact p');
        if (contacts[0]) contacts[0].innerHTML = `<i class="fab fa-whatsapp"></i> ${t.cta.contact1} <strong>+1 929 628 8273</strong>`;
        if (contacts[1]) contacts[1].innerHTML = `<i class="fas fa-globe"></i> ${t.cta.contact2} <strong>gocoding.tech</strong>`;
    }
    
    // Footer
    const footer = document.querySelector('.footer');
    if (footer && t.footer) {
        const texts = footer.querySelectorAll('.footer-text p');
        if (texts[0]) texts[0].textContent = t.footer.text1;
        if (texts[1]) texts[1].textContent = t.footer.text2;
        
        const collaboration = footer.querySelector('.footer-collaboration');
        if (collaboration) {
            collaboration.innerHTML = `${t.footer.collaboration} <a href="https://gocoding.tech" target="_blank" class="footer-link">GoCoding.tech</a>`;
        }
        
        const copyright = footer.querySelector('.footer-bottom p');
        if (copyright) copyright.textContent = t.footer.copyright;
    }
    
    // Phases Section (9-Month Journey)
    const phasesSection = document.querySelector('.program-section');
    if (phasesSection && t.phases) {
        const badge = phasesSection.querySelector('.section-badge');
        const title = phasesSection.querySelector('.section-header h2');
        const subtitle = phasesSection.querySelector('.section-header > p');
        if (badge) badge.textContent = t.phases.badge;
        if (title) title.textContent = t.phases.title;
        if (subtitle) subtitle.textContent = t.phases.subtitle;
        
        const phases = phasesSection.querySelectorAll('.step-card');
        
        // Phase 1
        if (phases[0] && t.phases) {
            const h3 = phases[0].querySelector('h3');
            const subtitle = phases[0].querySelector('.step-subtitle');
            const toggleBtn = phases[0].querySelector('.step-toggle span');
            const learnP = phases[0].querySelector('.step-description > p');
            const outcome = phases[0].querySelector('.step-result');
            const tools = phases[0].querySelector('.step-tools');
            
            if (h3) h3.textContent = t.phases.phase1Title;
            if (subtitle) subtitle.textContent = t.phases.phase1Subtitle;
            if (toggleBtn) toggleBtn.textContent = t.phases.seeDetails;
            if (learnP) learnP.innerHTML = `<strong>${t.phases.whatTheyLearn}</strong> ${t.phases.phase1Learn}`;
            if (outcome) outcome.innerHTML = `<strong>${t.phases.keyOutcome}</strong> ${t.phases.phase1Outcome}`;
            if (tools) tools.innerHTML = `<strong>${t.phases.tools}</strong> ${t.phases.phase1Tools}`;
        }
        
        // Phase 2
        if (phases[1] && t.phases) {
            const h3 = phases[1].querySelector('h3');
            const subtitle = phases[1].querySelector('.step-subtitle');
            const toggleBtn = phases[1].querySelector('.step-toggle span');
            const learnP = phases[1].querySelector('.step-description > p');
            const outcome = phases[1].querySelector('.step-result');
            const tools = phases[1].querySelector('.step-tools');
            
            if (h3) h3.textContent = t.phases.phase2Title;
            if (subtitle) subtitle.textContent = t.phases.phase2Subtitle;
            if (toggleBtn) toggleBtn.textContent = t.phases.seeDetails;
            if (learnP) learnP.innerHTML = `<strong>${t.phases.whatTheyLearn}</strong> ${t.phases.phase2Learn}`;
            if (outcome) outcome.innerHTML = `<strong>${t.phases.keyOutcome}</strong> ${t.phases.phase2Outcome}`;
            if (tools) tools.innerHTML = `<strong>${t.phases.tools}</strong> ${t.phases.phase2Tools}`;
        }
        
        // Phase 3
        if (phases[2] && t.phases) {
            const h3 = phases[2].querySelector('h3');
            const subtitle = phases[2].querySelector('.step-subtitle');
            const toggleBtn = phases[2].querySelector('.step-toggle span');
            const learnP = phases[2].querySelector('.step-description > p');
            const outcome = phases[2].querySelector('.step-result');
            const tools = phases[2].querySelector('.step-tools');
            
            if (h3) h3.textContent = t.phases.phase3Title;
            if (subtitle) subtitle.textContent = t.phases.phase3Subtitle;
            if (toggleBtn) toggleBtn.textContent = t.phases.seeDetails;
            if (learnP) learnP.innerHTML = `<strong>${t.phases.whatTheyLearn}</strong> ${t.phases.phase3Learn}`;
            if (outcome) outcome.innerHTML = `<strong>${t.phases.keyOutcome}</strong> ${t.phases.phase3Outcome}`;
            if (tools) tools.innerHTML = `<strong>${t.phases.tools}</strong> ${t.phases.phase3Tools}`;
        }
        
        // Phase 4
        if (phases[3] && t.phases) {
            const h3 = phases[3].querySelector('h3');
            const subtitle = phases[3].querySelector('.step-subtitle');
            const toggleBtn = phases[3].querySelector('.step-toggle span');
            const learnP = phases[3].querySelector('.step-description > p');
            const outcome = phases[3].querySelector('.step-result');
            const finalP = phases[3].querySelectorAll('.step-description > p')[1];
            
            if (h3) h3.textContent = t.phases.phase4Title;
            if (subtitle) subtitle.textContent = t.phases.phase4Subtitle;
            if (toggleBtn) toggleBtn.textContent = t.phases.seeDetails;
            if (learnP) learnP.innerHTML = `<strong>${t.phases.whatTheyLearn}</strong> ${t.phases.phase4Learn}`;
            if (outcome) outcome.innerHTML = `<strong>${t.phases.keyOutcome}</strong> ${t.phases.phase4Outcome}`;
            if (finalP) finalP.textContent = t.phases.phase4Final;
        }
    }
    
    // Benefits Details Section
    const benefitsDetSection = document.querySelector('.benefits-section');
    if (benefitsDetSection && t.benefitsDetails) {
        const cards = benefitsDetSection.querySelectorAll('.benefit-card');
        
        if (cards[0]) {
            const h3 = cards[0].querySelector('h3');
            const introP = cards[0].querySelector('.benefit-collapse > p');
            const items = cards[0].querySelectorAll('.benefit-collapse li');
            if (h3) h3.textContent = t.benefitsDetails.card1Title;
            if (introP) introP.textContent = t.benefitsDetails.card1Intro;
            if (items[0]) items[0].textContent = t.benefitsDetails.card1Item1;
            if (items[1]) items[1].textContent = t.benefitsDetails.card1Item2;
            if (items[2]) items[2].textContent = t.benefitsDetails.card1Item3;
            if (items[3]) items[3].textContent = t.benefitsDetails.card1Item4;
        }
        
        if (cards[1]) {
            const h3 = cards[1].querySelector('h3');
            const p = cards[1].querySelector('.benefit-collapse > p');
            if (h3) h3.textContent = t.benefitsDetails.card2Title;
            if (p) p.textContent = t.benefitsDetails.card2Text;
        }
        
        if (cards[2]) {
            const h3 = cards[2].querySelector('h3');
            const p = cards[2].querySelector('.benefit-collapse > p');
            if (h3) h3.textContent = t.benefitsDetails.card3Title;
            if (p) p.textContent = t.benefitsDetails.card3Text;
        }
        
        if (cards[3]) {
            const h3 = cards[3].querySelector('h3');
            const p = cards[3].querySelector('.benefit-collapse > p');
            if (h3) h3.textContent = t.benefitsDetails.card4Title;
            if (p) p.textContent = t.benefitsDetails.card4Text;
        }
        
        if (cards[4]) {
            const h3 = cards[4].querySelector('h3');
            const introP = cards[4].querySelector('.benefit-collapse > p');
            const items = cards[4].querySelectorAll('.benefit-collapse li');
            if (h3) h3.textContent = t.benefitsDetails.card5Title;
            if (introP) introP.textContent = t.benefitsDetails.card5Intro;
            if (items[0]) items[0].textContent = t.benefitsDetails.card5Item1;
            if (items[1]) items[1].textContent = t.benefitsDetails.card5Item2;
            if (items[2]) items[2].textContent = t.benefitsDetails.card5Item3;
            if (items[3]) items[3].textContent = t.benefitsDetails.card5Item4;
        }
        
        if (cards[5]) {
            const h3 = cards[5].querySelector('h3');
            const p = cards[5].querySelector('.benefit-collapse > p');
            if (h3) h3.textContent = t.benefitsDetails.card6Title;
            if (p) p.textContent = t.benefitsDetails.card6Text;
        }
        
        // Translate benefit toggle buttons
        const toggles = benefitsDetSection.querySelectorAll('.benefit-toggle span');
        toggles.forEach(toggle => {
            if (toggle.textContent.trim() === 'See Details') {
                toggle.textContent = t.phases.seeDetails;
            } else if (toggle.textContent.trim() === 'Hide Details') {
                toggle.textContent = t.phases.hideDetails;
            }
        });
    }
    
    // Bonuses Section - Update bonus toggles and values
    const bonusSection = document.querySelector('.bonuses-section');
    if (bonusSection && t.bonuses) {
        const subtitle = bonusSection.querySelector('.section-subtitle');
        if (subtitle) subtitle.textContent = t.bonuses.subtitle;
        
        const cards = bonusSection.querySelectorAll('.bonus-card');
        if (cards[0]) {
            const value = cards[0].querySelector('.bonus-value');
            const h3 = cards[0].querySelector('h3');
            const p = cards[0].querySelector('.bonus-collapse p');
            const toggle = cards[0].querySelector('.bonus-toggle');
            if (value) value.textContent = t.bonuses.card1Value;
            if (h3) h3.textContent = t.bonuses.card1Title;
            if (p) p.textContent = t.bonuses.card1Text;
            if (toggle) {
                const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
                if (isExpanded) {
                    toggle.innerHTML = `${t.bonuses.showLess} <i class="fas fa-chevron-up"></i>`;
                } else {
                    toggle.innerHTML = `${t.bonuses.learnMore} <i class="fas fa-chevron-down"></i>`;
                }
            }
        }
        if (cards[1]) {
            const value = cards[1].querySelector('.bonus-value');
            const h3 = cards[1].querySelector('h3');
            const p = cards[1].querySelector('.bonus-collapse p');
            const toggle = cards[1].querySelector('.bonus-toggle');
            if (value) value.textContent = t.bonuses.card2Value;
            if (h3) h3.textContent = t.bonuses.card2Title;
            if (p) p.textContent = t.bonuses.card2Text;
            if (toggle) {
                const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
                if (isExpanded) {
                    toggle.innerHTML = `${t.bonuses.showLess} <i class="fas fa-chevron-up"></i>`;
                } else {
                    toggle.innerHTML = `${t.bonuses.learnMore} <i class="fas fa-chevron-down"></i>`;
                }
            }
        }
        if (cards[2]) {
            const value = cards[2].querySelector('.bonus-value');
            const h3 = cards[2].querySelector('h3');
            const p = cards[2].querySelector('.bonus-collapse p');
            const toggle = cards[2].querySelector('.bonus-toggle');
            if (value) value.textContent = t.bonuses.card3Value;
            if (h3) h3.textContent = t.bonuses.card3Title;
            if (p) p.textContent = t.bonuses.card3Text;
            if (toggle) {
                const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
                if (isExpanded) {
                    toggle.innerHTML = `${t.bonuses.showLess} <i class="fas fa-chevron-up"></i>`;
                } else {
                    toggle.innerHTML = `${t.bonuses.learnMore} <i class="fas fa-chevron-down"></i>`;
                }
            }
        }
        if (cards[3]) {
            const value = cards[3].querySelector('.bonus-value');
            const h3 = cards[3].querySelector('h3');
            const p = cards[3].querySelector('.bonus-collapse p');
            const toggle = cards[3].querySelector('.bonus-toggle');
            if (value) value.textContent = t.bonuses.card4Value;
            if (h3) h3.textContent = t.bonuses.card4Title;
            if (p) p.textContent = t.bonuses.card4Text;
            if (toggle) {
                const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
                if (isExpanded) {
                    toggle.innerHTML = `${t.bonuses.showLess} <i class="fas fa-chevron-up"></i>`;
                } else {
                    toggle.innerHTML = `${t.bonuses.learnMore} <i class="fas fa-chevron-down"></i>`;
                }
            }
        }
        
        // Bonus CTA section
        const ctaBox = bonusSection.querySelector('.bonus-cta-box');
        if (ctaBox && t.bonuses) {
            const title = ctaBox.querySelector('h3');
            const text = ctaBox.querySelector('p');
            const button = ctaBox.querySelector('.btn');
            if (title) title.textContent = t.bonuses.deadlineTitle;
            if (text) text.textContent = t.bonuses.deadlineText;
            if (button) {
                button.innerHTML = `<i class="fab fa-whatsapp"></i> ${t.bonuses.claimButton}`;
            }
        }
    }
    
    // Schedule Section
    const scheduleSection = document.querySelector('.program-schedule');
    if (scheduleSection && t.schedule) {
        // Main schedule title and subtitle (outside schedule-location)
        const title = scheduleSection.querySelector('.schedule-title');
        const subtitle = scheduleSection.querySelector('.schedule-subtitle');
        if (title) title.textContent = t.schedule.scheduleTitle;
        if (subtitle) subtitle.textContent = t.schedule.scheduleIntro;
        
        // Schedule cards
        const weeklySchedule = scheduleSection.querySelector('.weekly-schedule-simple');
        if (weeklySchedule) {
            const cards = weeklySchedule.querySelectorAll('.schedule-card-simple');
            
            // Card 1: Live Class
            if (cards[0]) {
                const time = cards[0].querySelector('.schedule-card-time');
                const cardTitle = cards[0].querySelector('.schedule-card-title');
                const desc = cards[0].querySelector('p');
                if (time) time.textContent = t.schedule.liveClassTime;
                if (cardTitle) cardTitle.textContent = t.schedule.liveClass;
                if (desc) desc.textContent = t.schedule.liveClassDesc;
            }
            
            // Card 2: Project Work
            if (cards[1]) {
                const time = cards[1].querySelector('.schedule-card-time');
                const cardTitle = cards[1].querySelector('.schedule-card-title');
                const desc = cards[1].querySelector('p');
                if (time) time.textContent = t.schedule.projectWorkTime;
                if (cardTitle) cardTitle.textContent = t.schedule.projectWork;
                if (desc) desc.textContent = t.schedule.projectWorkDesc;
            }
            
            // Card 3: Support/Check-ins
            if (cards[2]) {
                const time = cards[2].querySelector('.schedule-card-time');
                const cardTitle = cards[2].querySelector('.schedule-card-title');
                const desc = cards[2].querySelector('p');
                if (time) time.textContent = t.schedule.checkInsTime;
                if (cardTitle) cardTitle.textContent = t.schedule.checkIns;
                if (desc) desc.textContent = t.schedule.checkInsDesc;
            }
        }
        
        // Total time box
        const totalBox = scheduleSection.querySelector('.schedule-total-box');
        if (totalBox && t.schedule) {
            const totalTitle = totalBox.querySelector('h4');
            const totalDesc = totalBox.querySelector('p');
            if (totalTitle) totalTitle.innerHTML = `${t.schedule.total}: ${t.schedule.totalTime}`;
            if (totalDesc) totalDesc.innerHTML = `<strong>${t.schedule.totalDesc}</strong>`;
        }
        
        // Parent note at bottom
        const noteBottom = scheduleSection.querySelector('.schedule-note-bottom');
        if (noteBottom) noteBottom.innerHTML = t.schedule.parentNote;
        
        // Program Details Grid
        const detailsGrid = scheduleSection.querySelector('.program-details-grid');
        if (detailsGrid && t.schedule) {
            const detailCards = detailsGrid.querySelectorAll('.detail-card');
            
            if (detailCards[0]) {
                detailCards[0].querySelector('h4').textContent = t.schedule.detail1Title;
                detailCards[0].querySelector('p').textContent = t.schedule.detail1Text;
            }
            if (detailCards[1]) {
                detailCards[1].querySelector('h4').textContent = t.schedule.detail2Title;
                detailCards[1].querySelector('p').innerHTML = t.schedule.detail2Text;
            }
            if (detailCards[2]) {
                detailCards[2].querySelector('h4').textContent = t.schedule.detail3Title;
                detailCards[2].querySelector('p').innerHTML = t.schedule.detail3Text;
            }
            if (detailCards[3]) {
                detailCards[3].querySelector('h4').textContent = t.schedule.detail4Title;
                detailCards[3].querySelector('p').innerHTML = t.schedule.detail4Text;
            }
            if (detailCards[4]) {
                detailCards[4].querySelector('h4').textContent = t.schedule.detail5Title;
                detailCards[4].querySelector('p').innerHTML = t.schedule.detail5Text;
            }
            if (detailCards[5]) {
                detailCards[5].querySelector('h4').textContent = t.schedule.detail6Title;
                detailCards[5].querySelector('p').innerHTML = t.schedule.detail6Text;
            }
        }
    }
    
    // Value Breakdown - What Average Student Gets
    const avgStudent = document.querySelector('.breakdown-benefits');
    if (avgStudent && t.valueBreakdown) {
        const title = avgStudent.querySelector('h4');
        if (title) title.textContent = t.valueBreakdown.averageStudentTitle;
        
        const items = avgStudent.querySelectorAll('.benefit-item div');
        const itemTexts = [
            t.valueBreakdown.item1,
            t.valueBreakdown.item2,
            t.valueBreakdown.item3,
            t.valueBreakdown.item4,
            t.valueBreakdown.item5,
            t.valueBreakdown.item6
        ];
        
        items.forEach((item, index) => {
            if (itemTexts[index]) {
                item.innerHTML = itemTexts[index];
            }
        });
        
        const note = avgStudent.querySelector('.benefits-note');
        if (note) note.innerHTML = t.valueBreakdown.note;
    }
}

// Update language button states
function updateLanguageButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Initialize language switcher
document.addEventListener('DOMContentLoaded', function() {
    // Check URL parameter first
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    // Priority: URL parameter > localStorage > default 'en'
    let initialLang = 'en'; // Default to English
    if (urlLang && (urlLang === 'en' || urlLang === 'ru')) {
        initialLang = urlLang;
        localStorage.setItem('mba-language', urlLang); // Save URL preference
    } else if (localStorage.getItem('mba-language')) {
        // Only use localStorage if URL has no lang parameter
        // This means gocoding-mba.com/ will ALWAYS be English
        // But gocoding-mba.com/?lang=ru will be Russian
        if (!window.location.search.includes('lang=')) {
            initialLang = 'en'; // Force English for clean URL
            localStorage.setItem('mba-language', 'en'); // Update localStorage
        } else {
            initialLang = localStorage.getItem('mba-language');
        }
    }
    
    currentLang = initialLang;
    
    // Load initial language
    loadTranslations(currentLang);
    
    // Language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (lang !== currentLang) {
                loadTranslations(lang);
                
                // Add animation
                document.body.style.opacity = '0.95';
                setTimeout(() => {
                    document.body.style.opacity = '1';
                }, 200);
            }
        });
    });
});

// Export for use in other scripts
window.getCurrentLanguage = () => currentLang;
window.getTranslation = (key) => {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
        value = value[k];
        if (!value) return key;
    }
    return value;
};