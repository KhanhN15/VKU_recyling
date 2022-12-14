import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  return (
    <nav className="navbar box-menu navbar-expand-md navbar-light bg-light sticky-top">
      <div className="container">
        <div className="container-fluid box-head">
          <a className="navbar-branch logo" href="index.html">
            {/* <img src="img/banner/Logo2.png" height="50"> */}
          </a>
          <div
            className="desk-menu collapse navbar-collapse justify-content-md-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  TRANG CHỦ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gioi-thieu">
                  GIỚI THIỆU
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lien-he">
                  LIÊN HỆ
                </Link>
              </li>
              <li className="nav-item lisanpham">
                <Link className="nav-link" to="/">
                  TÍCH ĐIỂM-ĐỔI THƯỞNG
                  <i className="fa fa-chevron-down" aria-hidden="true" />
                </Link>
                <ul className="sub_menu">
                  <li className>
                    <Link to="/doi-diem" title="Đổi Điểm Recyclable waste">
                      ĐỔI ĐIỂM RECYCLABLE WASTE
                    </Link>
                  </li>
                  <li className>
                    <Link to="/cach-thuc-doi-diem" title="CÁCH THỨC ĐỔI ĐIỂM">
                      CÁCH THỨC ĐỔI ĐIỂM
                    </Link>
                  </li>
                  <li className>
                    <Link to="/dia-diem-doi-diem" title=" ĐỊA ĐIỂM ĐỔI ĐIỂM">
                      ĐỊA ĐIỂM ĐỔI ĐIỂM
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item lisanpham">
                <Link className="nav-link" to="/san-pham">
                  SẢN PHẨM
                </Link>
              </li>
            </ul>
          </div>
          <div className="box-login-out">
            <Link to="/" className="icon-search">
              <i className="fas fa-search" style={{ color: "#007a33" }} />
            </Link>
            <Link style={{ color: "#007a33" }} to="/dang-nhap" className="login-out">
              <i className="fas fa-user-alt" />
            </Link>

            <div className="box-menu-mobile">
              <button
                className="navbar-toggler customm-nav"
                type="button"
                data-toggle="collapse"
                data-target="#boxSearch"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                id="boxSearch"
                uk-offcanvas="flip: true; overlay: true"
                className="uk-offcanvas uk-offcanvas-overlay box-items-mobile collapse"
              >
                <div
                  className="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide"
                  style={{ background: "white", width: 350 }}
                >
                  <button
                    className="uk-offcanvas-close uk-icon uk-close"
                    style={{ color: "#272727" }}
                    type="button"
                    data-toggle="collapse"
                    data-target="#boxSearch"
                    aria-controls="collapseExample"
                  >
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                      data-svg="close-icon"
                    >
                      <line
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.1"
                        x1={1}
                        y1={1}
                        x2={13}
                        y2={13}
                      />
                      <line
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.1"
                        x1={13}
                        y1={1}
                        x2={1}
                        y2={13}
                      />
                    </svg>
                  </button>
                  <div className="justify-content-md-center">
                    <ul className="navbar-nav lst-items-mobile">
                      <li className="nav-item">
                        <a className="nav-link" href="index.html">
                          TRANG CHỦ
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="Product.html">
                          BỘ SƯU TẬP
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Sản phẩm
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                          style={{ border: 0 }}
                        >
                          <a
                            className="dropdown-item"
                            href="detailproduct.html"
                            title="Sản phẩm - Style 1"
                          >
                            Sản phẩm - Style 1
                          </a>
                          <a
                            className="dropdown-item"
                            href="detailproduct.html"
                            title="Sản phẩm - Style 2"
                          >
                            Sản phẩm - Style 2
                          </a>
                          <a
                            className="dropdown-item"
                            href="detailproduct.html"
                            title="Sản phẩm - Style 3"
                          >
                            Sản phẩm - Style 3
                          </a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="introduce.html">
                          GIỚI THIỆU
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="blog.html">
                          BLOG
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="Contact.html">
                          LIÊN HỆ
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
