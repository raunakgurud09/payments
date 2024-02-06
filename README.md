# Payment Integration with React and Node.js

This project is a simple demonstration of integrating Razorpay payment gateway into a web application built with React on the frontend and Node.js on the backend. This README file will guide you through setting up and running the project.

## Prerequisites

Before getting started, ensure you have the following installed:

- Node.js (https://nodejs.org/) - Make sure to have Node.js installed on your machine.
- npm (comes with Node.js) or pnpm (https://pnpm.io/) - Package managers for JavaScript.

## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/raunakgurud09/payments.git
   ```

2. Navigate to the project directory:

   ```bash
   cd payment
   ```

3. Install dependencies for both frontend and backend:

   ```bash
   cd client
   pnpm install   # or yarn install
   cd ../server
   pnpm install   # or yarn install
   ```

4. Configure Razorpay API Keys:
   
   - Go to the Razorpay Dashboard (https://dashboard.razorpay.com/app/dashboard) and sign in or create an account.
   - Obtain your API key and API secret from the dashboard.
   - Create a `.env` copy from `.env.sample` file in the `backend` directory and add the following:

     ```plaintext
     RAZORPAY_KEY_ID=YOUR_KEY_ID
     RAZORPAY_KEY_SECRET=YOUR_KEY_SECRET
     ```

     Replace `YOUR_KEY_ID` and `YOUR_KEY_SECRET` with your actual Razorpay API key and secret.

5. Run the backend server:

   ```bash
   cd server
   pnpm start
   ```

6. Run the frontend development server:

   ```bash
   cd client
   pnpm start
   ```

7. Open your browser and navigate to `http://localhost:5173` to view the application.

## Usage

Once the application is running, you can test the Razorpay payment integration by following these steps:

1. Enter the amount you want to pay.
2. Click on the "Pay Now" button.
3. You will be redirected to the Razorpay checkout page.
4. Complete the payment process using the provided options (e.g., credit/debit card, net banking, etc.).
5. After successful payment, you will be redirected back to the application with a success message.

## Contributors

- [Raunak Gurud](https://github.com/raunakgurud09)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Razorpay for providing a simple and secure payment gateway solution.
- React and Node.js communities for their valuable resources and documentation.