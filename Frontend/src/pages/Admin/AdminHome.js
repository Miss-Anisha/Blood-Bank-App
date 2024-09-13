import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            Saving lives has never been easier. Whether you’re a donor or in
            need of blood, our platform connects you to a community dedicated to
            making a difference. Why Choose Us? Fast and Reliable: Access a vast
            network of donors and blood banks in your area. Seamless Experience:
            Easy-to-use interface for both donors and recipients. Track
            Donations: Keep a history of your donations and see the impact
            you're making. Join Us Today! Be a hero in someone's life. Register
            now to donate blood or request a donation when you need it most.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
