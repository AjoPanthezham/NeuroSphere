import ServicesData from '../../../data/Home1/Services.json';

const Services = () => {
  return (
    <div className="cls-services section-padding position-re">
      <div className="container">
        <div className="row">
          {
            ServicesData.map((service, index) => {
              return (
                <div className="col-lg-4 services-div" key={index}>
                  <div className="item">
                    <div className="letr-bg">{ service["letr-bg"] }</div>
                    <span className="numb">{ service.numb }</span>
                    <h6>{ service.title }</h6>
                    <p>{ service.description }</p>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Services