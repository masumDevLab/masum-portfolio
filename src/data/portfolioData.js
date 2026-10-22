import technoVaImage from '../assets/images/Technova_image.png'
import travelMemoImage from '../assets/images/travel_memo.png'
import studyTrackerImage from '../assets/images/study_tracker.png'
import cvFile from '../assets/images/Masum ATS resume.pdf'

// All editable content lives here. Empty url => the link is hidden (no dead links).
export const profile = {
  name: 'Masum', title: 'Software Engineering Student',
  email: 'masumkabir8582@gmail.com', location: 'Bangladesh', age: 22, degree: 'B.Sc. in Software Engineering', graduation: 2027,
  cv: cvFile
}
export const socials = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/masumdevlab/', icon: 'in' },
  { label: 'GitHub', url: 'https://github.com/masumDevLab', icon: '⌥' },
  { label: 'Instagram', url: 'https://www.instagram.com/__masumkabir__/?hl=en', icon: '◎' },
  { label: 'Facebook', url: 'https://www.facebook.com/Programmer.Masum', icon: 'f' },
  { label: 'X', url: '', icon: '𝕏' },
  { label: 'Email', url: profile.email ? `mailto:${profile.email}` : '', icon: '✉' }
]
export const goals = [
  'Strengthen my software engineering and programming skills.',
  'Build practical, real-world applications.',
  'Deepen my knowledge of full-stack web development.',
  'Explore Artificial Intelligence and Machine Learning.',
  'Develop innovative solutions through problem-solving.',
  'Become a skilled software engineer and contribute to meaningful technology projects.'
]
// Example data: replace with what you can genuinely back up.
export const skills = [
  { title: 'Frontend Development', icon: '🎨', color: '#8B5CF6', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Vue.js', 'React.js', 'Responsive Web Design', 'Flexbox & CSS Grid', 'DOM Manipulation', 'UI Development', 'REST API Integration'] },
  { title: 'Backend Development', icon: '⚙️', color: '#06B6D4', items: ['Java', 'Spring Boot', 'Python', 'RESTful API Development', 'Backend Application Development', 'Authentication & Authorization', 'CRUD Operations', 'Server-Side Programming', 'API Integration'] },
  { title: 'Database', icon: '🗄️', color: '#10B981', items: ['MySQL', 'SQL', 'Database Design', 'Database Management', 'CRUD Operations', 'Database Relationships', 'Joins & Subqueries', 'MySQL Workbench', 'Navicat'] },
  { title: 'Tools & Others', icon: '🧰', color: '#F59E0B', items: ['Git & GitHub', 'Visual Studio Code', 'IntelliJ IDEA', 'NetBeans', 'HBuilderX', 'Code::Blocks', 'Postman', 'npm', 'Maven', 'GitHub Pages', 'WeChat Mini Program Development', 'Object-Oriented Programming (OOP)', 'Data Structures & Algorithms', 'Software Development Life Cycle (SDLC)', 'Responsive Web Design'] },
  { title: 'Soft Skills', icon: '🤝', color: '#D946EF', items: ['Problem-Solving', 'Critical Thinking', 'Teamwork & Collaboration', 'Communication', 'Time Management', 'Adaptability', 'Creativity & Innovation', 'Continuous Learning', 'Attention to Detail', 'Analytical Thinking'] }
]
// repo/demo: '' until real URLs exist. hue picks the preview gradient.
export const projects = [
  { title: 'TravelMemo', featured: true, image: travelMemoImage, hue: [190, 230], icon: '🏔️', desc: 'A personal travel memory website to create and share memorable experiences with friends.', tech: ['React', 'Node.js', 'MongoDB'], repo: '', demo: '' },
  { title: 'TechNova: Intelligent E-commerce System', featured: true, image: technoVaImage, hue: [250, 300], icon: '🎧', desc: 'A full-stack smart electronics e-commerce platform featuring standard online shopping functionality and an AI-powered customer assistant.', tech: ['React', 'Spring Boot', 'MySQL'], repo: '', demo: '' },
  { title: 'Study Tracker', featured: false, image: studyTrackerImage, hue: [210, 270], icon: '💻', desc: 'A web-based study management application designed to organize study tasks, track learning progress, and improve productivity.', tech: ['HTML', 'CSS', 'JavaScript'], repo: '', demo: '' }
]
export const education = [
  { icon: '🎓', title: 'B.Sc. in Software Engineering', place: 'Chengdu Neusoft University', when: 'Expected 2027' },
  { icon: '📘', title: 'Higher Secondary Certificate (HSC)', place: 'Shahid Abul Hasnat Muhammad Kamaruzzaman Government Degree College, Bangladesh', when: '2021', result: 'GPA: 5.00/5.00' },
  { icon: '📗', title: 'Secondary School Certificate (SSC)', place: 'Baya School and College', when: '2019', result: 'GPA: 5.00/5.00' }
]
export const experience = [
  {
    title: 'Frontend Developer',
    place: 'Baobao E-commerce Website',
    description: 'Developed responsive, user-friendly interfaces and improved mobile usability and the overall shopping experience.',
    url: 'https://baobao.com.bd/',
    icon: '💼'
  }
]
export const certificates = [
  { name: 'Research Paper Writing Course', org: 'Amar iSchool', year: 'May 2026', icon: '📝', color: '#2563EB', url: '' },
  { name: 'Web Development Fundamentals', org: 'IBM SkillsBuild', year: 'September 2026', icon: '💻', color: '#0F62FE', url: '' },
  { name: 'Youth Mentorship Volunteer Certificate', org: '150 Hours of Volunteering', year: 'March 2025', icon: '🤝', color: '#10B981', url: '' },
  { name: 'Bangladesh Environment Olympiad 2024', org: 'Certificate of Participation', year: '', icon: '🌱', color: '#16A34A', url: '' },
  { name: '20th Bangladesh Mathematical Olympiad', org: 'Junior Category, Online Regional', year: 'February 2022', icon: '🧮', color: '#F59E0B', url: '' },
  { name: 'ICT Olympiad Bangladesh Course', org: 'BrightSkills', year: 'June 2022', icon: '🖥️', color: '#8B5CF6', url: '' }
]
export const nav = ['home', 'about', 'projects', 'skills', 'experience', 'certificates', 'contact']
