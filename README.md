# Next.js Frontend for Microservices App

This Next.js application serves as the frontend for the microservices-based system designed with .NET and Docker. It provides a user-friendly interface to interact with the backend services, managing auctions, user authentication, and more.

## Features

- **Dynamic Interaction**: Users can interact in real-time with the auction and bidding services.
- **User Authentication**: Integrates with the IdentityService via the GatewayService to handle user authentication and authorization using NextAuth and Duende IdentityServer.
- **Responsive Design**: Crafted to provide an optimal viewing experience across a wide range of devices.
- **Real-time Updates**: Utilizes modern web technologies to update the user interface in real time as data changes on the backend.
- **Form Management**: Uses React Hook Form for handling forms efficiently.
- **Error Messaging**: Implements React Hot Toast for displaying error messages to users.
- **State Management**: Utilizes Zustand for easy and efficient state management.
- **Real-time Notifications**: Uses SignalR to notify users about auction events such as new auctions, auction end times, and bid updates.

## Getting Started

To get this project up and running on your local machine, follow these steps:

### Prerequisites

- Node.js and npm installed.
- Access to the backend services, either locally or through a network.
- Docker installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rcarlosjorge/nextjs-Microservices.git
2. Install dependencies:
   ```bash
   npm install
3. Create a Docker network to facilitate communication between the backend and frontend services:
   ```bash
   docker network create my_microservices_network
4. Build and start the service:
   ```bash
   docker compose build
   docker compose up -d

## Connecting to the Backend
This application is designed to run within a Docker network to ensure seamless communication with the backend services. Here is how you can set it up:

- **Create a Network:** Ensure that you have created a Docker network named my_microservices_network as mentioned above.

- **Static IPs:** Some backend services are assigned static IP addresses to simplify their connection. Ensure these IP addresses are configured correctly in your environment files.

## Authentication
This project uses NextAuth to handle user authentication. It integrates with Duende IdentityServer to manage authentication tokens and user sessions.

## Form Management
For managing forms efficiently, the project uses React Hook Form. This library simplifies form validation and submission, providing a seamless user experience.

## Real-time Notifications
The application leverages SignalR for real-time notifications. Users receive immediate updates when new auctions are created, auctions end, and bid statuses change. This enhances the interactive experience of the application.

## Error Messaging
React Hot Toast is used to display error messages to users. This ensures that users are promptly informed about any issues that occur during their interaction with the application.

## State Management
State management is handled using Zustand, a small, fast, and scalable state management library. Zustand provides a simple API to manage and update the application state efficiently. It helps keep track of auction data and updates the user interface accordingly.

## Fetch Wrapper for API Requests
To simplify API requests, a custom fetch wrapper is used. This handles authentication tokens and standardizes the request and response handling.

  ```js
    async function get(url: string) {
      const requestOptions = {
        method: "GET",
        headers: await getHeaders(),
      };
    
      const response = await fetch(baseUrl + url, requestOptions);
      return await handleResponse(response);
    }
    
    async function post(url: string, body: {}) {
      const requestOptions = {
        method: "POST",
        headers: await getHeaders(),
        body: JSON.stringify(body),
      };
      const response = await fetch(baseUrl + url, requestOptions);
      return await handleResponse(response);
    }
