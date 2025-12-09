# LAMS Website

Website **London Academy of Management and Sciences (LAMS)** được **rebuild & redesign** bằng **Next.js 13+** theo hướng hiện đại, tối ưu trải nghiệm người dùng và triển khai dưới dạng **static website**.

##  Mục tiêu dự án

- Thiết kế lại giao diện website LAMS
- Áp dụng React & Next.js theo chuẩn App Router
- Tối ưu cho deploy static trên Netlify
- Sử dụng mock data thay cho backend

## 🛠 Công nghệ sử dụng

- **Next.js 13+**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Lucide Icons**
- **Netlify (Static Hosting)**

##  Chức năng chính

- Trang Home giới thiệu tổng quan LAMS
- Hiển thị Programs, About, News
- Blog / News sử dụng dữ liệu JSON (mock data)
- Giao diện responsive (desktop / tablet / mobile)
- Kiến trúc component rõ ràng, dễ mở rộng

##  Cấu trúc thư mục chính

src/
├─ app/ # App Router (Next.js 14)
├─ components/ # UI Components
├─ data/ # Mock data (JSON, TS)
├─ styles/ # Global styles
public/
├─ images/ # Hình ảnh tĩnh
├─ blog_image/ # Hình ảnh của các blog dùng news

##  Link Hosting: https://lams-nguyenvanbao.netlify.app/

CÀI ĐẶT MÔI TRƯỜNG, BUILD VÀ DEPLOY
1.  Cài đặt Node.js & npm
    - Tải và cài đặt Node.js LTS tại: https://nodejs.org/en
    - Kiểm tra cài đặt: node -v, npm -v
2.  Cài đặt dự án
    - Bước 1: Tại thư mục cần lưu dự án, mở terminal
    - Bước 2: git clone https://github.com/nguyenvanbao1310/Lams.git
    - Bước 3: cd lams-website
    - Bước 4: npm install
3.  Chạy dự án
    - Bước 1: cd lams-website
    - Bước 2: npm run dev
    - Bước 3: Truy cập: http://localhost:3000/
4. Deploy trên Netlify
    - Bước 1: Tạo thư mục hosting và git clone https://github.com/nguyenvanbao1310/Lams_Hosting
    - Bước 2: Thực hiện bước 3 và bước 4 của mục 2.
    - Bước 3: npm run build 
    - khi chạy sẽ tạo ra thư mục /out dùng để deploy lên hosting.
5. Deploy trên Netlify
    - Truy cập vào: https://app.netlify.com
    - upload thư mục /build lên và deploy