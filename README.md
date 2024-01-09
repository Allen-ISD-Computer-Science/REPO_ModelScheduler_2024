# Model Scheduler (2023-2024)

## 🦄 Vision Statement

Empowering students with an intuitive and comprehensive class scheduling website,
our vision aims to provide a decisive framework for helping students schedule
classes for the upcoming new school year. Through inspiration and motivation,
this vision shapes the project's scope, ensuring a seamless and efficient
scheduling experience for the upcoming school year.

## 💼 Roles

- Product Manager: Reynard Gunawan [Reynard-G](https://codermerlin.academy/users/reynard-gunawan/Digital%20Portfolio/index.html)
- Project Manager:
- Release Manager: Darrion Nguyen [darrnguyen](https://codermerlin.academy/users/darrion-nguyen/Digital%20Portfolio/index.html)
- QA Analyst: Lucas Pham [lucas-m-pham](https://codermerlin.academy/users/lucas-pham/Digital%20Portfolio/index.html)
- UI/UX Designer: Willy Lai [swific](https://codermerlin.academy/users/willy-lai/Digital%20Portfolio/index.html)
- DBA:
- Engineer-Frontend (Lead): Helen Giordano  [hgiordano888](https://codermerlin.academy/users/helen-giordano/Digital%20Portfolio/index.html)
- Engineer-Frontend (FE2):
- Engineer-Backend (Lead): Richard Jang  [Richard-Jang](https://codermerlin.academy/users/ming-ruei-jang/Digital%20Portfolio/index.html)
- Engineer-Backend (BE2):

## 🏃 Running
You can either run the Model Scheduler using the CRACO (recommended) or directly with the build scripts. Both methods may require environment variables depending on your situation:

- `PUBLIC_URL` - Most of the time, you won't need to declare this as CoderMerlin routes routes your port directly to your VAPOR url.

### 🧙 CoderMerlin
Using the build scripts on CoderMerlin is significantly easier than serving through a user-unique VAPOR port. To start, head into your CLI:

1. Add any required environment variables to `.env`
2. Build & Serve the app by executing `run`

### 🖥️ Personal Dev. Environment
When using CRACO to build & serve the app, you have two options. You can either run a development environment or build & run a production environment.

#### Development Environment

1. Add any required environment variables to `.env`
2. Serve a development environment by executing `npm run dev`

#### Production Environment

1. Build a production environment by executing `npm run build`
2. Serve a production environment by executing `npm run start`