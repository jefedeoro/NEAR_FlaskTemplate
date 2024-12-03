# NEAR Python Template

This is a starter template for building NEAR dApps with Python and Flask.

## Features

- **Python Flask backend** (`app.py`)
- **NEAR Wallet integration** using `WalletManager`
- **Modular components and templates** in `templates`
- **Import maps** for managing JavaScript dependencies (`static/importMap.js`)

## Getting Started

### Prerequisites

- Python 3.x
- Node.js and npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/your-repo.git
    ```
2. Navigate to the project directory:
    ```sh
    cd your-repo
    ```
3. Install Python dependencies:
    ```sh
    pip install -r requirements.txt
    ```

## Running the Application

Start the Flask development server:
```sh
python app.py
```

The app will be available at [http://localhost:5000](http://localhost:5000).

## Folder Structure

- `app.py`: Main Flask application.
- `static`: Static files (CSS, JavaScript).
  - `css/style.css`: Stylesheets.
  - `js/main.js`: Main JavaScript file that initiates the `WalletManager`.
  - `js/wallet.js`: Wallet integration using the `WalletManager` class.
  - `importMap.js`: Import map for JavaScript modules.
- `templates`: HTML templates.
  - `index.html`: Main landing page.
  - `components/navbar.html`: Navigation bar component.
  - `components/footer.html`: Footer component.
  - `components/wallet-button.html`: Wallet connect button component.

## Features

- **NEAR Wallet Integration**: Connect and interact with NEAR wallets using the `WalletManager`.
- **Modular Design**: Reusable components in the `components` directory.
- **Custom Styling**: Customize the look and feel using `style.css`.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss changes.