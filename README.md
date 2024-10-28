# Movies For You 🎬

A modern, responsive React application that allows users to search and explore movies using the OMDB API. Built with React and styled with Tailwind CSS, this application provides a sleek interface for discovering movies.

![Movies For You Screenshot](![image](https://github.com/user-attachments/assets/4d06c52a-ff74-402d-86cb-a707da865e0d)
)

## ✨ Features

### Core Functionality
- 🔍 Real-time movie search with OMDB API integration
- 📱 Fully responsive design that works on all devices
- 🎨 Modern UI with hover effects and animations
- 🎬 Detailed movie cards showing year, type, and title
- 🌓 Light & Dark mode optimized interface
- ⚡ Fast and efficient search results

### UI/UX Features
- Gradient text and background effects
- Smooth hover animations on movie cards
- Loading states with animated spinner
- Elegant empty state handling
- Responsive grid layout
- Clean and intuitive search interface

## 🛠️ Technologies Used

- **React** - Front-end library
- **Tailwind CSS** - Styling and UI components
- **OMDB API** - Movie database
- **Lucide React** - Icon library
- **Hero Icons** - Additional icon set
- **PostCSS** - CSS processing

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/jayanthmarupaka29/Movies-For-You.git
cd Movies-For-You
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OMDB API key:
```env
REACT_APP_OMDB_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## 🚀 Usage

1. **Search Movies**
   - Type a movie title in the search bar
   - Press enter or click the search icon
   - Results will appear in a grid layout

2. **View Movie Details**
   - Hover over movie cards to see additional information
   - Year and type information is displayed
   - Click to view more details (if implemented)

## 💻 Project Structure

```
movies-for-you/
├── src/
│   ├── App.js           # Main application component
│   ├── index.js         # Entry point
│   └── index.css        # Global styles and Tailwind imports
├── public/
│   └── index.html       # HTML template
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies and scripts
```

## ⚙️ Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`:
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Environment Variables
Required environment variables:
- `REACT_APP_OMDB_API_KEY`: Your OMDB API key

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 Known Issues

- Images may take time to load depending on the OMDB API response time
- Some movies might not have poster images
- API rate limiting may affect search results

## 🔜 Future Improvements

- [ ] Add movie details page
- [ ] Implement favorite movies functionality
- [ ] Add user authentication
- [ ] Include movie ratings and reviews
- [ ] Add filters for year, type, and genre
- [ ] Implement infinite scroll for search results
- [ ] Add movie trailers integration
- [ ] Implement local storage for recent searches

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OMDB API for providing movie data
- Tailwind CSS for the styling framework
- React community for components and inspiration
- Icons provided by Lucide React and Hero Icons

## 👤 Author

Marupaka Jayanth Kumar
- GitHub: [@jayanthmarupaka29](https://github.com/jayanthmarupaka29)
- LinkedIn: [Marupaka Jayanth Kumar](https://www.linkedin.com/in/marupaka-jayanth-kumar-baa176229/)

## 💬 Support

For support, email adj124343@gmail.com or create an issue in the repository.
