# Hướng dẫn Setup Google Sheets — Nhận Phản Hồi ERP

Làm theo các bước dưới đây để kết nối form phản hồi với Google Sheets.
**Ước tính thời gian: ~5–8 phút.**

---

## Bước 1: Tạo Google Spreadsheet

1. Mở https://sheets.google.com → Tạo bảng tính mới
2. Đặt tên ví dụ: `ERP Feedback Responses`
3. Giữ nguyên sheet đầu tiên (Sheet1)

---

## Bước 2: Mở Apps Script

1. Trong bảng tính vừa tạo, bấm menu **Extensions → Apps Script**
2. Xóa toàn bộ code mặc định trong file `Code.gs`
3. **Copy-paste toàn bộ code bên dưới vào:**

```javascript
// =====================================================
// ERP FEEDBACK — Google Apps Script
// Nhận phản hồi từ website và lưu vào Google Sheets
// =====================================================

const SHEET_NAME = 'Sheet1';
const DRIVE_FOLDER_NAME = 'ERP Feedback Images';

function doPost(e) {
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);

  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);

    // Tạo header nếu sheet trống
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Thời gian',
        'Bộ phận',
        'Module liên quan',
        'Nội dung phản hồi',
        'Số ảnh đính kèm',
        'Link ảnh',
      ]);
      const headerRange = sheet.getRange(1, 1, 1, 6);
      headerRange.setBackground('#1a1a2e');
      headerRange.setFontColor('#ffffff');
      headerRange.setFontWeight('bold');
    }

    // Xử lý hình ảnh
    let imageLinks = '';
    let imageCount = 0;

    if (data.images && data.images.length > 0) {
      const folder = getOrCreateFolder(DRIVE_FOLDER_NAME);
      const links = [];

      data.images.forEach(function(img, idx) {
        try {
          const base64Data = img.data.split(',')[1];
          const mimeType = img.data.split(';')[0].split(':')[1];
          const blob = Utilities.newBlob(
            Utilities.base64Decode(base64Data),
            mimeType,
            img.name || ('image_' + (idx + 1) + '.jpg')
          );
          const file = folder.createFile(blob);
          file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
          links.push(file.getUrl());
        } catch (imgErr) {
          Logger.log('Loi xu ly anh: ' + imgErr);
        }
      });

      imageCount = links.length;
      imageLinks = links.join('\n');
    }

    // Ghi dữ liệu vào sheet
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('vi-VN'),
      data.department || '',
      data.modules || '',
      data.content || '',
      imageCount,
      imageLinks,
    ]);

    sheet.autoResizeColumns(1, 6);

    output.setContent(JSON.stringify({ status: 'ok', message: 'Phan hoi da duoc luu.' }));
  } catch (err) {
    Logger.log('Loi: ' + err);
    output.setContent(JSON.stringify({ status: 'error', message: err.toString() }));
  }

  return output;
}

function getOrCreateFolder(folderName) {
  const folders = DriveApp.getFoldersByName(folderName);
  if (folders.hasNext()) return folders.next();
  return DriveApp.createFolder(folderName);
}

function testSetup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  Logger.log('Sheet tim thay: ' + sheet.getName());
  Logger.log('Setup OK!');
}
```

---

## Bước 3: Deploy Web App

1. Bấm **Deploy → New deployment**
2. Bấm biểu tượng ⚙️ → chọn **Web app**
3. Cấu hình:
   - **Description**: `ERP Feedback v1`
   - **Execute as**: `Me (your email)`
   - **Who has access**: **Anyone**  ← bắt buộc để website gọi được
4. Bấm **Deploy**
5. Nếu được hỏi **Review permissions** → bấm **Allow**
6. **Copy URL** dạng: `https://script.google.com/macros/s/AKfycb.../exec`

---

## Bước 4: Paste URL vào config.js

Mở file `src/config.js` và dán URL vào:

```javascript
feedbackWebhookUrl: "https://script.google.com/macros/s/AKfycb.../exec",
```

---

## Bước 5: Test

1. Chạy `npm run dev`
2. Mở website → bấm **Phản hồi** trong sidebar
3. Điền form và bấm **Gửi phản hồi**
4. Kiểm tra Google Sheet — dữ liệu xuất hiện trong vài giây

---

## Cấu trúc dữ liệu trong Google Sheet

| Thời gian | Bộ phận | Module liên quan | Nội dung phản hồi | Số ảnh | Link ảnh |
|-----------|---------|-----------------|-------------------|--------|----------|
| 29/07/2026, 14:30 | Kế toán | Invoice, Purchase | Mô tả vấn đề... | 2 | https://... |

---

## Lưu ý

- **Re-deploy sau khi sửa code**: Deploy → Manage deployments → Edit → version mới → Deploy
- **Hình ảnh**: Lưu vào Google Drive folder `ERP Feedback Images` của tài khoản chạy script
- **Giới hạn**: Apps Script miễn phí cho ~20,000 lần chạy/ngày — đủ cho internal tool
