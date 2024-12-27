
# Quix - Quiz Application

**Quix** is a dynamic quiz application that pulls content from the [Open Trivia Database (OpenTDB)](https://opentdb.com/) API, offering questions across various categories such as movies, comics, sports, and entertainment. The app is built using **Angular** and styled with **Material UI** to provide an intuitive and responsive user experience.

## Features

- Interactive quizzes across multiple categories (Movies, Comics, Sports, Entertainment, etc.)
- Real-time questions fetched from the OpenTDB API
- Material UI components for a modern, clean design

## Technologies Used

- **Frontend:** Angular
- **UI Framework:** Angular Material
- **API:** OpenTDB API for quiz content
- **Other Libraries:**  Angular Services for API handling

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v12 or higher)
- [Angular CLI](https://angular.io/cli)

### Steps to Set Up Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Santhoshlm10/Quix.git
   ```

2. **Install Dependencies:**
   Navigate to the project directory and install the necessary dependencies:
   ```bash
   cd Quix
   npm install
   ```

3. **Run the Development Server:**
   After the installation is complete, you can start the Angular development server:
   ```bash
   ng serve
   ```

4. **Access the App:**
   Open your browser and go to [http://localhost:4200](http://localhost:4200) to start using the app.


## API Integration

This app utilizes the [Open Trivia Database API](https://opentdb.com/) to fetch quiz questions in real-time. The questions are dynamically loaded based on the selected category and difficulty.

For more details on the API endpoints and available question categories, visit the [OpenTDB documentation](https://opentdb.com/api_config.php).

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit them (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.