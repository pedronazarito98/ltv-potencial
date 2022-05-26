import {
  ContainerDeposition,
  ContainerEmpresas,
  ContainerLogos,
  WrapperLogo,
} from "./StyledDepositions";

import {
  dataDepositions,
  dataImage,
} from "../../Mocks/DataDepositions/dataDepositions";
import { CardDepositions } from "../../components/Cards/CardDepositions/CardDepositions";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./stylesSwiper.css";

export function Depositions() {
  return (
    <ContainerDeposition>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{
          margin: "0px",
          width: " 500px",
          borderRadius: "8px",
          background: `var(--text-color)`,
        }}
      >
        {dataDepositions.map(
          ({ name, company, depoiment, imgDepositions, office }) => (
            <SwiperSlide>
              <CardDepositions
                key={name}
                depoiment={depoiment}
                name={name}
                company={company}
                imgDepositions={imgDepositions}
                office={office}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>

      <ContainerEmpresas>
        <span>
          <strong>Empresas líderes no mercado</strong> que confiam na Cinnecta
        </span>

        <ContainerLogos>
          {dataImage.map(({ image }) => (
            <WrapperLogo>
              <img src={image} alt="imgLogo" loading="lazy" />
            </WrapperLogo>
          ))}
        </ContainerLogos>
      </ContainerEmpresas>
    </ContainerDeposition>
  );
}
