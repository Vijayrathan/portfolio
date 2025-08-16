# Portfolio Website

A beautiful, animated portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design** - Clean, professional design with smooth animations
- 🌙 **Dark Theme** - Beautiful dark theme with gradient accents
- 📱 **Responsive** - Fully responsive design for all devices
- ⚡ **Fast** - Built with Vite for lightning-fast development
- 📧 **Contact Form** - Working contact form that sends emails via Resend API
- 🎭 **Animations** - Smooth Framer Motion animations throughout

## Tech Stack

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Email Service**: Resend API
- **Backend**: Express.js (for contact form)

## Setup Instructions

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Resend API Key for sending emails
# Get your API key from: https://resend.com/api-keys
RESEND_API_KEY=your_resend_api_key_here

# Server port
PORT=3001
```

### 3. Get Resend API Key

1. Go to [Resend](https://resend.com)
2. Sign up for a free account
3. Create an API key
4. Add it to your `.env` file

### 4. Run Development Server

```bash
# Run both frontend and backend servers
pnpm run dev:full

# Or run them separately:
pnpm run dev        # Frontend (Vite)
pnpm run server     # Backend (Express)
```

The website will be available at:

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

### 5. Build for Production

```bash
pnpm run build
```

## Project Structure

```
portfolio-node/
├── src/
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # React entry point
│   ├── components/          # Reusable components
│   └── styles/              # Global styles
├── server.js                # Express server for contact form
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
```

## Contact Form

The contact form sends emails to `vijayrathank@gmail.com` with:

- Sender's name
- Sender's email
- Message content

The form includes:

- Real-time validation
- Loading states
- Success/error messages
- Form reset after successful submission

## Customization

### Colors

Update the gradient colors in `tailwind.config.ts` and `App.tsx`

### Content

Edit the content in `src/App.tsx`:

- Hero section text
- About section
- Skills and technologies
- Experience timeline
- Contact form

### Styling

Modify the Tailwind classes in `src/App.tsx` and `src/styles/globals.css`

## Deployment

### Option 1: Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Set environment variables
4. Deploy

### Option 2: Netlify

1. Push to GitHub
2. Connect to Netlify
3. Set environment variables
4. Deploy

### Option 3: Custom Server

1. Build the project: `pnpm run build`
2. Deploy the `dist` folder and `server.js`
3. Set environment variables
4. Run `node server.js`

## Environment Variables

| Variable         | Description                 | Required |
| ---------------- | --------------------------- | -------- |
| `RESEND_API_KEY` | Your Resend API key         | Yes      |
| `PORT`           | Server port (default: 3001) | No       |

## Troubleshooting

### Contact Form Not Working

1. Check if the backend server is running
2. Verify your Resend API key is correct
3. Check browser console for errors
4. Ensure the API endpoint is accessible

### Build Errors

1. Clear `node_modules` and reinstall: `rm -rf node_modules && pnpm install`
2. Check TypeScript errors: `pnpm run typecheck`
3. Verify all dependencies are installed

## License

MIT License - feel free to use this template for your own portfolio!
