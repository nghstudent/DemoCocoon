import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./ProductIntro.css";

function ProductIntro() {
  return (
    <>
      <section
        className="product-intro carousel slide"
        id="productCarousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="d-flex w-100 h-100">
              <div className="product-image">
                <img
                  src="/images/Main_banner_1.png"
                  alt="Sữa rửa mặt Sen Hậu Giang"
                />
              </div>
              <div className="product-info p-5 text-left">
                <h4 className="fw-bold mb-3 p-0">SẢN PHẨM MỚI</h4>
                <h1 className="fw-bold p-0 m-0">Sữa rửa mặt </h1>
                <h1 className="fw-bold mb-5">Sen Hậu Giang</h1>
                <p>
                  Với công trình nghiên cứu kỹ lưỡng, kết hợp sự hiểu biết về
                  cấu trúc sinh học của da và sự kiểm nghiệm khắt khe qua bài
                  test HRIPT trên 61 làn da nhạy cảm, Cocoon tự hào giới thiệu
                  đột phá mới.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="d-flex w-100 h-100">
              <div className="product-image">
                <video autoPlay loop muted playsInline>
                  <source src="/images/video_banner_2.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="product-info bg-2 p-5">
                <h4 className="fw-bold mb-4 p-0">SẢN PHẨM NỔI BẬT</h4>
                <h1 className="fw-bold p-0 mb-5">Dầu Tẩy Trang Hoa Hồng </h1>
                <p>
                  Với công trình nghiên cứu kỹ lưỡng, kết hợp sự hiểu biết về
                  cấu trúc sinh học của da và sự kiểm nghiệm khắt khe qua bài
                  test HRIPT trên 61 làn da nhạy cảm, Cocoon tự hào giới thiệu
                  đột phá mới.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="d-flex w-100 h-100">
              <div className="product-image">
                <img src="/images/Main_banner_3.jpg" alt="Gel dưỡng Bí Đao" />
              </div>
              <div className="product-info bg-3 p-5">
                <h4 className="fw-bold mb-3 p-0">CHƯƠNG TRÌNH</h4>
                <h1 className="fw-bold p-0 mb-5">
                  Đổi Vỏ Chai Cũ Nhận Sản Phẩm Mới{" "}
                </h1>
                <p>
                  Cocoon luôn sẵn sàng nhận vỏ chai cũ từ các bạn và trao đi các
                  sản phẩm mới. Cứ 10 vỏ chai lọ rỗng bạn khi gửi về cho chúng
                  tôi, bạn sẽ nhận lại một sản phẩm mới.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </section>
      <div className="container-fluid section-2 mb-3">
        <div className="section-2-content text-center">
          <h1 className="mb-3">Triết lý THƯƠNG HIỆU</h1>
          <p className="text-gray-500">
            "Là những người yêu thiên nhiên và đam mê khám phá các nguồn nguyên
            liệu đặc hữu của Việt Nam, chúng tôi luôn kiên định với những triết
            lý trên hành trình tìm vẻ đẹp thật sự của làn da."
          </p>
        </div>
      </div>
      <div className="section-3">
        <div className="row m-0 mb-3 p-3">
          <div className="col-12 ">
            <h3 className="text-center fw-bold">CHỨNG NHẬN BỞI CÁC TỔ CHỨC QUỐC TẾ</h3>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-4 section-3-content">
            <div className="section-3-content-img">
              <img src="/images/bunny.svg" alt="" />
            </div>
            <h3 className="text-center fw-bold">Leaping Bunny</h3>
            <h4 className="text-center fw-500 text-gray">
              CHƯƠNG TRÌNH LEAPING BUNNY
            </h4>
            <h5 className="text-center fw-400 text-gray">
              " Chương trình Leaping Bunny của tổ chức Cruelty Free
              International được xem là "tiêu chuẩn vàng" toàn cầu cho các sản
              phẩm không thử nghiệm trên động vật. "
            </h5>
          </div>
          <div className="col-4 section-3-content">
            <div className="section-3-content-img">
              <img src="/images/flower.svg" alt="" />
            </div>
            <h3 className="text-center fw-bold">The Vegan Sociaty</h3>
            <h4 className="text-center fw-500 text-gray">
              HIỆP HỘI THUẦN CHAY QUỐC TẾ
            </h4>
            <h5 className="text-center fw-400 text-gray">
              " Chương trình Leaping Bunny của tổ chức Cruelty Free
              International được xem là "tiêu chuẩn vàng" toàn cầu cho các sản
              phẩm không thử nghiệm trên động vật. "
            </h5>
          </div>
          <div className="col-4 section-3-content">
            <div className="section-3-content-img">
              <img src="/images/buom.svg" alt="" />
            </div>
            <h3 className="text-center fw-bold">PETA</h3>
            <h4 className="text-center fw-500 text-gray">
              ANIMAL TEST-FREE & VEGAN
            </h4>
            <h5 className="text-center fw-400 text-gray">
              " Chương trình Leaping Bunny của tổ chức Cruelty Free
              International được xem là "tiêu chuẩn vàng" toàn cầu cho các sản
              phẩm không thử nghiệm trên động vật. "
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductIntro;


