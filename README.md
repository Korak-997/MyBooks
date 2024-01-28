# MyBooks

## Overview

MyBooks is a [Progressive Web App (PWA)](https://web.dev/explore/progressive-web-apps) designed to help users manage their physical library at home. Built with [SvelteKit](https://kit.svelte.dev/), [Tailwind CSS](https://tailwindcss.com/), and [DaisyUI](https://daisyui.com/) for styling, the app leverages [Appwrite Cloud](https://cloud.appwrite.io/) for the backend. Users can track their book collection, including details about each book and its author. The application is designed to be self-hosted, ensuring privacy and control over personal library data.

## Features

1. **PWA Support:** The application is a Progressive Web App, allowing users to install it on their devices for an app-like experience, including offline access.

2. **Mobile-First Design:** The user interface is optimized for mobile devices, ensuring a seamless and user-friendly experience on various screen sizes.

3. **Fast and Friendly:** The application is designed to be super-fast and user-friendly, providing a smooth experience for users managing their personal libraries.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- [Appwrite Cloud](https://appwrite.io/) account for the backend services

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:Korak-997/MyBooks.git
   ```

2. Change into the project directory:

   ```bash
   cd MyBooks
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and configure it with your Appwrite Cloud credentials:

   ```env
   VITE_APPWRITE_ENDPOINT=https://appwrite.example.com/v1
   VITE_APPWRITE_PROJECT_ID=your-appwrite-project-id
   ```

5. Run the application:

   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5000` to access the application.

## Usage

### Adding Books

1. Navigate to the `Books` Page (HomePage).
2. Click on the `+` button.
3. Fill in the required information such as title, pages, description, language, genres...
4. Click `Save` to add the book to your library.

### Adding Authors

1. Navigate to the `Authors` page.
2. Click on the `+` button.
3. Provide the author's name, birthplace, birthday, and death date if applicable.
4. Click "Save" to add the author to your library.

> NOTE: Before adding a `Book` you should first add its `Author` otherwise you will not be able to add the book

### Managing Relationships

- If an author has multiple books, you can connect them in a one-to-many relationship by associating the books with the respective author.

### Future Todos

- [ ] Enhance application security.
- [ ] Allow users to generate QR codes within the app.
- [x] Implement the ability to edit authors or books.
- [ ] Allow users to share their library

## Support and Contributions

For any issues or feature requests, please [open an issue](https://github.com/Korak-997/MyBooks/issues/new/choose). Contributions are welcome through pull requests.

## License

This project is licensed under the [MIT License](./LICENSE).
