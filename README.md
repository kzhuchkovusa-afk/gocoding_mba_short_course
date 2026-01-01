# MBA for Kids - Short Course (4 Months)

## 🎯 Overview
A **4-month intensive** business and IT program for teens aged 11-14. This is a **marketing-focused landing page** for the shorter version of the MBA for Kids program.

### Key Differences from Full Program:
- **Duration**: 4 months (vs 9 months)
- **Lessons**: 16 lessons total (vs longer program)
- **Prize**: $1,000 competition prize (vs $3,000)
- **Time Commitment**: ~80 hours total (vs 180 hours)
- **Payment Structure**: 4 monthly payments

## 🚀 Program Highlights

### What Students Get:
- Real IT project (game, website, or app)
- Entrepreneurial mindset and business fundamentals
- Public speaking and pitch skills
- Financial literacy
- Tech skills (Figma, Python/JavaScript, project management)
- Opportunity to compete for **$1,000 prize**

### Program Structure:
1. **Months 1-2**: Business Ideas & Validation
2. **Months 3-4**: Product Development & Build
3. **Final Phase**: Marketing, Pitch & Competition

## 🌐 URLs

- **Local Development**: http://localhost:3000
- **Live Demo**: https://3000-iaingp24mn2al3vvi61z3-6532622b.e2b.dev
- **GitHub Repository**: https://github.com/kzhuchkovusa-afk/gocoding_mba_short_course

## 📂 Project Structure

```
webapp/
├── index.html              # Main landing page
├── css/
│   ├── style.css          # Main styles
│   ├── mobile-fixes.css   # Mobile responsive styles
│   └── language.css       # Language switcher styles
├── js/
│   ├── script.js          # Main JavaScript
│   ├── language.js        # Language switching logic
│   ├── translations-en.json  # English translations
│   └── translations-ru.json  # Russian translations
└── ecosystem.config.cjs   # PM2 configuration

```

## 🔧 Features

### Bilingual Support (EN/RU)
- Full English and Russian translations
- Language switcher in navigation
- URL parameter support (`?lang=ru` or `?lang=en`)
- Persistent language selection (localStorage)

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly navigation

### Integrations
- WhatsApp contact link
- Kommo form integration (https://forms.kommo.com/rcdllrc)
- Analytics ready

## 🚀 Quick Start

### Local Development

```bash
# Navigate to project directory
cd /home/user/webapp

# Start simple HTTP server
python3 -m http.server 3000

# Or use PM2 for production-like environment
pm2 start ecosystem.config.cjs
```

### Test the Site
```bash
# Check English version
curl http://localhost:3000/

# Check Russian version
curl http://localhost:3000/?lang=ru

# Test key changes
curl -s http://localhost:3000/ | grep -E "\$1,000|16|4-month|80 hours"
```

## 📊 Key Metrics

| Metric | Value |
|--------|-------|
| **Duration** | 4 months |
| **Total Lessons** | 16 |
| **Group Size** | Max 8 students |
| **Prize Fund** | $1,000 |
| **Time Commitment** | 80 hours total (~5 hours/week) |
| **Age Range** | 11-14 years |

## 💰 Pricing Structure

**Early Bird Pricing (First 8 Spots)**:
- **Monthly**: $350/month × 4 months = $1,400 total
- **Cost per Hour**: $17.50/hour
- Progressive pricing for later spots

## 🎓 What Students Build

By the end of 4 months, students will have:
1. ✅ A working MVP (game, app, or website)
2. ✅ Portfolio piece for college applications
3. ✅ Coding & design skills
4. ✅ Public speaking confidence
5. ✅ Business fundamentals
6. ✅ Network of ambitious peers

## 📅 Program Timeline

**Next Cohort Starts**: January 25th, 2026

### Weekly Schedule:
- **Live Class**: 1.5 hours/week
- **Project Work**: 2-3 hours/week
- **Support**: 30 min/week (WhatsApp)
- **Total**: ~4-5 hours/week

## 📍 Locations

- **Location 1**: 137A West End Ave, Brooklyn, NY
- **Location 2**: 9000 Bay Parkway, Brooklyn, NY
- **Online**: Live virtual classes from anywhere

## 🔄 Recent Updates (2026-01-01)

### Changed from Full Program:
- ✅ Duration: 9 months → **4 months**
- ✅ Lessons: Unspecified → **16 lessons**
- ✅ Prize: $3,000 → **$1,000**
- ✅ Hours: 180 → **80 hours**
- ✅ Payments: 9 monthly → **4 monthly**
- ✅ All translations updated (EN/RU)
- ✅ All HTML/CSS/JS updated

## 🛠️ Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Custom CSS with mobile-first approach
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Inter & Montserrat (Google Fonts)
- **Deployment**: Static HTML (can be deployed anywhere)

## 📝 Deployment Notes

This is a **static HTML site** - no build process required!

### Deploy to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply push to repository and configure your hosting provider to serve `index.html`.

## 👥 Contact

- **WhatsApp**: +1 (917) 929-4626
- **Website**: gocoding.tech
- **Application Form**: https://forms.kommo.com/rcdllrc

## 📄 License

© 2024 MBA for Kids. All rights reserved.

---

**Last Updated**: January 1, 2026  
**Version**: Short Course v1.0 (4-month program)
