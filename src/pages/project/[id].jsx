import { useEffect, useState} from "react";
import MainLayout from "../../layouts/main";

import Slider from "react-slick";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { useRouter } from "next/router";

import CallAction from "../../components/About/CallAction";

import WorksData from '../../data/Home3/Works.json';
import dynamic from 'next/dynamic';
const Split = dynamic(() => import("../../components/Split"), { ssr: false });

const Index = () => {

  const testimonialsSliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const router = useRouter();
  const [work, setWork] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setWork(WorksData.works?.find((item) => item.id == id));


    return () => {};
  }, [id]);

  useEffect(() => {
    let body = document.querySelector("body");
    body.classList.add("bg-gr");
    body.classList.remove("d3-dark");

    let elem = document.querySelector('.background.bg-img[data-background]');
    if (elem) elem.style.backgroundImage = `url(${elem.getAttribute('data-background')})`;
  }, []);

  return (
    <MainLayout footerClass="bg-gray">
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-9">
              <div className="cont">
                <h4>
                  {work?.description}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="img-wrapper bg-img parallaxie" data-overlay-dark="3">
          <div className="title">
            <div className="container project-title-container">
              <a rel="noreferrer" href={work?.link} target="_blank" className="btn-curve btn-lit"><span>Visit Project</span></a>
              <h3>{work?.title}</h3>
              <img src={work?.wideImg} alt="image" />
              
            </div>
          </div>
        </div>
      </section>
      <section className="intro-section section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="htit sm-mb30">
                <h4>The Objective</h4>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-1 col-md-8">
              <div className="text">
                <Split className="wow txt">
                  <p data-splitting>
                    { work?.objective }
                  </p>
                </Split>
              </div>
            </div>
          </div>
          <div className="row execution-row">
            <div className="col-lg-3 col-md-4">
              <div className="htit sm-mb30">
                <h4>The Execution</h4>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-1 col-md-8">
              <div className="text">
                <Split className="wow txt">
                  <p data-splitting>
                    { work?.objective }
                  </p>
                </Split>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="services section-padding">
        <div className="container">
          <div className="row">
            {
              work?.services?.map((service, index) => (
                <div className="col-lg-4 service-box" key={service.id}>
                  <div className={`item wow fadeInUp ${index !== work.services.length - 1 && 'md-mb50'}`} data-wow-delay={`${0.3 * index + 0.3}s`}>
                    <span className={`icon ${service.iconClass}`}></span>
                    <h6>{ service.title }</h6>
                    <p>{ service.description }</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <section className="block-sec">
        <div className="background bg-img section-padding pb-0" data-background="/assets/img/1.jpg" data-overlay-dark="6">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="vid-area">
                  <div className="vid-icon">
                  </div>

                  <div className="cont">
                    <Split className="wow">
                      <h3 data-splitting>{ work?.testimonialShortText }</h3>
                    </Split>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="testim-box">
                  <div className="head-box">
                    <h6 className="wow fadeIn" data-wow-delay=".5s">Our Happy Clients</h6>
                    <h4 className="wow fadeInLeft" data-wow-delay=".5s">What Client Say?</h4>
                    <Slider {...testimonialsSliderSettings} className="slic-item wow fadeInUp slick-dotted" data-wow-delay=".5s">
                    {
                      work?.testimonials?.map((testimonial) => (
                        <div className="item" key={testimonial.id}>
                          <p>{ testimonial.content }</p>
                          <div className="info">
                            <div className="img">
                              <div className="img-box">
                                <img src={testimonial.img} alt="" />
                              </div>
                            </div>
                            <div className="cont">
                              <div className="author">
                                <h6 className="author-name custom-font">{ testimonial.name }</h6>
                                <span className="author-details">{ testimonial.details }</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-circle bg-gray pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div>
                <div className="row">
                  {
                    work?.skills?.slice(0,3).map((skill, index) => (
                      <div className="col-md-4" key={skill.id}>
                        <div className="item wow fadeInLeft" data-wow-delay={`${index === 1 ? '0.6' : '0.3'}`}>
                          <div className="skill" data-value={skill.value / 100}>
                            <span className="custom-font">
                              <CircularProgressbar
                                strokeWidth={2}
                                value={skill.value}
                                text={`${skill.value}%`}
                                styles={buildStyles({ pathColor: `#75DAB4`, trailColor: '#031117', textColor: '#fff' })}
                              />
                            </span>
                          </div>
                          <div className="cont">
                            <span>{ skill.title }</span>
                            <h6>{ skill.subtitle }</h6>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Clients /> */}
      <CallAction />
    </MainLayout>
  )
}

export default Index