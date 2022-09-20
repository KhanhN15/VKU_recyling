import OutLineBg from "../OutLineBg";

const Login = () => {
    return (
        <>
            <OutLineBg>
                <div>
                    <div className="container">
                        <div className="forms-container">
                            <div className="signin-signup">
                                <form action="index.html" className="sign-in-form">
                                    <h2 className="title">Đăng nhập</h2>
                                    <div className="input-field">
                                        <i className="fa-solid fa-user" />
                                        <input type="text" placeholder="Tên đăng nhập" />
                                    </div>
                                    <div className="input-field">
                                        <i className="fa-solid fa-lock" />
                                        <input type="password" placeholder="Mật khẩu" />
                                    </div>
                                    <input type="submit" defaultValue="Đăng nhập" className="btn solid" href="doidiem.html" />
                                    <p className="social-text">Hoặc đăng nhập bằng hình thức khác</p>
                                    <div className="social-media">
                                        <a href="#" className="social-icon"><i className="fa-brands fa-facebook" /></a>
                                        <a href="#" className="social-icon"><i className="fa-brands fa-twitter" /></a>
                                        <a href="#" className="social-icon"><i className="fa-brands fa-google" /></a>
                                        <a href="#" className="social-icon"><i className="fa-brands fa-instagram-square" /></a>
                                    </div>
                                </form>
                                <form action="#" className="sign-up-form">
                                    <h2 className="title">Đăng ký</h2>
                                    <div className="input-field">
                                        <i className="fas fa-user" />
                                        <input type="text" placeholder="Tên đăng nhập" />
                                    </div>
                                    <div className="input-field">
                                        <i className="fas fa-envelope" />
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div className="input-field">
                                        <i className="fas fa-lock" />
                                        <input type="password" placeholder="Mật khẩu" />
                                    </div>
                                    <input type="submit" className="btn" defaultValue="Đăng ký" />
                                    <p className="social-text">Hoặc đăng nhập bằng hình thức khác</p>
                                    <div className="social-media">
                                        <a href="#" className="social-icon">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#" className="social-icon">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#" className="social-icon">
                                            <i className="fab fa-google" />
                                        </a>
                                        <a href="#" className="social-icon">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>Recyclable Waste</h3>
                                <p>
                                    Hãy trở thành một phần cho cộng đồng, hãy chung tay góp phần bảo vệ môi trường.
                                </p>
                                <button className="btn transparent" id="sign-up-btn">
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </OutLineBg>
        </>
    );
}
export default Login;