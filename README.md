# NKL Sea Foods Website

A modern, responsive website for NKL Sea Foods, showcasing their seafood products and services.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations and transitions
- Interactive product filtering system
- Image gallery slider
- Contact form with validation
- SEO-friendly structure

## Project Structure

```
nkl_seafoods/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── ocean-waves.gif
│   ├── about-us.jpg
│   ├── products/
│   │   ├── salmon.jpg
│   │   ├── crab.jpg
│   │   └── oysters.jpg
│   └── gallery/
│       ├── image1.jpg
│       ├── image2.jpg
│       └── image3.jpg
└── README.md
```

## Setup Instructions

1. Clone this repository
2. Add your images to the `images` directory:
   - Add an ocean waves GIF as `images/ocean-waves.gif`
   - Add about section image as `images/about-us.jpg`
   - Add product images to `images/products/`
   - Add gallery images to `images/gallery/`
3. Open `index.html` in a web browser

## Dependencies

- Font Awesome 6.5.1 (CDN)
- Google Fonts - Poppins (CDN)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

To modify the website:

1. Edit `index.html` for structure changes
2. Edit `css/style.css` for styling changes
3. Edit `js/main.js` for functionality changes

## Contact Form

The contact form currently shows a success message but doesn't send data. To make it functional:

1. Set up a server to handle form submissions
2. Update the form submission code in `js/main.js`
3. Add your server endpoint to the form action

## License

This project is licensed under the MIT License.
