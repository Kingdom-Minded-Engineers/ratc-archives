# 📚 RATC Archives - Digital Library

A high-performance, minimal digital resource catalog designed for the fast discovery and distribution of spiritual guides and educational books.

## 🚀 Overview

RATC Archives is a "zero-friction" digital library. It eliminates traditional barriers like account creation and login walls, providing immediate access to a curated collection of PDFs and e-books.

### Key Features
- **Instant Search:** Real-time filtering of the entire library by title.
- **Category Navigation:** Fast switching between collections (e.g., Leadership, Prayer, Ministry).
- **One-Click Access:** Direct preview and download functionality.
- **Optimized Performance:** Built with Next.js for near-instant page loads.

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | Next.js 15 | Framework for Static Site Generation (SSG) |
| **Styling** | Tailwind CSS | Modern, responsive utility-first styling |
| **Database** | Supabase (Postgres) | Metadata storage for books and categories |
| **Storage** | Supabase Storage | Hosting for PDF files and cover images |
| **Deployment**| Vercel | Global Edge Network for fast delivery |

## ⚙️ Local Development

### Prerequisites
- Node.js 18.x or later
- npm / yarn / pnpm

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Kingdom-Minded-Engineers/ratc-archives.git
   cd ratc-archives
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure
- `/src/app`: Next.js App Router pages and layouts.
- `/constants`: Mock data and static configuration (replaced by Supabase in production).
- `/public`: Static assets.

---
*Developed for the Kingdom Minded Engineers project.*
