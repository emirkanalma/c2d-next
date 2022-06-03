function Banner() {
    return(
        <div className="hero">
            <div className="background  background--cover    hero__background ">
                <div className="background__image lazyloaded" data-bgset=""
                    style={{ backgroundImage: 'linear-gradient(77deg, #820000, #e60000 100%)', backgroundSize:'contain'}}>
                </div>
            </div>
            
            <div className="hero__band e-hero">
                <div className="hero__message">
                    <div className="spring">
                        <div className="hero-tx-cont">
                            <div className="text">
                                <p className="hide--sm"> Red tarifelerine özel 12 ay geçerli aylık 5GB’a varan internet
                                    hediye!</p>
                                <p className="hide--md hide--lg">Red tarifelerine özel 12 ay <br/> geçerli aylık 5GB’a varan
                                    <br/> internet
                                    hediye!
                                </p>
                                <span>Sınırlı ve süreli olan bu fırsatı kaçırma, avantajlı tarifeleri hemen
                                    incele!</span>
                            </div>
                            <div className="times">

                                <div className="kalan-time">
                                    <div className="time-section">
                                        <div className="time-contain">
                                            <span className="time-blck time-gun">00</span>
                                            <span className="time-text">gün</span>
                                        </div>
                                        <div className="time-contain">
                                            <span className="time-blck time-saat">00</span>
                                            <span className="time-text">saat</span>
                                        </div>
                                        <div className="time-contain">
                                            <span className="time-blck time-dakika">00</span>
                                            <span className="time-text">dakika</span>
                                        </div>
                                        <div className="time-contain">
                                            <span className="time-blck time-saniye">00</span>
                                            <span className="time-text">saniye</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner