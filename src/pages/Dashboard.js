import { Link } from "react-router-dom";
import { useEffect } from "react";

function Dashboard(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="container-xl pt-5 dashboard_data_before_md_srcn">
                <div className="row px-3">
                    <div className="col-md-3 col-lg-2 dashboard_left_side" style={{ borderRight: "1px solid black" }}>
                        <Link to="/dashboard" className="p-2" style={{ textDecoration: "none", color: "black" }}><h5 className="py-2"><i className="fa fa-user"></i> My Profile</h5></Link>
                        <Link to="/my_order" className="p-2" style={{ textDecoration: "none", color: "black" }}><h5 className="py-2"><i className="fa fa-shopping-cart"></i> My Orders</h5></Link>
                        <Link to="/my_address" className="p-2" style={{ textDecoration: "none", color: "black" }}><h5 className="py-2"><i className="fa fa-map-marker"></i> My Address</h5></Link>
                        <Link to="/" className="p-2" style={{ textDecoration: "none", color: "black" }}><h5 className="py-2"><i class="fa fa-question-circle"></i> Help</h5></Link>
                        <h6>You can <span className="text-success">Contact Us</span> and we'll reach out to as soon as we can</h6>
                    </div>
                    <div className="col-md-9 col-lg-10 px-5">
                        {props.x}
                    </div>
                </div>
            </div>

            <div className="container-xl pt-5 dashboard_data_after_md_srcn">
                {props.x}
            </div>
            <br /><br /><br /><br /><br />
        </>
    );
}

export default Dashboard;
