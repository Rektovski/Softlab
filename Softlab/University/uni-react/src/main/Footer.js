import PageLinksForFooter from "./PageLinksForFooter";
import LastTextOfFooter from "./LastTextOfFooter";
import image from './images/gtu-bg.webp';
import FooterWithoutImg from './style/footerCss/FooterWithoutImg.css';
import FooterImg from './style/footerCss/FooterImg.css';

export default function Footer() {
    return (
        <>
            <div
                className={'footer_head'}
                style={FooterWithoutImg}>
                <PageLinksForFooter/>
                <LastTextOfFooter/>
            </div>
            {/* todo Make this foto on background with above components and make it responsive*/}
            {/*<img className={'footer_end'} style={FooterImg} src={image} alt={'footerCss background foto'}/>*/}
        </>
    );
}