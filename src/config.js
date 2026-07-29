/**
 * =====================================================================
 * ERP GUIDANCE WEBSITE — CONTENT CONFIGURATION FILE
 * =====================================================================
 * Hướng dẫn cập nhật:
 *
 * 1. Để thêm PDF từ Google Drive:
 *    - Mở file trên Google Drive → Share → "Anyone with the link"
 *    - Lấy FILE_ID từ URL: https://drive.google.com/file/d/FILE_ID/view
 *    - Paste vào trường: pdf: "FILE_ID"  hoặc  fileId: "FILE_ID"
 *
 * 2. Để thêm Video từ Google Drive:
 *    - Tương tự lấy FILE_ID
 *    - Paste vào trường: video: "FILE_ID"
 *
 * 3. Để thêm module mới: copy một object trong mảng tabs và chỉnh sửa.
 *
 * 4. Để thêm tài liệu vào tab "Tài liệu":
 *    - Thêm object vào mảng documents bên dưới
 *    - Điền fileId từ Google Drive
 * =====================================================================
 */

export const siteConfig = {
  companyName: "ERP Guidance",
  subtitle: "Hệ thống Hướng dẫn Sử dụng ERP",
  logoText: "ERP",
  // Tài liệu tổng quan & clip full tất cả functions (hiển thị ở trang Home)
  homePdf: "12-mXo9QiLRJ9IY-ei-1mdrabXXg2y4Uk",   // Google Drive File ID — Tài liệu tổng hợp toàn bộ ERP
  homeVideo: "1cAoYtNfdkxl9hm3NKJkwsQI4W58K2r7t", // Google Drive File ID — Clip hướng dẫn đầy đủ tất cả functions
};

/**
 * =====================================================================
 * TÀI LIỆU CHUNG — Danh sách tài liệu tham khảo
 * =====================================================================
 * Mỗi item gồm:
 *   id       — định danh duy nhất (không dấu, không khoảng trắng)
 *   title    — Tiêu đề hiển thị
 *   desc     — Mô tả ngắn (tuỳ chọn)
 *   fileId   — Google Drive File ID (dùng cho pdf / pptx / xlsx / docx)
 *   type     — Loại file: "pdf" | "pptx" | "xlsx" | "docx" | "link"
 *              (mặc định: "pdf" nếu bỏ trống)
 *   url      — URL ngoài (chỉ dùng khi type = "link")
 *   category — Nhóm tài liệu (ví dụ: "Chính sách", "Quy trình", "Biểu mẫu")
 *
 * Cách lấy fileId từ Google Drive:
 *   1. Mở file → Share → "Anyone with the link"
 *   2. Copy URL: https://drive.google.com/file/d/FILE_ID/view
 *   3. Dán FILE_ID vào trường fileId bên dưới
 * =====================================================================
 */
export const documents = [
  // ── Xóa các ví dụ bên dưới và thay bằng tài liệu thật ──

  // PDF
  // {
  //   id: "quy-trinh-erp",
  //   title: "Quy trình ERP tổng hợp",
  //   desc: "Tài liệu hướng dẫn toàn bộ quy trình",
  //   fileId: "GOOGLE_DRIVE_FILE_ID",
  //   type: "pdf",
  //   category: "Quy trình",
  // },

  // PowerPoint
  // {
  //   id: "slide-training",
  //   title: "Slide Training ERP",
  //   desc: "Bài thuyết trình đào tạo nội bộ",
  //   fileId: "GOOGLE_DRIVE_FILE_ID",
  //   type: "pptx",
  //   category: "Đào tạo",
  // },

  // Excel
  // {
  //   id: "bieu-mau-so",
  //   title: "Biểu mẫu Số liệu",
  //   desc: "Template nhập liệu hàng tháng",
  //   fileId: "GOOGLE_DRIVE_FILE_ID",
  //   type: "xlsx",
  //   category: "Biểu mẫu",
  // },

  // Word
  // {
  //   id: "chinh-sach-muahang",
  //   title: "Chính sách Mua hàng",
  //   desc: "Quy định nội bộ về quy trình mua hàng",
  //   fileId: "GOOGLE_DRIVE_FILE_ID",
  //   type: "docx",
  //   category: "Chính sách",
  // },

  // Link ngoài
  // {
  //   id: "link-erp-portal",
  //   title: "ERP Portal",
  //   desc: "Truy cập hệ thống ERP trực tiếp",
  //   type: "link",
  //   url: "https://your-erp-portal.com",
  //   category: "Hệ thống",
  // },
  {
    id: "code_guidance",
    title: "HƯỚNG DẪN MÃ CODE",
    desc: "HƯỚNG DẪN VỀ MÃ CODE",
    fileId: "1oYU55d09AOEz_NBgCVaW-QyCvWFx4SFv",
    type: "xlsx",
    category: "Quy định",
  },
  {
    id: "erp_demo_flow",
    title: "ERP DEMO FLOW",
    desc: "QUY TRÌNH ERP THỬ NGHIỆM",
    fileId: "1F8UKUPg5zE9uBcojkZgW99n79uuZZRAR",
    type: "pdf",
    category: "Quy trình",
  },
  {
    id: "explain_mac",
    title: "GIẢI THÍCH MAC",
    desc: "GIẢI THÍCH VỀ MÃ MAC",
    fileId: "1aDR8Jp_Nk4mfZRejqrXiUqtH4KAym2JW",
    type: "docx",
    category: "Giải thích",
  },
  {
    id: "explain_stock_types",
    title: "GIẢI THÍCH LOẠI TỒN KHO",
    desc: "GIẢI THÍCH VỀ CÁC LOẠI TỒN KHO",
    fileId: "1mQJUpNagnQFauy0i38lLNI8QVZIfQWLy",
    type: "docx",
    category: "Giải thích",
  },
  {
    id: "direct_delivery_guidance",
    title: "HƯỚNG DẪN TẠO ĐƠN GIAO HÀNG TRỰC TIẾP KHI CÓ TỒN KHO",
    desc: "HƯỚNG DẪN TẠO ĐƠN GIAO HÀNG TRỰC TIẾP KHI CÓ TỒN KHOHướng dẫn tạo đơn giao hàng trực tiếp khi có tồn kho",
    fileId: "1qDimabt8D3VCwKuW2cr1Uomi8SGmaTMe",
    type: "pptx",
    category: "Hướng dẫn",
  },
];


