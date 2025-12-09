# Portfolio Soufiane

A modern, responsive one-page portfolio website built with React, Vite, and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimal design with custom color palette
- **Centered Layout**: Hero section with centered vertical layout and geometric patterns
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Subtle hover effects and smooth scrolling
- **Interactive Components**: Contact form, navigation, and skill progress bars
- **SEO Optimized**: Semantic HTML structure and meta tags

## Color Palette

- Background: #FFFFFF (White)
- Primary Text: #333333 (Dark Gray)
- Accent 1: #0077B6 (Blue Petrol)

## Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
portfolio-soufiane/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change name and title
   - Update tagline and description

2. **About Section** (`src/components/About.jsx`):
   - Replace bio text
   - Update photo placeholder
   - Modify skill tags

3. **Skills Section** (`src/components/Skills.jsx`):
   - Update skill names and percentages
   - Modify tools and technologies list

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace with your actual projects
   - Update descriptions and technologies
   - Add real project links

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update email address
   - Modify phone number and location
   - Update social media links

### Styling

- **Colors**: Modify `tailwind.config.js` to change the color palette
- **Typography**: Update font imports in `index.html`
- **Animations**: Customize animations in `tailwind.config.js` and `src/index.css`

## Design Changes

### Hero Section Redesign (Latest Update)

The Hero section has been redesigned with an **asymmetric split-screen layout** approach:

**New Design Features:**
- **Split-Screen Layout**: Large profile image on the left, content on the right (responsive: stacks on mobile)
- **Large Profile Image**: Prominent profile photo on the left with decorative elements and floating stat badges
- **Dynamic Background**: Diagonal gradient overlays with animated floating shapes
- **Inline Stats**: Statistics displayed inline with large numbers next to labels
- **Floating Badges**: Animated stat badges positioned around the profile image
- **Border Quote**: Quote displayed with a left border accent instead of a box
- **Enhanced Visual Depth**: Multiple layers with shadows, borders, and decorative elements

**Layout Changes:**
- Layout: Changed from centered vertical to asymmetric two-column (image left, content right)
- Profile: Large image on left side with floating stat badges
- Background: Diagonal gradients and animated shapes instead of grid patterns
- Stats: Inline display with large numbers instead of cards
- Quote: Simple border-left style instead of glassmorphism box

**Technical Improvements:**
- Asymmetric layout creates visual interest and better use of space
- Large profile image creates strong visual anchor
- Floating badges add dynamic interactive elements
- Diagonal background elements add depth and movement
- Better balance between visual and textual content

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Firebase Hosting**: Use Firebase CLI

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing this portfolio, feel free to reach out!
