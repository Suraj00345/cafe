import React from "react";

const Map = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        height: "0",
        paddingBottom: "30%",
        position: "relative",
      }}
    >
      <iframe
        style={{
          border: "0",
          height: "100%",
          width: "100%",
          position: "absolute",
          left: "0",
          top: "10",
        }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23747.132923143265!2d-74.0197685997235!3d41.92743558804541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd0f012dc98127%3A0x41d7895a5832c913!2sKingston%2C%20NY%2012401%2C%20USA!5e0!3m2!1sen!2sin!4v1751994906821!5m2!1sen!2sin"
        width="600"
        height="450"
        allowfullscreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