export const tabs = [
  // ─────────────────────────────────────────────
  // 1. LOGIN
  // ─────────────────────────────────────────────
  {
    id: "login",
    label: "Login",
    icon: "🔐",
    pdf: "", // Google Drive File ID
    video: "", // Google Drive File ID
  },

  // ─────────────────────────────────────────────
  // 2. ITEM MASTER
  // ─────────────────────────────────────────────
  {
    id: "item-master",
    label: "Item Master",
    icon: "📦",
    pdf: "1lgq3FWU-cWKvLEFK8fz2-U3-KjiFYZ0p",
    video: "1AJdOQ-mk3ZMsawrUX2XYhwzzX2gu41Ba",
  },

  // ─────────────────────────────────────────────
  // 3. BOM
  // ─────────────────────────────────────────────
  {
    id: "bom",
    label: "BOM",
    icon: "🧩",
    pdf: "10L6h803r8qumQyWxTBvs04rpyyV18bjG",
    video: "14LPkv5qIJ6vocKyF6MlRlkBjLpGeb4en",
  },

  // ─────────────────────────────────────────────
  // 4. SALES ORDER
  // ─────────────────────────────────────────────
  {
    id: "sales-order",
    label: "Sales Order",
    icon: "🛒",
    pdf: "1JbTkkjZZghw6YoG-MixfUjfKUgEdUl4Q",
    video: "1_F92MNPdxTU4wNTnhhukjarZveUtIYSe",
  },

  // ─────────────────────────────────────────────
  // 5. PRODUCTION ORDER (có sub-tabs)
  // ─────────────────────────────────────────────
  {
    id: "production-order",
    label: "Production Order",
    icon: "🏭",
    children: [
      {
        id: "production-order-main",
        label: "Production Order",
        description: "Lập lệnh sản xuất",
        pdf: "1wHiMD5B8SVQ3XGtNcyeFv-EILslOWRG4",
        video: "1jy5SJrtVE_B6fMFiGLw3GHViCs-VnXWt",
      },
      {
        id: "recipe",
        label: "Recipe",
        description: "Tạo quy trình sản xuất",
        pdf: "",
        video: "",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 6. PURCHASE (có sub-tabs)
  // ─────────────────────────────────────────────
  {
    id: "purchase",
    label: "Purchase",
    icon: "💳",
    children: [
      {
        id: "purchase-requisitions",
        label: "Purchase Requisitions",
        description: "Yêu cầu mua hàng",
        pdf: "13ZUVisFAE_YKIesT6rtEmD54LC8kFpmz",
        video: "1AgitrewAIdfwEeOTEsTko362ulKZ3nYH",
      },
      {
        id: "purchase-orders",
        label: "Purchase Orders",
        description: "Đơn đặt hàng",
        pdf: "1f4w9KoRU7Ek7fUeRqhsqSSFqp0zxmQbr",
        video: "1Yd4MQV6joCwlGDNRjXSl8hdT103lX-tL",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 7. DELIVERY (có sub-tabs)
  // ─────────────────────────────────────────────
  {
    id: "delivery",
    label: "Delivery",
    icon: "🚚",
    children: [
      {
        id: "outbound-delivery",
        label: "Outbound Delivery",
        description: "Giao hàng đi",
        pdf: "16TKjdI4amqAJib1PNhcpecwFkgz5jj3Y",
        video: "1BKelm1HQiWkKHqFL1cDOtIgTFwXk1Hwo",
      },
      {
        id: "inbound-delivery",
        label: "Inbound Delivery",
        description: "Nhận hàng về",
        pdf: "16TKjdI4amqAJib1PNhcpecwFkgz5jj3Y",
        video: "1-4q2Ztf9N-uj3WTbQGSo3EdJcRwkBYZM",
      },
      {
        id: "good-issues",
        label: "Good Issues",
        description: "Xuất kho",
        pdf: "16TKjdI4amqAJib1PNhcpecwFkgz5jj3Y",
        video: "1SaTiE5-_Yn1wPX7TaWlrJ7-H6OXSJwOS",
      },
      {
        id: "good-receipts",
        label: "Good Receipts",
        description: "Nhập kho",
        pdf: "16TKjdI4amqAJib1PNhcpecwFkgz5jj3Y",
        video: "1RDjaeefj9g4s1rAAzYmzctA11HxwOgHz",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 8. INVOICE
  // ─────────────────────────────────────────────
  {
    id: "invoice",
    label: "Invoice",
    icon: "🧾",
    pdf: "16TKjdI4amqAJib1PNhcpecwFkgz5jj3Y",
    video: "1Nn86HMpur8nnuHkSr8h4xC1R-fxe8KNV",
  },
];
