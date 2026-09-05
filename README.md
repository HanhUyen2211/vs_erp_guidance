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

Vào website → **Quản trị** → đăng nhập admin → dán Google Drive File ID hoặc link Google Drive đầy đủ.
Khi bấm **Lưu**, web sẽ gọi Vercel Function để commit JSON mới lên GitHub.

### Cấu hình cần có trên Vercel

- `GITHUB_TOKEN`
- `GITHUB_OWNER`
- `GITHUB_REPO`
- `GITHUB_BRANCH` (mặc định `main`)
- `GITHUB_CONTENT_PATH` (mặc định `site-content.json`)
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET`

Nếu chưa set `ADMIN_USERNAME` / `ADMIN_PASSWORD`, function sẽ dùng mặc định `admin / erp-admin` cho local/dev.

Admin có thể cập nhật:
- PDF / Video tổng quan ở trang Home
- PDF / Video cho từng module và sub-module
- Tài liệu chung trong tab **Tài liệu**

> Lưu ý: không cần server riêng hay database. Nội dung được lưu trong GitHub repo, Vercel sẽ deploy lại tự động sau commit.
> Khi chạy `npm run dev`, UI vẫn xem được nhưng login/save GitHub cần Vercel hoặc `vercel dev`.

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

## Cấu trúc Tab Tài Liệu

| Tab | Tài liệu |
|-----|----------|
| Quy định & Danh mục | Hướng dẫn mã code, Danh sách ID, Danh sách máy |
| Hướng dẫn thao tác | Tạo đơn giao hàng trực tiếp khi có tồn kho, Sử dụng terminal, Tạo lệnh sản xuất |
| Tài liệu tham khảo | ERP Demo Flow, Giải thích MAC, Giải thích loại tồn kho, Giải thích các loại lệnh sản xuất |
