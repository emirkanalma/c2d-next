import { useState } from "react";
import Script from 'next/script'

function Sss(){
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
    setToggleState(index);
    };



    return(
        <div className="section section--white">

            <div className="spring answ-spring">
                <h2 className="heading heading--2 heading--center">Sorularınızın cevapları burada.</h2>
            </div>

            <div className="spring spr-tab">
                <div className="tab">
                    <a  className={toggleState === 1 ? "tablinks active" : "tablinks"}
                    onClick={() => toggleTab(1)}>
                        <div className="anws-img  hide--sm">
                            
                        </div>
                        <span className="hide--sm">Dijitalden başvuru avantajları</span>
                        <span className="hide--md hide--lg">
                            Avantajlar
                        </span>
                    </a>
                    <a className={toggleState === 2 ? "tablinks active" : "tablinks"}
                    onClick={() => toggleTab(2)}>
                        <div className="anws-img hide--sm">
                          
                           
                        </div>
                        <span className="hide--sm">Yeni numara almak</span>
                        <span className="hide--md hide--lg">
                            Yeni Numara
                        </span>
                    </a>
                    <a className={toggleState === 3 ? "tablinks active" : "tablinks"}
                    onClick={() => toggleTab(3)}>
                        <div className="anws-img hide--sm">
                           
                        </div>
                        <span className="hide--sm">Numara taşımak</span>
                        <span className="hide--md hide--lg">
                            Numara Taşıma
                        </span>
                    </a>
                    <a className={toggleState === 4 ? "tablinks active" : "tablinks"}
                    onClick={() => toggleTab(4)}>
                        <div className="anws-img hide--sm">
                           
                        </div>
                        <span className="hide--sm">Genel</span>
                        <span className="hide--md hide--lg">
                            Genel
                        </span>
                    </a>
                </div>
            </div>
            
            <div className="spring">
                <div id="dijitalden-basvuru-avantajlari" className={toggleState === 1 ? "tabcontent  active-tabcontent" : "tabcontent"}>
                    <div className="hide--sm">
                        <div className="tab-sss-item">
                            <div className="heading heading--4">Vodafone’un dijital kanallarından Yanımda veya
                                Vodafone.com.tr başvuru yaptığımda herhangi bir kurye ya da başvuru ücredi öder miyim?
                            </div>
                            <p>
                                Hayır, dijitalden yaptığınız başvurular tamamen ücretsizdir; ayrıca hattınız adresinize
                                ücretsiz teslim edilir. Vergiler hakkında detaylı bilgi almak için lütfen <a
                                 className="red-a">tıklayınız</a>.
                            </p>
                        </div>
                        <div className="tab-sss-item">
                            <div className="heading heading--4">Teslimatım ne kadar sürede gerçekleşir?</div>
                            <p>
                                Sitemizde belirtilen ilçelerden birinde oturuyorsanız 24 saat içinde, başka bir ilçede
                                ikamet ediyorsanız ise 2-4 gün içerisinde hattınızı size teslim edeceğiz.
                            </p>
                        </div>
                        <div className="tab-sss-item">
                            <div className="heading heading--4">Evraklarımı nasıl teslim alacağım?
                            </div>
                            <p>
                                Hattınıza dair evraklar, hattın teslimatını gerçekleştirecek kurye elemanı tarafından
                                getirilecektir. Hattınızı teslim aldığınızda evrakları imzalayarak işlemlerinizi kolayca
                                tamamlayabilirsiniz.
                            </p>
                        </div>
                        <div className="tab-sss-item">
                            <div className="heading heading--4">Online’a Özel Avantajlar nelerdir?
                            </div>
                            <p>
                                Vodafone’un dijital kanallarından yaptığınız başvurularda birçok tarifeye özel ilk 3 ay
                                %15’e varan indirime sahip olacaksınız. Tüm tarifeleri incelemek için <a
                                 target="_blank" className="red-a">tıklayınız</a>.
                            </p>
                        </div>
                        <div className="tab-sss-item">
                            <div className="heading heading--4">Tıkla Gel Al nedir?
                            </div>
                            <p>
                                Başvurunuz sırasında Tıkla Gel Al yöntemini seçerek, SIM kartınızı dilediğiniz herhangi
                                bir Vodafone Mağazasından hızlıca teslim alabilirsiniz. Mağazaya gittiğinizde
                                işleminizin tamamlanabilmesi için size gönderilen bilgilendirme SMS'inde yer alan
                                başvuru numaranızı ya da TC kimlik numaranızı mağaza çalışanına vermeniz yeterlidir.
                                Başvurunuzun geçerlilik süresi 10 gündür, İlk 3 gün içerisinde dilediğiniz mağazamızı
                                ziyaret ederek sim kartınızı teslim alabilirsiniz. 3 günün sonunda hattınız adresinize
                                teslim edilmek üzere kuryeye yönlendirilecektir. Size en yakın Vodafone Mağazalarını
                                incelemek için <a target="_blank" className="red-a">tıklayınız</a>.
                            </p>
                        </div>
                    </div>
                    <div className="hide--md hide--lg">
                        <div className="sss-block">
                            <div className="sss-item">
                                <a className="accordion-vf">
                                    Vodafone’un dijital kanallarından başvuru yaptığımda herhangi bir kurye ya da
                                    başvuru ücredi öder miyim?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum libero
                                            in tristique feugiat. Maecenas eget pretium quam. Sed varius justo in urna
                                            interdum venenatis. Maecenas sed viverra velit. Aliquam varius auctor urna
                                            id efficitur. <strong>Morbi in volutpat diam,</strong> vitae condimentum
                                            arcu. Nam vehicula, diam at tristique blandit, nibh tortor pharetra arcu,
                                            sed pulvinar lorem nibh quis lacus. Curabitur quis nibh at tortor ultrices
                                            pulvinar sed sit amet justo. Nunc ultricies ligula vitae sagittis tempor.
                                            Proin vestibulum nibh facilisis ex posuere molestie. Ut convallis, urna eu
                                            pellentesque tincidunt, urna ex ornare purus, eget molestie metus lacus in
                                            nisi In hac habitasse platea dictumst. Nullam malesuada sem ac ante
                                            imperdiet, sed porttitor turpis laoreet. Aliquam sem mi, pharetra sit amet
                                            ultricies sed, convallis vel quam. <strong>Proin nibh leo, commodo in
                                            </strong> fringilla in, egestas eget est. Pellentesque nec ipsum posuere,
                                            faucibus risus in, bibendum orci. Nullam rutrum non est in rhoncus. Sed
                                            pulvinar quis sapien iaculis volutpat. Nullam mollis, quam ut hendrerit
                                            sodales, eros diam luctus magna, eu sagittis arcu augue sit amet purus.
                                            Nulla felis nibh, semper at massa quis, sagittis porttitor libero.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="sss-item">
                                <a className="accordion-vf">
                                    Teslimatım ne kadar sürede gerçekleşir?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum libero
                                            in tristique feugiat. Maecenas eget pretium quam. Sed varius justo in urna
                                            interdum venenatis. Maecenas sed viverra velit. Aliquam varius auctor urna
                                            id efficitur. <strong>Morbi in volutpat diam,</strong> vitae condimentum
                                            arcu. Nam vehicula, diam at tristique blandit, nibh tortor pharetra arcu,
                                            sed pulvinar lorem nibh quis lacus. Curabitur quis nibh at tortor ultrices
                                            pulvinar sed sit amet justo. Nunc ultricies ligula vitae sagittis tempor.
                                            Proin vestibulum nibh facilisis ex posuere molestie. Ut convallis, urna eu
                                            pellentesque tincidunt, urna ex ornare purus, eget molestie metus lacus in
                                            nisi In hac habitasse platea dictumst. Nullam malesuada sem ac ante
                                            imperdiet, sed porttitor turpis laoreet. Aliquam sem mi, pharetra sit amet
                                            ultricies sed, convallis vel quam. <strong>Proin nibh leo, commodo in
                                            </strong> fringilla in, egestas eget est. Pellentesque nec ipsum posuere,
                                            faucibus risus in, bibendum orci. Nullam rutrum non est in rhoncus. Sed
                                            pulvinar quis sapien iaculis volutpat. Nullam mollis, quam ut hendrerit
                                            sodales, eros diam luctus magna, eu sagittis arcu augue sit amet purus.
                                            Nulla felis nibh, semper at massa quis, sagittis porttitor libero.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="sss-item">
                                <a className="accordion-vf">
                                    Evraklarımı nasıl teslim alacağım?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum libero
                                            in tristique feugiat. Maecenas eget pretium quam. Sed varius justo in urna
                                            interdum venenatis. Maecenas sed viverra velit. Aliquam varius auctor urna
                                            id efficitur. <strong>Morbi in volutpat diam,</strong> vitae condimentum
                                            arcu. Nam vehicula, diam at tristique blandit, nibh tortor pharetra arcu,
                                            sed pulvinar lorem nibh quis lacus. Curabitur quis nibh at tortor ultrices
                                            pulvinar sed sit amet justo. Nunc ultricies ligula vitae sagittis tempor.
                                            Proin vestibulum nibh facilisis ex posuere molestie. Ut convallis, urna eu
                                            pellentesque tincidunt, urna ex ornare purus, eget molestie metus lacus in
                                            nisi In hac habitasse platea dictumst. Nullam malesuada sem ac ante
                                            imperdiet, sed porttitor turpis laoreet. Aliquam sem mi, pharetra sit amet
                                            ultricies sed, convallis vel quam. <strong>Proin nibh leo, commodo in
                                            </strong> fringilla in, egestas eget est. Pellentesque nec ipsum posuere,
                                            faucibus risus in, bibendum orci. Nullam rutrum non est in rhoncus. Sed
                                            pulvinar quis sapien iaculis volutpat. Nullam mollis, quam ut hendrerit
                                            sodales, eros diam luctus magna, eu sagittis arcu augue sit amet purus.
                                            Nulla felis nibh, semper at massa quis, sagittis porttitor libero.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="sss-item">
                                <a className="accordion-vf">
                                    Tıkla Gel Al nedir?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum libero
                                            in tristique feugiat. Maecenas eget pretium quam. Sed varius justo in urna
                                            interdum venenatis. Maecenas sed viverra velit. Aliquam varius auctor urna
                                            id efficitur. <strong>Morbi in volutpat diam,</strong> vitae condimentum
                                            arcu. Nam vehicula, diam at tristique blandit, nibh tortor pharetra arcu,
                                            sed pulvinar lorem nibh quis lacus. Curabitur quis nibh at tortor ultrices
                                            pulvinar sed sit amet justo. Nunc ultricies ligula vitae sagittis tempor.
                                            Proin vestibulum nibh facilisis ex posuere molestie. Ut convallis, urna eu
                                            pellentesque tincidunt, urna ex ornare purus, eget molestie metus lacus in
                                            nisi In hac habitasse platea dictumst. Nullam malesuada sem ac ante
                                            imperdiet, sed porttitor turpis laoreet. Aliquam sem mi, pharetra sit amet
                                            ultricies sed, convallis vel quam. <strong>Proin nibh leo, commodo in
                                            </strong> fringilla in, egestas eget est. Pellentesque nec ipsum posuere,
                                            faucibus risus in, bibendum orci. Nullam rutrum non est in rhoncus. Sed
                                            pulvinar quis sapien iaculis volutpat. Nullam mollis, quam ut hendrerit
                                            sodales, eros diam luctus magna, eu sagittis arcu augue sit amet purus.
                                            Nulla felis nibh, semper at massa quis, sagittis porttitor libero.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sss-item">
                                <a className="accordion-vf">
                                    Online’a özel avantajlar nelerdir?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Vodafone’un dijital kanallarından yaptığınız başvurularda birçok tarifeye
                                            özel ilk 3 ay %15’e varan indirime sahip olacaksınız. Tüm tarifeleri
                                            incelemek için <a className="red-a">tıklayınız</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="yeni-numara-almak"  className={toggleState === 2 ? "tabcontent  active-tabcontent" : "tabcontent"}>
                    <div className="hide--sm">
                        <div className="tab-sss-item">
                            <div className="heading heading--4">22222Vodafone’un dijital kanallarından Yanımda veya
                                Vodafone.com.tr) başvuru yaptığımda herhangi bir kurye ya da başvuru ücredi öder miyim?
                            </div>
                            <p>
                                Hayır, dijitalden yaptığınız başvurular tamamen ücretsizdir; ayrıca hattınız adresinize
                                ücretsiz teslim edilir. Vergiler hakkında detaylı bilgi almak için lütfen <a
                                 className="red-a">tıklayınız</a>.
                            </p>
                        </div>
                        <div className="tab-sss-item">
                            <div className="heading heading--4">Teslimatım ne kadar sürede gerçekleşir?</div>
                            <p>
                                Sitemizde belirtilen ilçelerden birinde oturuyorsanız 24 saat içinde, başka bir ilçede
                                ikamet ediyorsanız ise 2-4 gün içerisinde hattınızı size teslim edeceğiz.
                            </p>
                        </div>
                        <div className="tab-sss-item">
                            <div className="heading heading--4">Evraklarımı nasıl teslim alacağım?
                            </div>
                            <p>
                                Hattınıza dair evraklar, hattın teslimatını gerçekleştirecek kurye elemanı tarafından
                                getirilecektir. Hattınızı teslim aldığınızda evrakları imzalayarak işlemlerinizi kolayca
                                tamamlayabilirsiniz.
                            </p>
                        </div>
                        <div className="tab-sss-item">
                            <div className="heading heading--4">Online’a Özel Avantajlar nelerdir?
                            </div>
                            <p>
                                Vodafone’un dijital kanallarından yaptığınız başvurularda birçok tarifeye özel ilk 3 ay
                                %15’e varan indirime sahip olacaksınız. Tüm tarifeleri incelemek için <a
                                 target="_blank" className="red-a">tıklayınız</a>.
                            </p>
                        </div>
                        <div className="tab-sss-item">
                            <div className="heading heading--4">Tıkla Gel Al nedir?
                            </div>
                            <p>
                                Başvurunuz sırasında Tıkla Gel Al yöntemini seçerek, SIM kartınızı dilediğiniz herhangi
                                bir Vodafone Mağazasından hızlıca teslim alabilirsiniz. Mağazaya gittiğinizde
                                işleminizin tamamlanabilmesi için size gönderilen bilgilendirme SMS'inde yer alan
                                başvuru numaranızı ya da TC kimlik numaranızı mağaza çalışanına vermeniz yeterlidir.
                                Başvurunuzun geçerlilik süresi 10 gündür, İlk 3 gün içerisinde dilediğiniz mağazamızı
                                ziyaret ederek sim kartınızı teslim alabilirsiniz. 3 günün sonunda hattınız adresinize
                                teslim edilmek üzere kuryeye yönlendirilecektir. Size en yakın Vodafone Mağazalarını
                                incelemek için <a target="_blank" className="red-a">tıklayınız</a>.
                            </p>
                        </div>
                    </div>

                    <div className="hide--md hide--lg">
                        <div className="sss-block">
                            <div className="sss-item">
                                <a className="accordion-vf">
                                    22222Vodafone’un dijital kanallarından başvuru yaptığımda herhangi bir kurye ya da
                                    başvuru ücredi öder miyim?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum libero
                                            in tristique feugiat. Maecenas eget pretium quam. Sed varius justo in urna
                                            interdum venenatis. Maecenas sed viverra velit. Aliquam varius auctor urna
                                            id efficitur. <strong>Morbi in volutpat diam,</strong> vitae condimentum
                                            arcu. Nam vehicula, diam at tristique blandit, nibh tortor pharetra arcu,
                                            sed pulvinar lorem nibh quis lacus. Curabitur quis nibh at tortor ultrices
                                            pulvinar sed sit amet justo. Nunc ultricies ligula vitae sagittis tempor.
                                            Proin vestibulum nibh facilisis ex posuere molestie. Ut convallis, urna eu
                                            pellentesque tincidunt, urna ex ornare purus, eget molestie metus lacus in
                                            nisi In hac habitasse platea dictumst. Nullam malesuada sem ac ante
                                            imperdiet, sed porttitor turpis laoreet. Aliquam sem mi, pharetra sit amet
                                            ultricies sed, convallis vel quam. <strong>Proin nibh leo, commodo in
                                            </strong> fringilla in, egestas eget est. Pellentesque nec ipsum posuere,
                                            faucibus risus in, bibendum orci. Nullam rutrum non est in rhoncus. Sed
                                            pulvinar quis sapien iaculis volutpat. Nullam mollis, quam ut hendrerit
                                            sodales, eros diam luctus magna, eu sagittis arcu augue sit amet purus.
                                            Nulla felis nibh, semper at massa quis, sagittis porttitor libero.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="sss-item">
                                <a className="accordion-vf">
                                    Teslimatım ne kadar sürede gerçekleşir?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum libero
                                            in tristique feugiat. Maecenas eget pretium quam. Sed varius justo in urna
                                            interdum venenatis. Maecenas sed viverra velit. Aliquam varius auctor urna
                                            id efficitur. <strong>Morbi in volutpat diam,</strong> vitae condimentum
                                            arcu. Nam vehicula, diam at tristique blandit, nibh tortor pharetra arcu,
                                            sed pulvinar lorem nibh quis lacus. Curabitur quis nibh at tortor ultrices
                                            pulvinar sed sit amet justo. Nunc ultricies ligula vitae sagittis tempor.
                                            Proin vestibulum nibh facilisis ex posuere molestie. Ut convallis, urna eu
                                            pellentesque tincidunt, urna ex ornare purus, eget molestie metus lacus in
                                            nisi In hac habitasse platea dictumst. Nullam malesuada sem ac ante
                                            imperdiet, sed porttitor turpis laoreet. Aliquam sem mi, pharetra sit amet
                                            ultricies sed, convallis vel quam. <strong>Proin nibh leo, commodo in
                                            </strong> fringilla in, egestas eget est. Pellentesque nec ipsum posuere,
                                            faucibus risus in, bibendum orci. Nullam rutrum non est in rhoncus. Sed
                                            pulvinar quis sapien iaculis volutpat. Nullam mollis, quam ut hendrerit
                                            sodales, eros diam luctus magna, eu sagittis arcu augue sit amet purus.
                                            Nulla felis nibh, semper at massa quis, sagittis porttitor libero.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="sss-item">
                                <a className="accordion-vf">
                                    Evraklarımı nasıl teslim alacağım?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum libero
                                            in tristique feugiat. Maecenas eget pretium quam. Sed varius justo in urna
                                            interdum venenatis. Maecenas sed viverra velit. Aliquam varius auctor urna
                                            id efficitur. <strong>Morbi in volutpat diam,</strong> vitae condimentum
                                            arcu. Nam vehicula, diam at tristique blandit, nibh tortor pharetra arcu,
                                            sed pulvinar lorem nibh quis lacus. Curabitur quis nibh at tortor ultrices
                                            pulvinar sed sit amet justo. Nunc ultricies ligula vitae sagittis tempor.
                                            Proin vestibulum nibh facilisis ex posuere molestie. Ut convallis, urna eu
                                            pellentesque tincidunt, urna ex ornare purus, eget molestie metus lacus in
                                            nisi In hac habitasse platea dictumst. Nullam malesuada sem ac ante
                                            imperdiet, sed porttitor turpis laoreet. Aliquam sem mi, pharetra sit amet
                                            ultricies sed, convallis vel quam. <strong>Proin nibh leo, commodo in
                                            </strong> fringilla in, egestas eget est. Pellentesque nec ipsum posuere,
                                            faucibus risus in, bibendum orci. Nullam rutrum non est in rhoncus. Sed
                                            pulvinar quis sapien iaculis volutpat. Nullam mollis, quam ut hendrerit
                                            sodales, eros diam luctus magna, eu sagittis arcu augue sit amet purus.
                                            Nulla felis nibh, semper at massa quis, sagittis porttitor libero.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="sss-item">
                                <a className="accordion-vf">
                                    Tıkla Gel Al nedir?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum libero
                                            in tristique feugiat. Maecenas eget pretium quam. Sed varius justo in urna
                                            interdum venenatis. Maecenas sed viverra velit. Aliquam varius auctor urna
                                            id efficitur. <strong>Morbi in volutpat diam,</strong> vitae condimentum
                                            arcu. Nam vehicula, diam at tristique blandit, nibh tortor pharetra arcu,
                                            sed pulvinar lorem nibh quis lacus. Curabitur quis nibh at tortor ultrices
                                            pulvinar sed sit amet justo. Nunc ultricies ligula vitae sagittis tempor.
                                            Proin vestibulum nibh facilisis ex posuere molestie. Ut convallis, urna eu
                                            pellentesque tincidunt, urna ex ornare purus, eget molestie metus lacus in
                                            nisi In hac habitasse platea dictumst. Nullam malesuada sem ac ante
                                            imperdiet, sed porttitor turpis laoreet. Aliquam sem mi, pharetra sit amet
                                            ultricies sed, convallis vel quam. <strong>Proin nibh leo, commodo in
                                            </strong> fringilla in, egestas eget est. Pellentesque nec ipsum posuere,
                                            faucibus risus in, bibendum orci. Nullam rutrum non est in rhoncus. Sed
                                            pulvinar quis sapien iaculis volutpat. Nullam mollis, quam ut hendrerit
                                            sodales, eros diam luctus magna, eu sagittis arcu augue sit amet purus.
                                            Nulla felis nibh, semper at massa quis, sagittis porttitor libero.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sss-item">
                                <a className="accordion-vf">
                                    Online’a özel avantajlar nelerdir?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Vodafone’un dijital kanallarından yaptığınız başvurularda birçok tarifeye
                                            özel ilk 3 ay %15’e varan indirime sahip olacaksınız. Tüm tarifeleri
                                            incelemek için <a className="red-a">tıklayınız</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="numara-tasimak"  className={toggleState === 3 ? "tabcontent  active-tabcontent" : "tabcontent"}>

                    <div className="hide--sm">
                        <div className="tab-sss-item">
                            <div className="heading heading--4">33333Vodafone’un dijital kanallarından Yanımda veya
                                Vodafone.com.tr) başvuru yaptığımda herhangi bir kurye ya da başvuru ücredi öder miyim?
                            </div>
                            <p>
                                Hayır, dijitalden yaptığınız başvurular tamamen ücretsizdir; ayrıca hattınız adresinize
                                ücretsiz teslim edilir. Vergiler hakkında detaylı bilgi almak için lütfen <a
                                 className="red-a">tıklayınız</a>.
                            </p>
                        </div>
                        <div className="tab-sss-item">
                            <div className="heading heading--4">Teslimatım ne kadar sürede gerçekleşir?</div>
                            <p>
                                Sitemizde belirtilen ilçelerden birinde oturuyorsanız 24 saat içinde, başka bir ilçede
                                ikamet ediyorsanız ise 2-4 gün içerisinde hattınızı size teslim edeceğiz.
                            </p>
                        </div>
                        <div className="tab-sss-item">
                            <div className="heading heading--4">Evraklarımı nasıl teslim alacağım?
                            </div>
                            <p>
                                Hattınıza dair evraklar, hattın teslimatını gerçekleştirecek kurye elemanı tarafından
                                getirilecektir. Hattınızı teslim aldığınızda evrakları imzalayarak işlemlerinizi kolayca
                                tamamlayabilirsiniz.
                            </p>
                        </div>
                        <div className="tab-sss-item">
                            <div className="heading heading--4">Online’a Özel Avantajlar nelerdir?
                            </div>
                            <p>
                                Vodafone’un dijital kanallarından yaptığınız başvurularda birçok tarifeye özel ilk 3 ay
                                %15’e varan indirime sahip olacaksınız. Tüm tarifeleri incelemek için <a
                                 target="_blank" className="red-a">tıklayınız</a>.
                            </p>
                        </div>
                        <div className="tab-sss-item">
                            <div className="heading heading--4">Tıkla Gel Al nedir?
                            </div>
                            <p>
                                Başvurunuz sırasında Tıkla Gel Al yöntemini seçerek, SIM kartınızı dilediğiniz herhangi
                                bir Vodafone Mağazasından hızlıca teslim alabilirsiniz. Mağazaya gittiğinizde
                                işleminizin tamamlanabilmesi için size gönderilen bilgilendirme SMS'inde yer alan
                                başvuru numaranızı ya da TC kimlik numaranızı mağaza çalışanına vermeniz yeterlidir.
                                Başvurunuzun geçerlilik süresi 10 gündür, İlk 3 gün içerisinde dilediğiniz mağazamızı
                                ziyaret ederek sim kartınızı teslim alabilirsiniz. 3 günün sonunda hattınız adresinize
                                teslim edilmek üzere kuryeye yönlendirilecektir. Size en yakın Vodafone Mağazalarını
                                incelemek için <a target="_blank" className="red-a">tıklayınız</a>.
                            </p>
                        </div>
                    </div>

                    <div className="hide--md hide--lg">
                        <div className="sss-block">
                            <div className="sss-item">
                                <a className="accordion-vf">
                                    33333Vodafone’un dijital kanallarından başvuru yaptığımda herhangi bir kurye ya da
                                    başvuru ücredi öder miyim?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum libero
                                            in tristique feugiat. Maecenas eget pretium quam. Sed varius justo in urna
                                            interdum venenatis. Maecenas sed viverra velit. Aliquam varius auctor urna
                                            id efficitur. <strong>Morbi in volutpat diam,</strong> vitae condimentum
                                            arcu. Nam vehicula, diam at tristique blandit, nibh tortor pharetra arcu,
                                            sed pulvinar lorem nibh quis lacus. Curabitur quis nibh at tortor ultrices
                                            pulvinar sed sit amet justo. Nunc ultricies ligula vitae sagittis tempor.
                                            Proin vestibulum nibh facilisis ex posuere molestie. Ut convallis, urna eu
                                            pellentesque tincidunt, urna ex ornare purus, eget molestie metus lacus in
                                            nisi In hac habitasse platea dictumst. Nullam malesuada sem ac ante
                                            imperdiet, sed porttitor turpis laoreet. Aliquam sem mi, pharetra sit amet
                                            ultricies sed, convallis vel quam. <strong>Proin nibh leo, commodo in
                                            </strong> fringilla in, egestas eget est. Pellentesque nec ipsum posuere,
                                            faucibus risus in, bibendum orci. Nullam rutrum non est in rhoncus. Sed
                                            pulvinar quis sapien iaculis volutpat. Nullam mollis, quam ut hendrerit
                                            sodales, eros diam luctus magna, eu sagittis arcu augue sit amet purus.
                                            Nulla felis nibh, semper at massa quis, sagittis porttitor libero.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="sss-item">
                                <a className="accordion-vf">
                                    Teslimatım ne kadar sürede gerçekleşir?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum libero
                                            in tristique feugiat. Maecenas eget pretium quam. Sed varius justo in urna
                                            interdum venenatis. Maecenas sed viverra velit. Aliquam varius auctor urna
                                            id efficitur. <strong>Morbi in volutpat diam,</strong> vitae condimentum
                                            arcu. Nam vehicula, diam at tristique blandit, nibh tortor pharetra arcu,
                                            sed pulvinar lorem nibh quis lacus. Curabitur quis nibh at tortor ultrices
                                            pulvinar sed sit amet justo. Nunc ultricies ligula vitae sagittis tempor.
                                            Proin vestibulum nibh facilisis ex posuere molestie. Ut convallis, urna eu
                                            pellentesque tincidunt, urna ex ornare purus, eget molestie metus lacus in
                                            nisi In hac habitasse platea dictumst. Nullam malesuada sem ac ante
                                            imperdiet, sed porttitor turpis laoreet. Aliquam sem mi, pharetra sit amet
                                            ultricies sed, convallis vel quam. <strong>Proin nibh leo, commodo in
                                            </strong> fringilla in, egestas eget est. Pellentesque nec ipsum posuere,
                                            faucibus risus in, bibendum orci. Nullam rutrum non est in rhoncus. Sed
                                            pulvinar quis sapien iaculis volutpat. Nullam mollis, quam ut hendrerit
                                            sodales, eros diam luctus magna, eu sagittis arcu augue sit amet purus.
                                            Nulla felis nibh, semper at massa quis, sagittis porttitor libero.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="sss-item">
                                <a className="accordion-vf">
                                    Evraklarımı nasıl teslim alacağım?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum libero
                                            in tristique feugiat. Maecenas eget pretium quam. Sed varius justo in urna
                                            interdum venenatis. Maecenas sed viverra velit. Aliquam varius auctor urna
                                            id efficitur. <strong>Morbi in volutpat diam,</strong> vitae condimentum
                                            arcu. Nam vehicula, diam at tristique blandit, nibh tortor pharetra arcu,
                                            sed pulvinar lorem nibh quis lacus. Curabitur quis nibh at tortor ultrices
                                            pulvinar sed sit amet justo. Nunc ultricies ligula vitae sagittis tempor.
                                            Proin vestibulum nibh facilisis ex posuere molestie. Ut convallis, urna eu
                                            pellentesque tincidunt, urna ex ornare purus, eget molestie metus lacus in
                                            nisi In hac habitasse platea dictumst. Nullam malesuada sem ac ante
                                            imperdiet, sed porttitor turpis laoreet. Aliquam sem mi, pharetra sit amet
                                            ultricies sed, convallis vel quam. <strong>Proin nibh leo, commodo in
                                            </strong> fringilla in, egestas eget est. Pellentesque nec ipsum posuere,
                                            faucibus risus in, bibendum orci. Nullam rutrum non est in rhoncus. Sed
                                            pulvinar quis sapien iaculis volutpat. Nullam mollis, quam ut hendrerit
                                            sodales, eros diam luctus magna, eu sagittis arcu augue sit amet purus.
                                            Nulla felis nibh, semper at massa quis, sagittis porttitor libero.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="sss-item">
                                <a className="accordion-vf">
                                    Tıkla Gel Al nedir?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum libero
                                            in tristique feugiat. Maecenas eget pretium quam. Sed varius justo in urna
                                            interdum venenatis. Maecenas sed viverra velit. Aliquam varius auctor urna
                                            id efficitur. <strong>Morbi in volutpat diam,</strong> vitae condimentum
                                            arcu. Nam vehicula, diam at tristique blandit, nibh tortor pharetra arcu,
                                            sed pulvinar lorem nibh quis lacus. Curabitur quis nibh at tortor ultrices
                                            pulvinar sed sit amet justo. Nunc ultricies ligula vitae sagittis tempor.
                                            Proin vestibulum nibh facilisis ex posuere molestie. Ut convallis, urna eu
                                            pellentesque tincidunt, urna ex ornare purus, eget molestie metus lacus in
                                            nisi In hac habitasse platea dictumst. Nullam malesuada sem ac ante
                                            imperdiet, sed porttitor turpis laoreet. Aliquam sem mi, pharetra sit amet
                                            ultricies sed, convallis vel quam. <strong>Proin nibh leo, commodo in
                                            </strong> fringilla in, egestas eget est. Pellentesque nec ipsum posuere,
                                            faucibus risus in, bibendum orci. Nullam rutrum non est in rhoncus. Sed
                                            pulvinar quis sapien iaculis volutpat. Nullam mollis, quam ut hendrerit
                                            sodales, eros diam luctus magna, eu sagittis arcu augue sit amet purus.
                                            Nulla felis nibh, semper at massa quis, sagittis porttitor libero.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sss-item">
                                <a className="accordion-vf">
                                    Online’a özel avantajlar nelerdir?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Vodafone’un dijital kanallarından yaptığınız başvurularda birçok tarifeye
                                            özel ilk 3 ay %15’e varan indirime sahip olacaksınız. Tüm tarifeleri
                                            incelemek için <a className="red-a">tıklayınız</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="genel"  className={toggleState === 4 ? "tabcontent  active-tabcontent" : "tabcontent"}>

                    <div className="hide--sm">
                        <div className="tab-sss-item">
                            <div className="heading heading--4">44444Vodafone’un dijital kanallarından Yanımda veya
                                Vodafone.com.tr başvuru yaptığımda herhangi bir kurye ya da başvuru ücredi öder miyim?
                            </div>
                            <p>
                                Hayır, dijitalden yaptığınız başvurular tamamen ücretsizdir; ayrıca hattınız adresinize
                                ücretsiz teslim edilir. Vergiler hakkında detaylı bilgi almak için lütfen <a
                                 className="red-a">tıklayınız</a>.
                            </p>
                        </div>
                        <div className="tab-sss-item">
                            <div className="heading heading--4">Teslimatım ne kadar sürede gerçekleşir?</div>
                            <p>
                                Sitemizde belirtilen ilçelerden birinde oturuyorsanız 24 saat içinde, başka bir ilçede
                                ikamet ediyorsanız ise 2-4 gün içerisinde hattınızı size teslim edeceğiz.
                            </p>
                        </div>
                        <div className="tab-sss-item">
                            <div className="heading heading--4">Evraklarımı nasıl teslim alacağım?
                            </div>
                            <p>
                                Hattınıza dair evraklar, hattın teslimatını gerçekleştirecek kurye elemanı tarafından
                                getirilecektir. Hattınızı teslim aldığınızda evrakları imzalayarak işlemlerinizi kolayca
                                tamamlayabilirsiniz.
                            </p>
                        </div>
                        <div className="tab-sss-item">
                            <div className="heading heading--4">Online’a Özel Avantajlar nelerdir?
                            </div>
                            <p>
                                Vodafone’un dijital kanallarından yaptığınız başvurularda birçok tarifeye özel ilk 3 ay
                                %15’e varan indirime sahip olacaksınız. Tüm tarifeleri incelemek için <a
                                 target="_blank" className="red-a">tıklayınız</a>.
                            </p>
                        </div>
                        <div className="tab-sss-item">
                            <div className="heading heading--4">Tıkla Gel Al nedir?
                            </div>
                            <p>
                                Başvurunuz sırasında Tıkla Gel Al yöntemini seçerek, SIM kartınızı dilediğiniz herhangi
                                bir Vodafone Mağazasından hızlıca teslim alabilirsiniz. Mağazaya gittiğinizde
                                işleminizin tamamlanabilmesi için size gönderilen bilgilendirme SMS'inde yer alan
                                başvuru numaranızı ya da TC kimlik numaranızı mağaza çalışanına vermeniz yeterlidir.
                                Başvurunuzun geçerlilik süresi 10 gündür, İlk 3 gün içerisinde dilediğiniz mağazamızı
                                ziyaret ederek sim kartınızı teslim alabilirsiniz. 3 günün sonunda hattınız adresinize
                                teslim edilmek üzere kuryeye yönlendirilecektir. Size en yakın Vodafone Mağazalarını
                                incelemek için <a target="_blank" className="red-a">tıklayınız</a>.
                            </p>
                        </div>
                    </div>

                    <div className="hide--md hide--lg">
                        <div className="sss-block">
                            <div className="sss-item">
                                <a className="accordion-vf">
                                    4444Vodafone’un dijital kanallarından başvuru yaptığımda herhangi bir kurye ya da
                                    başvuru ücredi öder miyim?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum libero
                                            in tristique feugiat. Maecenas eget pretium quam. Sed varius justo in urna
                                            interdum venenatis. Maecenas sed viverra velit. Aliquam varius auctor urna
                                            id efficitur. <strong>Morbi in volutpat diam,</strong> vitae condimentum
                                            arcu. Nam vehicula, diam at tristique blandit, nibh tortor pharetra arcu,
                                            sed pulvinar lorem nibh quis lacus. Curabitur quis nibh at tortor ultrices
                                            pulvinar sed sit amet justo. Nunc ultricies ligula vitae sagittis tempor.
                                            Proin vestibulum nibh facilisis ex posuere molestie. Ut convallis, urna eu
                                            pellentesque tincidunt, urna ex ornare purus, eget molestie metus lacus in
                                            nisi In hac habitasse platea dictumst. Nullam malesuada sem ac ante
                                            imperdiet, sed porttitor turpis laoreet. Aliquam sem mi, pharetra sit amet
                                            ultricies sed, convallis vel quam. <strong>Proin nibh leo, commodo in
                                            </strong> fringilla in, egestas eget est. Pellentesque nec ipsum posuere,
                                            faucibus risus in, bibendum orci. Nullam rutrum non est in rhoncus. Sed
                                            pulvinar quis sapien iaculis volutpat. Nullam mollis, quam ut hendrerit
                                            sodales, eros diam luctus magna, eu sagittis arcu augue sit amet purus.
                                            Nulla felis nibh, semper at massa quis, sagittis porttitor libero.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="sss-item">
                                <a className="accordion-vf">
                                    Teslimatım ne kadar sürede gerçekleşir?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum libero
                                            in tristique feugiat. Maecenas eget pretium quam. Sed varius justo in urna
                                            interdum venenatis. Maecenas sed viverra velit. Aliquam varius auctor urna
                                            id efficitur. <strong>Morbi in volutpat diam,</strong> vitae condimentum
                                            arcu. Nam vehicula, diam at tristique blandit, nibh tortor pharetra arcu,
                                            sed pulvinar lorem nibh quis lacus. Curabitur quis nibh at tortor ultrices
                                            pulvinar sed sit amet justo. Nunc ultricies ligula vitae sagittis tempor.
                                            Proin vestibulum nibh facilisis ex posuere molestie. Ut convallis, urna eu
                                            pellentesque tincidunt, urna ex ornare purus, eget molestie metus lacus in
                                            nisi In hac habitasse platea dictumst. Nullam malesuada sem ac ante
                                            imperdiet, sed porttitor turpis laoreet. Aliquam sem mi, pharetra sit amet
                                            ultricies sed, convallis vel quam. <strong>Proin nibh leo, commodo in
                                            </strong> fringilla in, egestas eget est. Pellentesque nec ipsum posuere,
                                            faucibus risus in, bibendum orci. Nullam rutrum non est in rhoncus. Sed
                                            pulvinar quis sapien iaculis volutpat. Nullam mollis, quam ut hendrerit
                                            sodales, eros diam luctus magna, eu sagittis arcu augue sit amet purus.
                                            Nulla felis nibh, semper at massa quis, sagittis porttitor libero.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="sss-item">
                                <a className="accordion-vf">
                                    Evraklarımı nasıl teslim alacağım?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum libero
                                            in tristique feugiat. Maecenas eget pretium quam. Sed varius justo in urna
                                            interdum venenatis. Maecenas sed viverra velit. Aliquam varius auctor urna
                                            id efficitur. <strong>Morbi in volutpat diam,</strong> vitae condimentum
                                            arcu. Nam vehicula, diam at tristique blandit, nibh tortor pharetra arcu,
                                            sed pulvinar lorem nibh quis lacus. Curabitur quis nibh at tortor ultrices
                                            pulvinar sed sit amet justo. Nunc ultricies ligula vitae sagittis tempor.
                                            Proin vestibulum nibh facilisis ex posuere molestie. Ut convallis, urna eu
                                            pellentesque tincidunt, urna ex ornare purus, eget molestie metus lacus in
                                            nisi In hac habitasse platea dictumst. Nullam malesuada sem ac ante
                                            imperdiet, sed porttitor turpis laoreet. Aliquam sem mi, pharetra sit amet
                                            ultricies sed, convallis vel quam. <strong>Proin nibh leo, commodo in
                                            </strong> fringilla in, egestas eget est. Pellentesque nec ipsum posuere,
                                            faucibus risus in, bibendum orci. Nullam rutrum non est in rhoncus. Sed
                                            pulvinar quis sapien iaculis volutpat. Nullam mollis, quam ut hendrerit
                                            sodales, eros diam luctus magna, eu sagittis arcu augue sit amet purus.
                                            Nulla felis nibh, semper at massa quis, sagittis porttitor libero.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="sss-item">
                                <a className="accordion-vf">
                                    Tıkla Gel Al nedir?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum libero
                                            in tristique feugiat. Maecenas eget pretium quam. Sed varius justo in urna
                                            interdum venenatis. Maecenas sed viverra velit. Aliquam varius auctor urna
                                            id efficitur. <strong>Morbi in volutpat diam,</strong> vitae condimentum
                                            arcu. Nam vehicula, diam at tristique blandit, nibh tortor pharetra arcu,
                                            sed pulvinar lorem nibh quis lacus. Curabitur quis nibh at tortor ultrices
                                            pulvinar sed sit amet justo. Nunc ultricies ligula vitae sagittis tempor.
                                            Proin vestibulum nibh facilisis ex posuere molestie. Ut convallis, urna eu
                                            pellentesque tincidunt, urna ex ornare purus, eget molestie metus lacus in
                                            nisi In hac habitasse platea dictumst. Nullam malesuada sem ac ante
                                            imperdiet, sed porttitor turpis laoreet. Aliquam sem mi, pharetra sit amet
                                            ultricies sed, convallis vel quam. <strong>Proin nibh leo, commodo in
                                            </strong> fringilla in, egestas eget est. Pellentesque nec ipsum posuere,
                                            faucibus risus in, bibendum orci. Nullam rutrum non est in rhoncus. Sed
                                            pulvinar quis sapien iaculis volutpat. Nullam mollis, quam ut hendrerit
                                            sodales, eros diam luctus magna, eu sagittis arcu augue sit amet purus.
                                            Nulla felis nibh, semper at massa quis, sagittis porttitor libero.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sss-item">
                                <a className="accordion-vf">
                                    Online’a özel avantajlar nelerdir?
                                    <img src="https://cms.vodafone.com.tr/static/img/content/21-11/10/ic-chevron-right-red.png"
                                        alt=""/>
                                </a>
                                <div className="panel">
                                    <div className="panel-content">
                                        <p>
                                            Vodafone’un dijital kanallarından yaptığınız başvurularda birçok tarifeye
                                            özel ilk 3 ay %15’e varan indirime sahip olacaksınız. Tüm tarifeleri
                                            incelemek için <a className="red-a">tıklayınız</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Script id="accordion-js" strategy="lazyOnload">
                {`
                var acc = document.getElementsByClassName("accordion-vf");
                var i;
                for (i = 0; i < acc.length; i++) {
                    acc[i].addEventListener("click", function () {
                        this.classList.toggle("active");
                        var panel = this.nextElementSibling;
                        if (panel.style.maxHeight) {
                            panel.style.maxHeight = null;
                        } else {
                            panel.style.maxHeight = panel.scrollHeight + "px";
                        }
                    });
                }
                `}
            </Script>
        </div>
        
    )
}

export default Sss