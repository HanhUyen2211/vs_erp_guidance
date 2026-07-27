/**
 * =====================================================================
 * ERP GUIDANCE WEBSITE — CONTENT CONFIGURATION FILE
 * =====================================================================
 * Hướng dẫn cập nhật:
 *
 * 1. Để thêm PDF từ Google Drive:
 *    - Mở file trên Google Drive → Share → "Anyone with the link"
 *    - Lấy FILE_ID từ URL: https://drive.google.com/file/d/FILE_ID/view
 *    - Paste vào trường: pdf: "FILE_ID"
 *
 * 2. Để thêm Video từ Google Drive:
 *    - Tương tự lấy FILE_ID
 *    - Paste vào trường: video: "FILE_ID"
 *
 * 3. Để thêm module mới: copy một object trong mảng tabs và chỉnh sửa.
 * =====================================================================
 */

export const siteConfig = {
  companyName: "ERP Guidance",
  subtitle: "Hệ thống Hướng dẫn Sử dụng ERP",
  logoText: "ERP",
  // Tài liệu tổng quan & clip full tất cả functions (hiển thị ở trang Home)
  homePdf: "12-mXo9QiLRJ9IY-ei-1mdrabXXg2y4Uk",   // Google Drive File ID — Tài liệu tổng hợp toàn bộ ERP
  homeVideo: "1r5jI7Nv9wIrNkMy9tku2ZAqw0TlNzgL-", // Google Drive File ID — Clip hướng dẫn đầy đủ tất cả functions
};

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
        pdf: "",
        video: "",
      },
      {
        id: "inbound-delivery",
        label: "Inbound Delivery",
        description: "Nhận hàng về",
        pdf: "",
        video: "",
      },
      {
        id: "good-issues",
        label: "Good Issues",
        description: "Xuất kho",
        pdf: "",
        video: "",
      },
      {
        id: "good-receipts",
        label: "Good Receipts",
        description: "Nhập kho",
        pdf: "",
        video: "",
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
    pdf: "",
    video: "",
  },
];
