import { useNavigate , Link} from 'react-router-dom';
import './Header.css'


function Header() {

  const navigate = useNavigate()
    return (
      <header className="header d-flex justify-content-between align-items-center px-4 py-2 bg-light">
        <div className="header-left d-flex align-items-center gap-3">
          <input type="text" className="form-control btn-search" placeholder="Tìm kiếm..." style={{width: "200px"}} />
          <nav className="d-flex gap-3">
           <Link to={'/product'}>
            <a href="#" className="text-dark fw-bold ">Sản phẩm</a></Link>
            <a href="#" className="text-dark fw-bold">Cocoon</a>
           <Link to={'/home2'}>
           <a href="#" className="text-dark fw-bold">Bài viết</a>
           </Link>
          </nav>
        </div>
        <div className="header-mid d-flex align-items-center gap-3">
          <Link to={'/'}>
          <a href="#" className='logo-link'>
                <img src="/images/logoCocoon.svg" alt="" />
            </a>
            </Link>
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


