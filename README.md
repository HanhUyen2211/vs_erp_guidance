# ERP Web Guidance

Hệ thống hướng dẫn sử dụng ERP nội bộ — xem PDF và video trực tiếp từ Google Drive.

## Công nghệ
- **Vite** + Vanilla JS
- Deploy: **Vercel**
- Tài liệu: **Google Drive** (PDF + Video)

## Cài đặt & Chạy local

```bash
npm install
npm run dev
```

Mở trình duyệt: `http://localhost:3000`

## Build Production

```bash
npm run build
```

## Deploy Vercel

1. Push code lên GitHub
2. Kết nối repo với Vercel
3. Vercel tự động build & deploy

## Cách thêm tài liệu PDF / Video

Mở file **`src/config.js`** và điền Google Drive File ID vào từng module:

```js
{
  id: "login",
  label: "Login",
  icon: "🔐",
  pdf: "YOUR_GOOGLE_DRIVE_FILE_ID",    // ← File ID của PDF
  video: "YOUR_GOOGLE_DRIVE_FILE_ID",  // ← File ID của Video
}
```

### Lấy File ID từ Google Drive

1. Upload file lên Google Drive
2. Click chuột phải → **Share** → **Anyone with the link** → Copy link
3. Link dạng: `https://drive.google.com/file/d/`**`1aBcDeFgHiJkLmNoPqRsTuV`**`/view`
4. Lấy phần **in đậm** là File ID

## Cấu trúc Modules

| Module | Sub-modules |
|--------|-------------|
| Login | — |
| Item Master | — |
| BOM | — |
| Sales Order | — |
| Production Order | Production Order, Recipe |
| Purchase | Purchase Requisitions, Purchase Orders |
| Delivery | Outbound, Inbound, Good Issues, Good Receipts |
| Invoice | — |
