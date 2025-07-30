# 🏠 ALX Listing App

A modern, responsive property listing application built with Next.js and Tailwind CSS. This project showcases a clean, user-friendly interface for displaying property listings with beautiful imagery and smooth interactions.

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with Tailwind CSS styling
- **Image Handling**: Graceful fallbacks for missing images with placeholder content
- **TypeScript**: Full type safety for better development experience
- **Static Export**: Optimized for deployment on GitHub Pages

## 🚀 Live Demo

Visit the live application: **[ALX Listing App](https://grandson-tech.github.io/ALX-listing-app/)**

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Deployment**: [GitHub Pages](https://pages.github.com/) - Static site hosting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Grandson-tech/ALX-listing-app.git
   cd ALX-listing-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
alx-listing-app/
├── components/
│   └── common/
│       ├── Button.tsx      # Reusable button component
│       └── Card.tsx        # Property listing card component
├── pages/
│   ├── _app.tsx           # App wrapper
│   ├── _document.tsx      # Document wrapper
│   └── index.tsx          # Home page
├── interfaces/
│   └── index.ts           # TypeScript interfaces
├── styles/
│   ├── globals.css        # Global styles
│   └── tailwind.config.js # Tailwind configuration
└── public/                # Static assets
```

## 🎨 Components

### Card Component
- Displays property listings with images, titles, and descriptions
- Handles missing images gracefully with fallback placeholders
- Responsive design that adapts to different screen sizes

### Button Component
- Reusable button component with customizable labels and actions
- Consistent styling across the application

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project is configured for deployment on GitHub Pages:

1. **Automatic Deployment**: Changes pushed to the `main` branch trigger automatic deployment
2. **GitHub Actions**: Uses the official Next.js workflow for building and deploying
3. **Static Export**: Configured for static site generation

## 🐛 Known Issues

- ESLint warning about using `<img>` instead of Next.js `<Image>` component (intentional for external images)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Grandson-tech**
- GitHub: [@Grandson-tech](https://github.com/Grandson-tech)

---

Made with ❤️ using Next.js and Tailwind CSS 