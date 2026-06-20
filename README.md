# dùng extensions "live server" để chạy 
# chuột phải file index 


## Cấu trúc file

```txt
testFrontend/
├── index.html
├── books.html
├── detail.html
├── checkout.html
├── css/
│   ├── base/
│   │   ├── variables.css      # biến màu, font, shadow
│   │   ├── reset.css          # reset mặc định trình duyệt
│   │   ├── layout.css         # container, section, layout dùng chung
│   │   ├── typography.css     # h1, h2, price, rating
│   │   └── buttons.css        # button dùng chung
│   ├── components/
│   │   ├── header.css         # header, nav, search, bag
│   │   ├── footer.css         # footer, newsletter
│   │   ├── book-card.css      # card sách dùng nhiều trang
│   │   └── modal.css          # login modal + toast
│   ├── pages/
│   │   ├── home.css           # chỉ cho index.html
│   │   ├── books.css          # chỉ cho books.html
│   │   ├── detail.css         # chỉ cho detail.html
│   │   └── checkout.css       # chỉ cho checkout.html
│   └── responsive.css         # responsive tablet/mobile
├── js/
│   ├── data/
│   │   └── books.js           # dữ liệu sách, genre, màu cover
│   ├── utils/
│   │   └── dom.js             # hàm $, $$, money
│   ├── components/
│   │   ├── header.js          # render header + search + mobile menu
│   │   ├── footer.js          # render footer + newsletter
│   │   ├── login-modal.js     # mở/đóng modal đăng nhập
│   │   ├── book-card.js       # render book card
│   │   ├── bag.js             # localStorage cart/bag
│   │   └── toast.js           # thông báo nhỏ góc dưới
│   ├── pages/
│   │   ├── home.js            # slider, genre, home product sections
│   │   ├── books.js           # filter, sort, search list page
│   │   ├── detail.js          # render chi tiết sách
│   │   └── checkout.js        # render bag, quantity, checkout button
│   └── main.js                # khởi tạo các component dùng chung
```