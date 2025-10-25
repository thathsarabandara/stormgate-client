# 🌪️ Stormgate - Microservices Platform

A modern, enterprise-grade microservices platform built with Vue 3, designed to provide scalable and secure backend services for businesses of all sizes. Stormgate offers comprehensive solutions including authentication, profile management, notifications, cart services, order processing, and payment systems.

![Vue 3](https://img.shields.io/badge/Vue-3.5.13-4FC08D?style=for-the-badge&logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.7-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript)

## ✨ Features

### 🚀 Core Microservices
- **Authentication Service** - Secure OAuth 2.0, JWT tokens, MFA support
- **Profile Management** - User profiles with customizable fields
- **Notification Service** - Real-time notifications via email, SMS, and push
- **Cart Service** - Persistent shopping cart with sync capabilities
- **Order Service** - Complete order management and tracking
- **Payment Service** - Secure payment processing with multiple methods

### 🎨 Modern UI/UX
- **Responsive Design** - Optimized for all screen sizes
- **Clean Interface** - Minimalistic and professional design
- **Interactive Elements** - Smooth animations and hover effects
- **Accessibility** - WCAG compliant with proper ARIA labels
- **Dark Mode Ready** - Prepared for theme switching

### 🛠️ Developer Experience
- **Vue 3 Composition API** - Modern reactive development
- **TypeScript Support** - Type-safe development
- **Component Library** - Reusable UI components
- **State Management** - Pinia for predictable state
- **Routing** - Vue Router with nested routes
- **Build Optimization** - Vite for fast development and builds

## 📋 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## 🚀 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/stormgate-client.git
   cd stormgate-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_BASE_URL=https://api.stormgate.com
   VITE_APP_TITLE=Stormgate Platform
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🎯 Usage

### Development
```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Routes
- `/` - Home page with platform overview
- `/services` - Detailed services information
- `/pricing` - Pricing plans and features
- `/about` - Company information and team
- `/faq` - Frequently asked questions
- `/auth/login` - User login
- `/auth/register` - User registration

### Key Components
- **LandingLayout** - Main layout for public pages
- **MainLayout** - Layout for authenticated sections
- **FAQ System** - Interactive expandable FAQ sections
- **Responsive Navbar** - Mobile-friendly navigation
- **Contact Forms** - Integrated contact functionality

## 📁 Project Structure

```
stormgate-client/
├── public/                 # Static assets
│   ├── assets/            # Images and media files
│   └── index.html         # Main HTML template
├── src/
│   ├── assets/            # Application assets
│   ├── components/        # Reusable Vue components
│   │   ├── layout/        # Layout components
│   │   ├── ui/           # UI components
│   │   └── ...
│   ├── pages/            # Page components
│   │   ├── home/         # Public pages
│   │   ├── auth/         # Authentication pages
│   │   └── service/      # Service-specific pages
│   ├── composables/      # Vue composables
│   ├── router/           # Routing configuration
│   ├── stores/           # Pinia stores
│   ├── types/            # TypeScript definitions
│   └── main.js           # Application entry point
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md            # Project documentation
```

## 🛠️ Technologies

### Frontend Framework
- **Vue 3.5.13** - Progressive JavaScript framework
- **Vue Router 4.5.1** - Official router for Vue.js
- **Pinia 3.0.2** - State management library

### Build Tools
- **Vite 6.3.5** - Fast build tool and development server
- **Tailwind CSS 4.1.7** - Utility-first CSS framework
- **PostCSS 8.5.3** - CSS processing tool
- **Autoprefixer 10.4.21** - CSS vendor prefixing

### Development Tools
- **TypeScript** - Type-safe JavaScript
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Headless UI** - Accessible UI components

### Additional Libraries
- **Axios 1.9.0** - HTTP client
- **Chart.js 4.4.9** - Chart library
- **Vue Chart.js 5.3.2** - Vue wrapper for Chart.js
- **Iconify** - Icon library

## 🎨 Design System

### Color Palette
- **Primary Green**: #10B981 (Emerald-500)
- **Secondary Green**: #059669 (Emerald-600)
- **Accent Blue**: #3B82F6 (Blue-500)
- **Neutral Gray**: #6B7280 (Gray-500)
- **Background**: #FFFFFF (White)

### Typography
- **Headings**: Inter font family, bold weights
- **Body Text**: Inter font family, normal weight
- **Small Text**: Inter font family, medium weight

### Components
- **Buttons**: Rounded corners, hover effects, focus states
- **Cards**: Subtle shadows, hover animations
- **Forms**: Clean inputs with validation states
- **Navigation**: Responsive with mobile hamburger menu

## 🤝 Contributing

We welcome contributions to Stormgate! Please follow these guidelines:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Guidelines
- Follow Vue 3 Composition API patterns
- Use TypeScript for type safety
- Write clear, concise commit messages
- Update documentation for new features
- Ensure responsive design for all components

### Code Style
- Use ESLint and Prettier configurations
- Follow Vue Style Guide recommendations
- Maintain consistent naming conventions
- Add proper TypeScript types

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Support

### Documentation
- [Vue 3 Documentation](https://vuejs.org/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)

### Community
- [Vue.js Community](https://vuejs.org/community/)
- [Tailwind CSS Community](https://tailwindcss.com/community)
- [GitHub Discussions](https://github.com/your-username/stormgate-client/discussions)

### Contact
- **Email**: thathsaraaruapperuma@gmail.com
- **Address**: University of Sri Jayewardenepura, Gangodawilla, Nugegoda, Sri Lanka

---

<div align="center">

**Built with ❤️ by the Thathsara Bandara**

[🌐 Website](https://stormgate.com) • [📧 Email](thathsaraaruapperuma@gmail.com) •

</div>
