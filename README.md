# Cemig Timer ⚡

**Cemig Timer** is an application created with **Electron** to help call center agents manage waiting time by allowing agents to see how much time has passed

## 🤔 The problem
For those who have worked in a call center, you know that you can't ask a customer for a moment and leave them waiting for too long, as some companies have clear rules about this, so I created this application to remind agents that they are about to exceed the waiting time limit.

## 📷 Screenshot
![screenshot](https://imgur.com/OSBGQRU.png)

## 🚀 Features

- ⏱ **Smart timer**: Useful buttons to start, stop, restart, and reboot
- 💻 **Cross-platform interface**: Compatible with Linux, Windows, and macOS.
- 👩‍💼 **Focus on the attendant**: Cute and eye-pleasing design
- ~~🛠 **Customizable**: Easily configure settings and timers. (in progress)~~

## 🛠️ Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (recommended: latest LTS version)
- **npm** or **yarn**
- A Linux-compatible environment for generating `.deb` and `.rpm` packages.

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/HarukaYamamoto0/cemigtimer.git
   cd cemigtimer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the application**

   ```bash
   npm start
   ```

4. **Build for distribution**
   - To generate installable packages, run:
     ```bash
     npm run make
     ```
     
## 📦 Build & Distribution

### Linux

- Generate `.deb` and `.rpm` packages with:
  ```bash
  npm run make
  ```
  Ensure you have the necessary dependencies installed:
  - `binutils` for the `strip` utility.
  - `fakeroot` and `dpkg-dev` for `.deb` files.
  - `rpm` for `.rpm` files.

### Windows and macOS

- Experimental support.

## 🛡️ Technologies Used

- **Electron**: Framework for building desktop applications with web technologies.
- **Node.js**: JavaScript runtime environment.
- **Electron Forge**: Tool for packaging and distributing Electron apps.

## 🤝 Contributions

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the original repository:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

## 📝 License

This project is licensed under the **Apache-2.0 License**. Feel free to use and modify it as needed.

## 📧 Contact

Developed by **[HarukaYamamoto0](https://harukadev.com)**  
Feel free to reach out for feedback or suggestions.

### ✨ _If this project helped you, consider leaving a ⭐ on the repository!_
