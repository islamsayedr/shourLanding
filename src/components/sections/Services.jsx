import serviceData from "../serviceData.js";

export default function Services() {
  return (
    <section className="services">
      <div className="head">
        <span>المزيد</span>
        <h2>تعرف على خدماتنا الاخرى</h2>
      </div>
      <div className="serviceContainer">
        {serviceData.map((service) => (
          <Service
            key={service.id}
            iconURL={service.iconURL}
            title={service.title}
            des={service.des}
          />
        ))}
      </div>
    </section>
  );
}
function Service({ iconURL, title, des }) {
  return (
    <div className="service">
      <img src={iconURL} />
      <div>
        <h3>{title}</h3>
        <p>{des}</p>
      </div>
    </div>
  );
}
