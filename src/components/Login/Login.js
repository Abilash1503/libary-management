import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginContext from '../Context/LoginContext';
import UserContext from '../Context/UserContext';

function Login() {
    const userdata = useContext(UserContext)
    const logindata = useContext(LoginContext);

    const navigate = useNavigate();
    return (
        <section className="vh-100 mt-5 pt-3" >

            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://img.freepik.com/premium-vector/books-seamless-pattern-library-bookstore-open-book-notebook-with-bookmark-stack-books-wallpapers-wrapping-textile-fabric-decor-prints-cards-reading-themed-vector-illustration_501069-937.jpg?w=740"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>

                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-3">
                                <input type="text" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a username" onChange={(event) => userdata.setUsername(event.target.value)} />
                                <label className="form-label" For="form3Example3">Username</label>
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                                <label className="form-label" For="form3Example4">Password</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/* <!-- Checkbox --> */}
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" For="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div className="d-flex ms-3" >
                                <button onClick={() => {
                                    logindata.setLibrarianVisible(true);
                                    navigate("/portal/dashboard")
                                }} type="button" className="btn   mt-2"
                                    style={{ paddingRight: "2.5rem" }}>
                                    <div className="card" style={{ width: "8rem", height: "8rem" }}>
                                        <img className="card-img-top pb-5" src="https://media.istockphoto.com/id/1323505778/vector/librarian-at-library-scene-young-woman-working-at-desk-on-computer-monitor-vector.jpg?s=612x612&w=0&k=20&c=yXhvxp2PrLxmCHd7pSjVIWf417XwKsEr6UKHt-bCtck=" alt="librarian image" />
                                    </div><p>Login as a Librarian</p>
                                </button>
                                <button onClick={() => {
                                    logindata.setLibrarianVisible(false);
                                    navigate("/portal/book")
                                }} type="button" className="btn   mt-2"
                                    style={{ paddingRight: "2.5rem" }}>
                                    <div className="card" style={{ width: "8rem", height: "8rem" }}>
                                        <img className="card-img-top pb-5" src="https://cdn.dribbble.com/users/3124376/screenshots/15003116/media/90f4763902da89ba1834672a38b6a8bf.jpg?resize=768x576&vertical=center" alt="reader image" />
                                    </div><p>Login as a Reader</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >

        </section >
    )
}

export default Login
