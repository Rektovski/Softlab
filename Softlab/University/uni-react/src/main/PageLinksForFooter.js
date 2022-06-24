import {Card, Col, Container, Row} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";
import style from './style/footerCss/PageLinksForFooter.css';
import image from './images/logo-footer.webp';
import {FaFacebook, FaFacebookMessenger, FaTwitter} from "react-icons/fa";

export default function PageLinksForFooter() {
    return (
        <Container className={'bg-info rounded mb-1'}>
            <Row className={'g-2 '}>
                <Col sm={12} md={6} lg={3} className={''}>
                    <Card style={{backgroundColor: "rgba(52, 52, 52, 0.4)"}}>
                        <CardHeader className={'text-center'}>
                            <img src={image} alt={'If you see this it means that you cant see the foto.'}/>
                            <div>სტუ სოციალურ ქსელებში:</div>
                        </CardHeader>
                        <Card.Body className={'text-center'}>
                            <a className={'m-2'} href={'https://www.facebook.com/gtu.ge'} target={"_blank"}
                               rel="noreferrer"><FaFacebook size={"30"}/></a>
                            <a className={'m-2'} href={'https://twitter.com/gtuge'} target={"_blank"}
                               rel="noreferrer"><FaTwitter size={"30"}/></a>
                            <a className={'m-2'} href={'https://m.me/gtu.ge'} target={"_blank"}
                               rel="noreferrer"><FaFacebookMessenger size={"30"}/></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={3} className={''}>
                    <Card style={{backgroundColor: "rgba(52, 52, 52, 0.4)"}}>
                        <CardHeader style={{fontSize: 20, textAlign: 'center'}}>
                            სწრაფი ბმულები
                        </CardHeader>
                        <Card.Body>
                            <ul style={style} className={'m-2'}>
                                <li>
                                    <a
                                        href={'http://mail.gtu.ge/'} target={"_blank"} rel="noreferrer">ელ.ფოსტა</a>
                                </li>
                                <li>
                                    <a
                                        href={'https://studinfo.gtu.ge/'} target={"_blank"}
                                        rel="noreferrer">სტუდინფო</a>
                                </li>
                                <li>
                                    <a
                                        href={'http://leqtori.gtu.ge/'} target={"_blank"} rel="noreferrer">სასწავლო
                                        ცხრილები</a>
                                </li>
                                <li>
                                    <a
                                        href={'http://leqtori.gtu.ge/'} target={"_blank"} rel="noreferrer">აკადემიური
                                        მოსწრება</a>
                                </li>
                                <li>
                                    <a
                                        href={'http://testing.gtu.ge/'} target={"_blank"} rel="noreferrer">ტესტირების
                                        ცენტრი</a>
                                </li>
                                <li>
                                    <a
                                        href={'https://publishhouse.gtu.ge/ka/'} target={"_blank"} rel="noreferrer">საგამომცემლო
                                        სახლი</a>
                                </li>
                                <li>
                                    <a
                                        href={'http://cisco.ge/'} target={"_blank"} rel="noreferrer">Cisco-ს
                                        აკადემია</a>
                                </li>
                                <li>
                                    <a
                                        href={'http://store.gtu.ge/'} target={"_blank"} rel="noreferrer">ლიცენზირებული
                                        პროგრამები</a>
                                </li>
                                <li>
                                    <a
                                        href={'http://gtu.ge/search/'} target={"_blank"} rel="noreferrer">ძებნა</a>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={3} className={''}>
                    <Card style={{backgroundColor: "rgba(52, 52, 52, 0.4)"}}>
                        <CardHeader style={{fontSize: 20, textAlign: 'center'}}>
                            სტუ-ს შესახებ
                        </CardHeader>
                        <Card.Body>
                            <ul style={{listStyle: "none"}} className={'m-2'}>
                                <li>
                                    <a
                                        href={'http://mail.gtu.ge/'} target={"_blank"} rel="noreferrer">წესდება</a>
                                </li>
                                <li>
                                    <a
                                        href={'https://studinfo.gtu.ge/'} target={"_blank"} rel="noreferrer">ინსტიტუტები</a>
                                </li>
                                <li>
                                    <a
                                        href={'http://leqtori.gtu.ge/'} target={"_blank"} rel="noreferrer">Erasmus+</a>
                                </li>
                                <li>
                                    <a
                                        href={'http://leqtori.gtu.ge/'} target={"_blank"} rel="noreferrer">მეცნირეული
                                        მიღწევები</a>
                                </li>
                                <li>
                                    <a
                                        href={'http://testing.gtu.ge/'} target={"_blank"} rel="noreferrer">სახელმძღვანელოები</a>
                                </li>
                                <li>
                                    <a
                                        href={'https://publishhouse.gtu.ge/ka/'} target={"_blank"}
                                        rel="noreferrer">ფაკულტეტები</a>
                                </li>
                                <li>
                                    <a
                                        href={'http://cisco.ge/'} target={"_blank"} rel="noreferrer">სტრუქტურა. ერთეულები</a>
                                </li>
                                <li>
                                    <a
                                        href={'http://store.gtu.ge/'} target={"_blank"} rel="noreferrer">საიტის რუკა</a>
                                </li>
                                <li>
                                    <a
                                        href={'http://gtu.ge/search/'} target={"_blank"} rel="noreferrer">სტუ-ს მისია</a>
                                </li>
                                <li>
                                    <a
                                        href={'http://gtu.ge/Contact/'} target={"_blank"} rel="noreferrer">კონტაქტი</a>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={3} className={''}>
                    <Card style={{backgroundColor: "rgba(52, 52, 52, 0.4)", minHeight: 120}} className='h-100'>
                        <CardHeader style={{fontSize: 20, textAlign: 'center'}}>ფაკულტეტები
                        </CardHeader>
                        <Card.Body>
                            <ul style={{listStyle: "none"}} className={'m-2'}>
                                <li>
                                    <a href={'http://construction.gtu.ge/'} target={"_blank"} rel="noreferrer">სამშენებლო
                                        ფაკულტეტი</a>
                                </li>
                                <li>
                                    <a href={'https://gtu.ge/pet'} target={"_blank"} rel="noreferrer">ენერგეტიკის ფაკულტეტი</a>
                                </li>
                                <li>
                                    <a href={'https://gtu.ge/Mining'} target={"_blank"} rel="noreferrer">სამთო-გეოლოგიური
                                        ფაკულტეტი</a>
                                </li>
                                <li>
                                    <a href={'https://gtu.ge/Ctmf'} target={"_blank"} rel="noreferrer">ქიმიური ტექნოლოგიებისა და
                                        მეტალურგიის ფაკულტეტი</a>
                                </li>
                                <li>
                                    <a href={'https://gtu.ge/Stmm'} target={"_blank"} rel="noreferrer">სატრანსპორტო
                                        მანქანათმშენებლობის ფაკულტეტი</a>
                                </li>
                                <li>
                                    <a href={'https://gtu.ge/Arch'} target={"_blank"} rel="noreferrer">არქიტექტურის,
                                        უბრანისტიკისა და დიზაინის ფაკულტეტი</a>
                                </li>
                                <li>
                                    <a href={'http://law.gtu.ge/'} target={"_blank"} rel="noreferrer">სამართლისა და საერთაშორისო
                                        ურთიერთობები ფაკულტეტი</a>
                                </li>
                                <li>
                                    <a href={'http://gtu.ge/bef'} target={"_blank"} rel="noreferrer">ბიზნესტექნოლოგიების
                                        ფაკულტეტი</a>
                                </li>
                                <li>
                                    <a href={'http://social.gtu.ge/'} target={"_blank"} rel="noreferrer">საინჟინრო ეკონომიკის,
                                        მედიატექნოლოგიებისა და სოციალურ
                                        მეცნიერებათა ფაკულტეტი</a>
                                </li>
                                <li>
                                    <a href={'https://gtu.ge/Ims'} target={"_blank"} rel="noreferrer">ინფორმატიკისა და მართვის
                                        სისტემების ფაკულტეტი</a>
                                </li>
                                <li>
                                    <a href={'http://gtu.ge/ids-en'} target={"_blank"} rel="noreferrer">დიზაინის საერთაშორისო
                                        სკოლა</a>
                                </li>
                                <li>
                                    <a href={'https://gtu.ge/Agro'} target={"_blank"} rel="noreferrer">აგრარული მეცნიერებებისა
                                        და ბიოსისტემების ინჟინერინგის
                                        ფაკულტეტი</a>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}