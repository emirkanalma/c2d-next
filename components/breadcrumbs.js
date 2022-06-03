import Image from 'next/image'

function Breadcrumbs() {
    return (
        <nav class="breadcrumbs">
            <div class="spring">
                <ol class="breadcrumbs__list hide--sm hide--md">

                    <li class="breadcrumbs__item">
                        <a href="/" class="breadcrumbs__crumb  breadcrumbs__crumb--first">Ana Sayfa</a>
                        <Image src="https://cms.vodafone.com.tr/static/img/content/21-11/10/icon-right.png" layout="fill"/>
                    </li>
                    <li class="breadcrumbs__item">
                        <a href="/" class="breadcrumbs__crumb">Tarife ve Ek paketler</a>
                        <Image src="https://cms.vodafone.com.tr/static/img/content/21-11/10/icon-right.png"/>
                    </li>

                    <li class="breadcrumbs__item">
                        <span class="breadcrumbs__crumb breadcrumbs__crumb--current">Vodafone'lu ol</span>
                    </li>

                </ol>
                <span class="hide--lg">
                    <a href="javascript:;" class="breadcrumbs__crumb  breadcrumbs__crumb--first">
                        <Image src="https://cms.vodafone.com.tr/static/img/content/21-11/10/icon-left.png"/>
                        Ana Sayfa
                    </a>
                </span>
            </div>
        </nav>
    )
} 

export default Breadcrumbs