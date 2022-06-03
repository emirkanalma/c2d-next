import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";
import Breadcrumbs from "../components/breadcrumbs";
import Banner from "../components/banner";
import Campaigns from "../components/campaigns";
import Sss from "../components/sss";
import Starrating from "../components/Starrating";

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>

      <Breadcrumbs/>

      <Banner />

      <div className="tasi-yeni-section">
        <div className="tasi-yeni-content">
          <div className="spring">
            <div className="grid">
              <div className="grid__item grid__item--sm-1/1 grid__item--1/2">
                <div className="tasi-yeni-block">
                  <div className="tag">
                    <span>Online’a özel %15 indirim</span>
                  </div>
                  <div className="icerik">
                    <div className="img-blck">
                      <img
                        src="https://cms.vodafone.com.tr/static/img/content/21-11/10/img1.png"
                        alt=""
                      />
                    </div>
                    <h3 className="heading heading--3">Numara Taşı</h3>
                    <p>
                      Numaranızı ücretsiz olarak Vodafone faturalıya taşıyın,
                      istediğiniz yere ücretsiz getirelim.
                    </p>
                    <Link href="https://www.vodafone.com.tr/numara-tasima-yeni-hat/tarifeler">
                      <a className="button button--primary">Numaranı Taşı</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid__item grid__item--sm-1/1 grid__item--1/2">
                <div className="tasi-yeni-block">
                  <div className="tag">
                    <span>Online’a özel %15 indirim</span>
                  </div>
                  <div className="icerik">
                    <div className="img-blck">
                      <img
                        src="https://cms.vodafone.com.tr/static/img/content/21-11/10/img2.png"
                        alt=""
                      />
                    </div>
                    <h3 className="heading heading--3">Yeni Faturalı Hat Al</h3>
                    <p>
                      Ücretsiz olarak yeni hat satın alın, <br /> istediğiniz
                      yere ücretsiz getirelim.
                    </p>
                    <Link href="https://www.vodafone.com.tr/numara-tasima-yeni-hat/tarifeler">
                      <a className="button button--primary">
                        Yeni faturalı hat al
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Campaigns />

      <div className="section section--white">
        <div className="spring">
          <h2 className="heading heading--2 heading--center">
            Nasıl Vodafonelu olurum?
          </h2>
          <div className="nasil-vfli-steps">
            <div className="item">
              <img
                src="https://cms.vodafone.com.tr/static/img/content/21-11/10/nvfli-1.png"
                alt=""
                className="hide--sm"
              />
              <img
                src="https://cms.vodafone.com.tr/static/img/content/21-11/10/nvfli-1-mb-1636536325.png"
                alt=""
                className="hide--md hide--lg"
              />
              <div className="steps-pin">
                <div className="pin"></div>
              </div>
              <div className="txt">
                <p>Tarifeni seç</p>
                <span>
                  Avantajlı tarifeler arasından sana en uygun olanı seç.
                </span>
              </div>
            </div>
            <div className="item">
              <img
                src="https://cms.vodafone.com.tr/static/img/content/21-11/10/nvfli-2.png"
                alt=""
                className="hide--sm"
              />
              <img
                src="https://cms.vodafone.com.tr/static/img/content/21-11/10/nvfli-2-mb.png"
                alt=""
                className="hide--md hide--lg"
              />
              <div className="steps-pin">
                <div className="pin"></div>
              </div>
              <div className="txt">
                <p>Formu doldur</p>
                <span>
                  Başvurunu tamamlamak için kimlik ve adres bilgilerini gir.
                </span>
              </div>
            </div>
            <div className="item">
              <img
                src="https://cms.vodafone.com.tr/static/img/content/21-11/10/nvfli-3.png"
                alt=""
                className="hide--sm"
              />
              <img
                src="https://cms.vodafone.com.tr/static/img/content/21-11/10/nvfli-3-mb.png"
                alt=""
                className="hide--md hide--lg"
              />
              <div className="steps-pin">
                <div className="pin"></div>
              </div>
              <div className="txt">
                <p>Seni arayalım</p>
                <span>
                  Teslimat tarihini birlikte belirleyelim, sonrasında sürecini
                  <Link href="/">
                    <a>buradan</a>
                  </Link>{" "}
                  takip edebilirsin.
                </span>
              </div>
            </div>
            <div className="item">
              <img
                src="https://cms.vodafone.com.tr/static/img/content/21-11/10/nvfli-4.png"
                alt=""
                className="hide--sm"
              />
              <img
                src="https://cms.vodafone.com.tr/static/img/content/21-11/10/nvfli-4-mb.png"
                alt=""
                className="hide--md hide--lg"
              />
              <div className="steps-pin">
                <div className="pin"></div>
              </div>
              <div className="txt">
                <p>Ücretsiz gelsin</p>
                <span>
                  Sim kartını ve sözleşmelerini istediğin yere getirelim.
                </span>
              </div>
            </div>
          </div>
          <Link href="https://www.vodafone.com.tr/numara-tasima-yeni-hat/tarifeler">
            <a className="button button--primary btn-nsl-vfli">
              Tarifeleri incele
            </a>
          </Link>
        </div>
      </div>

      <Sss />

      <Starrating />

      <div className="basvuru-yaptinmi-block">
        <p>Zaten başvuru yaptın mı? </p>
        <Link  href="/">
          <a className="button button--primary">
            Başvuru Sorgula
          </a>
        </Link>
      </div>

      <div className="section section--white section--davt">
            <div className="spring">
                <h2 className="heading heading--2 heading--center">Dijitalden Vodafone’lu olmanın avantajları neler?</h2>
                <div className="vf-djtl-basvuru">

                    <div className="item">
                        <div className="img">
                            <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/davt-1.png" alt=""
                                className="hide--sm"/>
                            <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/davt-1-mb.png" alt=""
                                className="hide--md hide--lg"/>
                        </div>
                        <p>
                            Dijitale özel avantajlar
                        </p>
                    </div>
                    <div className="item">
                        <div className="img">
                            <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/davt-2.png" alt=""
                                className="hide--sm"/>
                            <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/davt-2-mb.png" alt=""
                                className="hide--md hide--lg"/>
                        </div>
                        <p>
                            Her ay hediye GB
                        </p>
                    </div>
                    <div className="item">
                        <div className="img">
                            <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/davt-3.png" alt=""
                                className="hide--sm"/>
                            <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/davt-3-mb.png" alt=""
                                className="hide--md hide--lg"/>
                        </div>
                        <p>
                            Ücretsiz SIM kart
                        </p>
                    </div>
                    <div className="item">
                        <div className="img">
                            <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/davt-4.png" alt=""
                                className="hide--sm"/>
                            <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/davt-4-mb.png" alt=""
                                className="hide--md hide--lg"/>
                        </div>
                        <p>
                            Ücretsiz teslimat
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </Layout>
  );
}

export default HomePage;
