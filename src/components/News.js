import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    articles = 
        [
            {
                "source": {
                    "id": null,
                    "name": "Hipertextual"
                },
                "author": "Uriel Bederman",
                "title": "Por qué tras los números rojos de 2023, las ventas de PC repuntarían en 2024",
                "description": "Las ventas de PC han caído en picad0 en los últimos trimestres. En tal contexto, el 2023 será uno de los peores años en la historia de la categoría. La consultora IDC indicó en un informe reciente que el desplome interanual será el más profundo desde que se l…",
                "url": "http://hipertextual.com/2023/09/ventas-de-pc-analisis",
                "urlToImage": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/09/Ventadecomputadoras1.jpg?fit=1500%2C977&quality=50&strip=all&ssl=1",
                "publishedAt": "2023-09-22T06:00:00Z",
                "content": "Las ventas de PC han caído en picad0 en los últimos trimestres. En tal contexto, el 2023 será uno de los peores años en la historia de la categoría. La consultora IDC indicó en un informe reciente qu… [+12498 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Mastodon.social"
                },
                "author": "John Gruber",
                "title": "iPhone 15 Eve",
                "description": "Attached: 3 images\n\niPhone 15 Eve, Apple Store Walnut Street, 1am: zero campers, a dozen busy staffers.",
                "url": "https://mastodon.social/@gruber/111107250940382401",
                "urlToImage": "https://files.mastodon.social/media_attachments/files/111/107/309/918/967/558/original/4899e827de22647d.jpeg",
                "publishedAt": "2023-09-22T06:24:14Z",
                "content": "1:00am photos outside Apple Store Walnut Street here in Philadelphia (mirrored on Threads). Video killed the radio star; pre-order killed the campouts.\n\nAs good a time as any to remind you that my re… [+103 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Daringfireball.net"
                },
                "author": "John Gruber",
                "title": "★ Craptacular Is More Like It",
                "description": "The Wall Street Journal informs us that Apple silicon was easy, but cellular modems are uniquely difficult.",
                "url": "https://daringfireball.net/2023/09/craptacular_is_more_like_it",
                "urlToImage": "https://daringfireball.net/graphics/df-wide-card.png",
                "publishedAt": "2023-09-22T03:59:00Z",
                "content": "Aaron Tilley and Yang Jie, reporting for The Wall Street Journal under the not-at-all-clickbait-y headline “Inside Apple’s Spectacular Failure to Build a Key Part for Its New iPhones” (News+ link):\n\n… [+14561 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Digital Trends"
                },
                "author": "Trevor Mogg",
                "title": "Check out this old news report of when Apple released the first iPhone",
                "description": "Apple has started delivering the first iPhone 15 devices to customers. This old news report shows the very first iPhone going on sale 16 years ago.",
                "url": "https://www.digitaltrends.com/mobile/old-new-report-shows-first-iphone-launch/",
                "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/09/first-iphone.jpg?resize=1200%2C630&p=1",
                "publishedAt": "2023-09-22T03:10:31Z",
                "content": "The first iPhone 15 customers are already heading to Apple Stores in Australia and Asia to pick up the new device, or having it delivered to their door.\r\nApple’s new handset range comprises the iPhon… [+1989 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "heise online"
                },
                "author": "Frank Schräer",
                "title": "Freitag: Microsoft mit mehr KI-Unterstützung, Surface-Laptops mit mehr Kernen",
                "description": "KI-Boost für Edge & Bing + Windows-Update mit Copilot + Upgrades für Surface + Updates für Apple + Satellit findet Methanlecks + Podcast zu EU-US-Datenverkehr",
                "url": "https://www.heise.de/news/Freitag-Microsoft-mit-mehr-KI-Unterstuetzung-Surface-Laptops-mit-mehr-Kernen-9313453.html",
                "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/0/7/1/8/1/friday-d6fc04bf2f6e1877.webp",
                "publishedAt": "2023-09-22T04:30:00Z",
                "content": "Die Integration Künstlicher Intelligenz in Microsofts Browser Edge und der Suchmaschine Bing wird vertieft. Eigene Bildkreationen sollen schöner sowie passender werden dank neuer Text-zu-Bild-KI und … [+4889 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "heise online"
                },
                "author": "Ben Schwan",
                "title": "Interview mit Keiichi Matsuda: AR als belebte Geisterwelt",
                "description": "Keiichi Matsuda hat in seinem Film Hyper-Reality vor den Gefahren von Augmented Reality gewarnt. Wird seine Vision mit Apples Vision Pro jetzt Wirklichkeit?",
                "url": "https://www.heise.de/hintergrund/Interview-mit-Keiichi-Matsuda-AR-als-belebte-Geisterwelt-9312754.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
                "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/0/6/8/1/6/hyper-reality-7ddb2b05e91c66cd.png",
                "publishedAt": "2023-09-22T06:00:00Z",
                "content": "\"Es gibt eine Tendenz, jede neue Technologie als eine Art Bedrohung oder Gefahr zu sehen. Ich denke, es ist wichtig, wachsam zu sein, wenn es darum geht, inwieweit wir uns diese Technologien zu eigen… [+2744 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "heise online"
                },
                "author": "Stefan Krempl",
                "title": "Telekom: Big-Tech-Kostenbeteiligung ist die CO₂-Abgabe fürs Internet",
                "description": "Da der Datenverkehr der großen US-Plattformen ständig wachse, hält ein Telekom-Lobbyist einen finanziellen Sparanreiz analog zu Klimaschutzbeiträgen für nötig.",
                "url": "https://www.heise.de/news/Telekom-Big-Tech-Kostenbeteiligung-ist-die-CO-Abgabe-fuers-Internet-9313461.html",
                "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/0/7/1/8/5/shutterstock_1172940130-d73ef84e0cfaecc7.jpg",
                "publishedAt": "2023-09-22T04:22:00Z",
                "content": "Inhaltsverzeichnis\r\nDie EU-Kommission liebäugelt mit der Einführung einer Infrastrukturabgabe für große Plattformbetreiber wie Amazon, Apple, Google, Meta, Microsoft und Netflix, um den Netzausbau du… [+5847 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "9to5Mac"
                },
                "author": "Chance Miller",
                "title": "First iPhone 15 pre-orders begin arriving, lines form at Apple Stores around the world",
                "description": "As the clock turns to September 22 around the world, the iPhone 15 and iPhone 15 Pro launch is in full swing. The first pre-orders have started arriving to lucky buyers and lines are forming at Apple Stores around the world. \n\n\n\nApple has also published a new…",
                "url": "https://9to5mac.com/2023/09/21/iphone-15-pre-orders-arriving-apple-stores-lines/",
                "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/F6l3VwBbQAErAtj-2-1.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
                "publishedAt": "2023-09-22T02:47:39Z",
                "content": "As the clock turns to September 22 around the world, the iPhone 15 and iPhone 15 Pro launch is in full swing. The first pre-orders have started arriving to lucky buyers and lines are forming at Apple… [+1842 chars]"
            },
    ]
    constructor(){
        super();
        console.log("Hello this is constructor")
        this.state={
            articles :this.articles,
            loading : false
        }
    }
    render() {
        return (
            <div className= "container my-3">
                <h2>Top Headlines</h2>
                <div className='row'>
                <div className='col-md-3'>
                <NewsItems title="myTitle" description="Mydesc" imageURl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAllBMVEX///8Ahd4Agt0Ah94AgN0Aftz///tHk+H///3L4PX6/f6Btun5+vqmyOaGtOlzruFwquaGueKUvONHlNzf4+bk7PCNtuGCsOgEid3T3OVlrecAedvd7fnp8fv69/F5sug2meK61fKkyu5UqOaHvOuZv+yQuutrpeU+jd+71OmdweLt7+7y9/zB0eIukd9Rn+EAc9qr0/Dbh+QlAAADCElEQVR4nO3VYXOqOBQG4OSchIJii1a7QQQR7a0KwvX//7k9Qd29O7fsdqbM7Jf3+eDoIYHXcAhKAQAAAAAAAAAAAAAAAAAAAAAAwL/bJcnm/87w0FT7stxGSj3bbPGlGdF+HfVfduv1RjWHtZhW0UQqla9836a0RGR0pJ7JLILBcfn7j8fltta++ASTD5vNw8jPJ2P1VmpHY2cjhCqJ+XjU+tSHCgfHVX+v45T0S+xDJWTmQaSZnWNm+67Uk6bZ8Dm+Ks+Y5mk6O9e3UJP8fiBs8slfo5pG/TD0NhTKnS6zlnXXjBRqk7G5BGEcxxKKpgeybu5THJwx2vfHpiurivgg68FlPhCqDoOF0WU91kr9ZF3emuWZ2FlinW3kclaTYeNyFWXkNOlW7rKmdCiUNBrRx1ihfE/prNxN+lB6P3Vsz6EsDb+dW6a9yi1r161PpdbdefV5KF5UneROw7FCRdyvQdL427eui0SbeZgQ7YviKh288aFO9SqQlXgr4oFQxhCXaT1Woyu1enESy0zvW8IfcqGw1UbOnbeaIwnllqq/PYONLn9KM13VeKFUkb5p1u3ktiXcQ8kWoRoJdfKhVv8Rys1mMqNsRgylVDCzTKt/hDKyB24kVPp5qM6HakptF7dGDyJm2o0W6urfGFfL/GuoD6Ktbzd2n4U6GPYLqSrN9qR8KBnQaT/Fh/p+pt3PzCWdYUqKRyiahztiOlStlnZ/hJrKPnRt+jmN/AVbJq08Au3qEWonxY2E4rYsyzb6VqhrpjXJXsCn4JnsfaWCeG90X78EudV9KLmo7ntZzHxfkwxws1hF8kMGTJy2B3Xsp1F2GH6JfkF47lrn2u5SqHfnpB9un/WLr66lmrfHzoeK504a+j7ptJfD7nWdFtJ5r61s5XIzj22ntk+v3tP1W6FUsEovl7SW08ap32ka+ZRWLZa+6tt5lS777SlOL/74LVXtJy3745P7AJm+jJvlTT10uS+TN9+n1d8rvz5YcTzSsw8AAAAAAAAAAAAAAAAAAAAAAADwmz8BCfo+5JVOrUsAAAAASUVORK5CYII="/>
                </div>
                <div className='col-md-3'>
                <NewsItems title="myTitle" description="Mydesc"/>
                </div><div className='col-md-3'>
                <NewsItems title="myTitle" description="Mydesc"/>
                </div>
                </div>
            </div>
        )
    }
}

export default News
