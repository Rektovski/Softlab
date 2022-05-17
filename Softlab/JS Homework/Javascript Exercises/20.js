const urls = [
    "https://www.facebook.com",
    "http://google.com",
    "mailto:example@gmail.com",
    "tel:599999999",
    "invalid url",
    "ftp://ftp01.com/html/",
    "http://example.com"
    ];

urls.filter(value => {
    if(value.search("http")>-1)console.log(value);
})

