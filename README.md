* Deployed to https://ghostpad.brainbuddys.com 
---
# 🕶️ **GhostPad**
A local‑first, privacy‑focused text workspace built with **React**, **Vite**, and **Tailwind CSS**. GhostPad transforms and protects text entirely on your device using modern browser cryptography — no servers, no tracking, no data leaving your machine.

---

## 🔐 **Why GhostPad Exists**
GhostPad is designed for creators, developers, and anyone who wants a simple, secure way to transform text without exposing it to the cloud. All encryption and decryption happen **client‑side**, powered by the WebCrypto API. Your password is never stored, logged, or transmitted.

---

## ⚡ **Features**
- **Local‑only encryption** using AES‑GCM  
- **Password‑derived keys** via PBKDF2 (never stored or exposed)  
- **React + Vite** for fast, modern performance  
- **Tailwind CSS** for clean, responsive UI  
- **Save encrypted notes** locally (browser storage)  
- **Decrypt on demand** with the correct password  
- **No backend, no network calls, no data leakage**  

---

## 🛡️ **Security Model**
GhostPad uses:
- **AES‑256‑GCM** for authenticated encryption  
- **PBKDF2 key derivation** with a unique salt per message  
- **Random IVs** for every encryption  
- **Opaque CryptoKey objects**, which cannot be inspected in DevTools  

Your text never leaves your device.  
Your password is never saved.  
Your keys are never exposed.  

---

## 🧩 **Tech Stack**
- ⚛️ React  
- ⚡ Vite  
- 🎨 Tailwind CSS  
- 🔐 WebCrypto API  
- 💾 LocalStorage (encrypted data only)

---

## 🚀 **Getting Started**

```bash
npm install
npm run dev
```

GhostPad runs entirely in your browser — no backend required.

---

## 📁 **Project Structure**

```
src/
  components/
    EncryptPanel.jsx
    DecryptPanel.jsx
    SavedLetters.jsx
  utils/
    crypto.js
    storage.js
  styles/
    global.css
    animations.css
    panel.css
  App.jsx
  main.jsx
```

---

## 🧠 **How It Works**
1. You type a message  
2. You enter a password  
3. GhostPad derives a secure key using PBKDF2  
4. AES‑GCM encrypts your message  
5. You can save or share the encrypted output  
6. Anyone with the encrypted text + password can decrypt it locally  

---

## 🕳️ **Why “GhostPad”?**
Because your text leaves **no trace**.  
It appears when you need it, disappears when you don’t, and never touches a server.

---

## 📜 **License**
MIT — free to use, modify, and build on.

---

 # Fonts Used 
 * Sixtyfour-Regular-VariableFont.ttf

 