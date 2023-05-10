import './Slider.css'

function Slider() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                            className="d-block w-100 height-500" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"

                            className="d-block w-100 height-500" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
                            className="d-block w-100 height-500" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">
                        Previous
                    </span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">
                        Next
                    </span>
                </button>
            </div>
        </>
    )
}

export default Slider;