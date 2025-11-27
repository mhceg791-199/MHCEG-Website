import "./map.css";
function Map() {
  return (
    <>
      <div className="my-10">
        <iframe
          className="border-map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.1861000521058!2d31.3262133!3d30.088856099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f00385c6f7d%3A0xc14c2ea2f238ae91!2sMHCEG%20Consultancy!5e0!3m2!1sen!2seg!4v1764238389009!5m2!1sen!2seg"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Map;
