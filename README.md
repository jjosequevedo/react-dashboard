# React Dashboard with TypeScript

This is a React-based Admin Dashboard application built with TypeScript. It includes user authentication (mocked), a protected route with a data table, and a login page. The project demonstrates features like routing, state management, form handling, and the use of Material UI for a clean interface.

## Features

- **User Authentication**: Mock login with hardcoded credentials.
- **Protected Routes**: Only authenticated users can access certain pages (e.g., the data table).
- **Data Table**: Displays data in a table format with sorting, filtering, and pagination.
- **Logout Functionality**: Clears authentication and redirects to login.
- **State Management**: Local state is managed via React hooks.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **TypeScript**: JavaScript with static types.
- **React Router**: For routing between pages.
- **Material UI**: For styling and UI components.
- **Axios**: For handling HTTP requests (optional for real API integration).
- **Recharts**: For adding charts (future extension).

## Installation

### Prerequisites

- **Node.js**: Ensure that Node.js and npm are installed on your machine. You can download them here.
- **npm**: Comes with Node.js, but make sure it's updated to the latest version.

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/react-dashboard-ts.git
    cd react-dashboard-ts
    ```
2. Run the following command to install all necessary dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```

The application will automatically open in your browser.

### Usage
1. **Logging In**
    The login page is available at /login. Use the following credentials to log in:

    ````
    Email: test@test.com
    Password: password123
    ````
    
    After logging in, you'll be redirected to the data table view at /datatable.

2. **Accessing the Data Table**

    Once logged in, you can view the data table. The table allows:

    - **Pagination**: You can navigate through pages of data.
    - **Filtering**: A text input allows you to filter the rows by name.
    - **Sorting**: Columns are sortable by clicking on the header.
3. **Logout**

    To log out, use the logout button (you can implement it in the DataTable or another component). This will clear the session and redirect back to the login page.

## License
This project is licensed under the MIT License.
