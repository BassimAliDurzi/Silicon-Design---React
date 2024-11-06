import React from "react";

const ClientInfo = (client) => {
  return (
    <div className="client-info">
      <img src={client.genderImg} alt={client.genderAlt} />
      <div className="name-job">
        <h3>{client.name}</h3>
        <p>{client.job}</p>
      </div>
    </div>
  );
};

export default ClientInfo;
