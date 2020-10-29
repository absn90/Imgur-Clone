import React, { Component } from 'react';
import './Myapp.css';
import Header from './Header';
import Imagelist from './Imagelist';




class Myapp extends Component {
    constructor()
    {
        super();
        this.state={
            name : "WELCOME TO MY IMGUR APP"
        }
    }
    
    render() 
    {
        const imagearrobj =
            [
                {
                    name: "Ganpati Bappa",
                    path: "https://i.pinimg.com/originals/6d/67/7f/6d677fa4defce86df06871a0e084a2c7.gif"
                },
                {
                    name: "Annimated Bappa",
                    path: "https://i.makeagif.com/media/8-25-2017/koo84d.gif"
                },
                {
                    name: "Ganesha",
                    path: "https://media1.giphy.com/media/QaYPURllIvKOqyZePd/giphy.gif"
                },
                {
                    name: "Vinayak",
                    path: "https://media3.giphy.com/media/gMdb1obKtWb3q/giphy.webp?cid=ecf05e47qm1c19dta6d7e4891wfae5tn4en4pg7hengctavc&rid=giphy.webp"
                },
                {
                    name: "Mangalmurti",
                    path: "https://media.tenor.com/images/a34669dec2a20b4bb894df22ffca7ffe/tenor.gif"
                },
                {
                    name: "Siddhivinayak",
                    path: "https://media.tenor.com/images/25611fba24e6886121b9a3c4292e5d5d/tenor.gif"
                },
                {
                    name: "LalbagCha Raja",
                    path: "https://i.gifer.com/EXzJ.gif"
                },
                {
                    name: "Vignaharta",
                    path: "https://1.bp.blogspot.com/-A6P6__aFP7I/XWujXf-08lI/AAAAAAAA7_g/_a50NWXEjbQ8L0o5EsU1VF-81ihEaeBSACLcBGAs/s1600/Lalbaugcha%2BRaja%2B2019%2Bplanet.gif"
                },
                {
                    name: "Vighnesh",
                    path: "https://media2.giphy.com/media/rjwOfLzQLNA5i/giphy.gif"
                },
                {
                    name: "Ganpati Bappa Morya",
                    path: "https://i.pinimg.com/originals/3a/3b/1d/3a3b1db74a532011b4bf4cccde11c35a.gif"
                },
                {
                    name: "Ganpati Bappa Morya",
                    path: "https://i.pinimg.com/originals/e9/b5/4d/e9b54de9ebd6db008a0e3a008c43db35.gif"
                },
                {
                    name: "Ganpati Bappa Morya",
                    path: "https://media1.tenor.com/images/ae2803ba8062132584e2cd8ba128b7ae/tenor.gif?itemid=8766965"
                },
                {
                    name: "Ganpati Bappa Morya",
                    path: "https://lh3.ggpht.com/-F3Lg_xm47js/V6a6ebLnOsI/AAAAAAAAQBw/Ji6tm9PneMkZ7--IeF4dBC_SFlWFrZzcgCLQB/w500-h371-p-rw/svg.gif"
                },
                {
                    name: "Ganpati Bappa Morya",
                    path: "https://i.pinimg.com/originals/37/68/6a/37686a4d49c9d39807bd1f48305a3038.gif"
                },
                {
                    name: "Ganpati Bappa Morya",
                    path: "https://thumbs.gfycat.com/AdvancedBlandAmericanredsquirrel-max-1mb.gif"
                },
                {
                    name: "Ganpati Bappa Morya",
                    path: "https://i.gifer.com/7Ysx.gif"
                }
            ]

        const arraycard = imagearrobj.map((imagecard, i) => {
            return <Imagelist key={i} name={imagearrobj[i].name}
                path={imagearrobj[i].path} />
        })

        return (
            <div className="myapp">
                <Header />
        <h1 className="welcome">{this.state.name}</h1>
                {arraycard}
            </div>
        );

    }
}
export default Myapp;