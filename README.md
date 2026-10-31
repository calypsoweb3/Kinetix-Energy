# Kinetix Energy

A responsive, multi-page website for Kinetix Energy, a solar and renewable energy company. The site introduces the company, explains residential and business energy solutions, showcases projects, answers common questions, and provides a contact page.

## Pages

- **Home** (`home.html`) — company introduction and links to key services.
- **Solutions** (`pages/solutions.html`) — residential and business energy options.
- **Services** (`pages/services.html`) — assessments, planning, installation coordination, and system support.
- **Projects** (`pages/projects.html`) — featured project examples.
- **FAQs** (`pages/faqs.html`) — answers to common questions.
- **About** (`pages/about.html`) — company approach and principles.
- **Contact** (`pages/contact.html`) — contact information and an inquiry form.

## Run locally

This is a static website and does not require a package manager, build step, or server. Open `home.html` in a browser to view it.

## Project structure

```text
.
├── assets/
│   ├── icons/
│   ├── images/
│   └── logos/
├── css/
│   ├── components.css
│   ├── responsive.css
│   └── style.css
├── js/
│   └── main.js
├── pages/
│   ├── about.html
│   ├── contact.html
│   ├── faqs.html
│   ├── projects.html
│   ├── services.html
│   └── solutions.html
└── home.html
```

## Notes

- The site uses plain HTML, CSS, and JavaScript; there are no external runtime dependencies.
- The mobile navigation is handled in `js/main.js`.
- The contact form currently displays a local confirmation message and does not submit data to a backend.