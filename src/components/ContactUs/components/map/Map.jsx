import "./map.css";
function Map() {
  return (
    <>
      <div className="my-10">
        <iframe
          className="border-map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3453.6939464899697!2d31.345153775553733!3d30.045637074922947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAyJzQ0LjMiTiAzMcKwMjAnNTEuOCJF!5e0!3m2!1sen!2seg!4v1787230557213!5m2!1sen!2seg"
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
