import Link from "next/link";

function Breadcrumbs() {
  return (
    <nav className="breadcrumbs">
      <div className="spring">
        <ol className="breadcrumbs__list hide--sm hide--md">
          <li className="breadcrumbs__item">
            <Link  href="/">
                <a className="breadcrumbs__crumb  breadcrumbs__crumb--first">
                Ana Sayfa
                </a>
            </Link>
            <img
              src="https://cms.vodafone.com.tr/static/img/content/21-11/10/icon-right.png"
              alt=""
            />
          </li>
          <li className="breadcrumbs__item">
            <Link  href="/">
                <a className="breadcrumbs__crumb">
                Tarife ve Ek paketler
                </a>
            </Link>
            <img
              src="https://cms.vodafone.com.tr/static/img/content/21-11/10/icon-right.png"
              alt=""
            />
          </li>

          <li className="breadcrumbs__item">
            <span className="breadcrumbs__crumb breadcrumbs__crumb--current">
              Vodafone'lu ol
            </span>
          </li>
        </ol>
        <span className="hide--lg">
          <Link href="/">
            <a className="breadcrumbs__crumb  breadcrumbs__crumb--first"
            >
            <img
              src="https://cms.vodafone.com.tr/static/img/content/21-11/10/icon-left.png"
              alt=""
            />
            Ana Sayfa
          </a>
          </Link>
        </span>
      </div>
    </nav>
  );
}

export default Breadcrumbs;
