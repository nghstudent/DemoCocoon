import './Header.css'

function Header() {
    return (
      <header className="header d-flex justify-content-between align-items-center px-4 py-2 bg-light">
        <div className="header-left d-flex align-items-center gap-3">
          <input type="text" className="form-control btn-search" placeholder="Tìm kiếm..." style={{width: "200px"}} />
          <nav className="d-flex gap-3">
            <a href="#" className="text-dark fw-bold ">Sản phẩm</a>
            <a href="#" className="text-dark fw-bold">Cocoon</a>
            <a href="#" className="text-dark fw-bold">Bài viết</a>
          </nav>
        </div>
        <div className="header-mid d-flex align-items-center gap-3">
            <a href="#" className='logo-link'>
                <img src="/images/logoCocoon.svg" alt="" />
            </a>
        </div>
        <div className="header-right d-flex align-items-center gap-3">
          <a href="#" className="text-dark fw-bold">Đăng nhập</a>
          <a href="#" className="text-dark fw-bold">Liên hệ</a>
          <a href="#" className="text-dark fw-bold">Giỏ hàng (1)</a>
        </div>
      </header>
    );
  }
  export default Header;


// import './Header.css'
// import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


// function Header() {
//     return (
//       <header className="header d-flex justify-content-between align-items-center px-4 py-2 bg-light">
//         <div className="header-left d-flex align-items-center gap-3">
//           <input type="text" className="form-control btn-search" placeholder="Tìm kiếm..." style={{width: "200px"}} />
//           <nav className="d-flex gap-3">
//             <a href="#" className="text-dark fw-bold ">Sản phẩm</a>
//             <a href="#" className="text-dark fw-bold">Cocoon</a>
//             {/* <a href="#" className="text-dark fw-bold">Bài viết</a> */}
//             <Link to="/vite-project/src/pages/Home/Home2.jsx" className="text-dark fw-bold">Bài viết</Link>
//           </nav>
//         </div>
//         <div className="header-mid d-flex align-items-center gap-3">
//             <a href="#" className='logo-link'>
//                 <img src="/images/logoCocoon.svg" alt="" />
//             </a>
//         </div>
//         <div className="header-right d-flex align-items-center gap-3">
//           <a href="#" className="text-dark fw-bold">Đăng nhập</a>
//           <a href="#" className="text-dark fw-bold">Liên hệ</a>
//           <a href="#" className="text-dark fw-bold">Giỏ hàng (1)</a>
//         </div>
//       </header>
//     );
//   }
//   export default Header;

