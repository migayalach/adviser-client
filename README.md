
# Adviser client

Welcome! This project is a professional landing page developed in **Next.js** to showcase customer experiences covering various fields such as **Engineering, Economics y Finance**.
  
It features a modern design using **HeroUI + Tailwind CSS**, and a robust development workflow with **Jest, Cypress, Docker y GitHub Actions**
## 🚀 Deployment

The project is deployed in Vercel:

👉 [https://adviser-client.vercel.app/](https://adviser-client.vercel.app/)

## Technologies

**Client:** Node, Next, HeroUI, Tailwind, Jest, Cypress, Docker, Github Actions

## Installation

Clone the repository and install the dependencies:

```bash
  git clone https://github.com/migayalach/adviser-client.git

  npm install
```

Run in development:

```bash
  npm run dev
```

Build for production:

```bash
  npm run build
  npm start
```

Example of how to run unit and integration testing:

```bash
  npm run test services.test
  npm run test courses.test
  npm run test feedback.test
```

Get coverage of the entire test:

```bash
  npm run test:coverage
```

Perform e2e testing with 'cypress':

- First run the project with:

```bash
  npm run dev
```

- Step 2: Run the command:

```bash
  npm run test:e2e
```
## Choose testing E2E

![App Screenshot](https://res.cloudinary.com/dqgcyonb9/image/upload/v1757038999/adviser/je5updugwyyprktvhrqr.png)


## View Testing E2E

![App Screenshot](https://res.cloudinary.com/dqgcyonb9/image/upload/v1757038999/adviser/wdsw3horlvq4x7kaqlhy.png)



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_PHONE_NUMBER`

`NEXT_PUBLIC_FACEBOOK_URL`

`NEXT_PUBLIC_TIKTOK_URL`

`NEXT_PUBLIC_LINKEDIN_URL`

`NEXT_PUBLIC_GMAIL`

## 🐳 Docker

You can run this project inside a Docker container, without having to install Node.js on your machine.

### 1. Build the image

Run in the root of the project:

```bash
docker build -t adviser-client .
```

### 2. Run the container
```bash
docker run -p 3000:3000 adviser-client
```

### 3. Run in background mode (optional)
```bash
docker run -d -p 3000:3000 adviser-client
```
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfolio-alpha-ten-78.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/miguel-ch%C3%A1vez-a-b51302288/)
[![tiktok](https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white)](https://www.tiktok.com/@miguelondev)



## 🚀 About Me
I'm a full stack developer. If you need a software such as frontend, backend, database or advice you could writte: 

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ayalachavezmiguel@gmail.com)

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/59175718683)