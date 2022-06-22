import image from './images/gtu-logo.webp';

export default function HeaderImage() {
    return (
        <div className={'bg-dark text-center p-5'}>
            <a href={'http://localhost:3000'}>
                <img src={image}
                     style={{
                         alignItems: "center",
                         width: 568,
                         height: 91,
                     }}
                     alt={"საქართველოს ტექნიკური უნივერსიტეტი"}
                     title={"საქართველოს ტექნიკური უნივერსიტეტი"}
                />
            </a>
        </div>
    );
}