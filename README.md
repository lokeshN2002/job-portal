# 💼 Job Portal - React Application

<div align="center">

![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**A modern, full-stack job portal application built with React.js and Supabase**

[🚀 Live Demo](#) • [📖 Documentation](#features) • [🛠️ Installation](#installation) • [🤝 Contributing](#contributing)

</div>

---

## 🌟 Overview

Job Portal is a comprehensive web application that connects job seekers with employers. Built with modern React.js and powered by Supabase backend, it offers a seamless experience for both posting and finding jobs.

### ✨ Key Highlights
- 🎨 **Modern UI/UX** with glassmorphism design
- 🔐 **Secure Authentication** with bcrypt encryption
- 📱 **Fully Responsive** design for all devices
- ⚡ **Real-time Data** synchronization
- 🎭 **Smooth Animations** with GPU acceleration
- 🏗️ **Scalable Architecture** with clean code practices

---

## 🎯 Features

### 👤 User Management
- **User Registration** with password validation
- **Secure Login System** with encrypted passwords
- **Form Validation** and error handling
- **Session Management** with React Router

### 💼 Job Management
- **Post Jobs** with comprehensive details
- **Browse Jobs** with smart filtering
- **Detailed Job Views** with dynamic routing
- **Deadline Management** (expired jobs auto-filtered)

### 🎨 User Experience
- **Glassmorphism UI** with modern aesthetics
- **Smooth Animations** and micro-interactions
- **Loading States** with skeleton screens
- **Responsive Design** for mobile and desktop
- **Intuitive Navigation** with breadcrumb routing

---

## 🛠️ Tech Stack

### Frontend
- **React.js 18+** - Modern functional components with hooks
- **React Router** - Client-side routing and navigation
- **CSS3** - Custom animations and glassmorphism effects
- **JavaScript ES6+** - Modern syntax with async/await

### Backend & Database
- **Supabase** - Backend-as-a-Service platform
- **PostgreSQL** - Relational database through Supabase
- **Real-time APIs** - Live data synchronization

### Security & Authentication
- **bcrypt.js** - Password hashing and encryption
- **Environment Variables** - Secure API key management
- **Form Validation** - Client and server-side validation

---

## 📁 Project Structure

```
reactapp/
├── src/
│   ├── pages/           # Main application pages
│   │   ├── Landingpage.jsx    # Home page with navigation cards
│   │   ├── Login.jsx          # User authentication
│   │   ├── Register.jsx       # User registration
│   │   ├── Getjob.jsx         # Job listings page
│   │   ├── Postjob.jsx        # Job posting form
│   │   └── jobdetails.jsx     # Individual job details
│   ├── components/      # Reusable components
│   │   └── jobdetailsfield.jsx # Job form configuration
│   ├── styles/          # CSS styling files
│   │   ├── index.css          # Centralized common styles
│   │   ├── landingpage.css    # Landing page styles
│   │   ├── login.css          # Authentication styles
│   │   ├── getjob.css         # Job listing styles
│   │   ├── postjob.css        # Job posting styles
│   │   └── jobdetail.css      # Job details styles
│   ├── asset/           # Static assets
│   │   ├── images/            # Application images
│   │   └── icons/             # UI icons
│   ├── Api.jsx          # Supabase configuration and API calls
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Supabase Account** (for backend services)

### 1. Clone the Repository
```bash
git clone https://github.com/lokeshN2002/job-tracking-reactapp.git
cd job-tracking-reactapp/reactapp
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env` file in the reactapp directory:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_KEY=your_supabase_anon_key
```

### 4. Database Setup
Create these tables in your Supabase database:

**Registration Table:**
```sql
CREATE TABLE registration (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**PostJob Table:**
```sql
CREATE TABLE postjob (
  id SERIAL PRIMARY KEY,
  companyname VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  experience INTEGER NOT NULL,
  yearofpassedout INTEGER NOT NULL,
  salary INTEGER NOT NULL,
  deadline DATE NOT NULL,
  contact VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  summary TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 5. Run the Application
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` to see the application running!

---

## 📱 Application Flow

### 1. **Authentication Flow**
```
Login/Register → Validation → Dashboard → Job Portal
```

### 2. **Job Seeker Flow**
```
Landing Page → Browse Jobs → View Details → Apply
```

### 3. **Employer Flow**
```
Landing Page → Post Job → Form Submission → Success
```

---

## 🎨 Design Features

### Glassmorphism UI
- **Translucent backgrounds** with backdrop blur
- **Subtle shadows** and border effects
- **Modern gradient overlays**

### Smooth Animations
- **GPU-accelerated** transforms
- **Staggered entrance** animations
- **Hover effects** and micro-interactions
- **Loading states** with skeleton screens

### Responsive Design
- **Mobile-first** approach
- **Flexible layouts** for all screen sizes
- **Touch-friendly** interface elements

---

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 🌐 API Endpoints

### Authentication
- `POST /registration` - User registration
- `GET /registration` - User login validation

### Jobs
- `GET /postjob` - Fetch all jobs
- `POST /postjob` - Create new job posting
- `GET /postjob/:id` - Get specific job details

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Lokesh N**
- GitHub: [@lokeshN2002](https://github.com/lokeshN2002)
- Email: logeshrb801333@gmail.com

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Supabase** for the excellent backend service
- **Vite** for the fast build tool
- **Community** for inspiration and support

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Lokesh N](https://github.com/lokeshN2002)

</div>
