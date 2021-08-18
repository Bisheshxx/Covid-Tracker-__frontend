import {logout, log, Component} from 'react'
import './header.css'

class Header extends Component {
    logout = () => log(
        localStorage.removeItem('token'),
        localStorage.removeItem('id'),
        window.location.href = '/'
    )
    render() {
        if (localStorage.getItem('token')) {
            var menu =
                <div class="bloc l-bloc none" id="bloc-0">
                    <div class="container bloc-sm none-lg">
                        <div class="row">
                            <div class="col">
                                <nav class="navbar navbar-light row navbar-expand-md" role="navigation">
                                    <a class="navbar-brand" href="/"><img src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/216791868_5766928153379044_7873052256259565595_n.png?_nc_cat=110&ccb=1-4&_nc_sid=730e14&_nc_ohc=4Tg60pfiLBwAX8Z3tD8&_nc_ht=scontent.fktm8-1.fna&oh=077b2c5292ded1daf862f4584fa13085&oe=6119F53A" alt="logo" /></a>
                                    <button id="nav-toggle" type="button" class="ml-auto ui-navbar-toggler navbar-toggler border-0 p-0" data-toggle="collapse" data-target=".navbar-29362" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse navbar-29362 col-lg-7">
                                        <ul class="site-navigation nav navbar-nav ml-auto">
                                            <li class="nav-item">
                                                <a href="/" class="nav-link">Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="/" class="nav-link">Events</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="/" class="nav-link">FAQ's</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="navbar-content-area col">
                                        <div class="row">
                                            <div class="col">
                                                <a onClick={this.logout} href='/login' class="btn btn-lg btn-blue-green">logout</a>
                                            </div>
                                            <div class="col">
                                                <a href="/register" class="btn btn-lg btn-green-ryb">Donate</a>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
        }
        else {
            var menu =
                <div class="bloc l-bloc none" id="bloc-0">
                    <div class="container bloc-sm none-lg">
                        <div class="row">
                            <div class="col">
                                <nav class="navbar navbar-light row navbar-expand-md" role="navigation">
                                    <a class="navbar-brand" href="/"><img src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/216791868_5766928153379044_7873052256259565595_n.png?_nc_cat=110&ccb=1-4&_nc_sid=730e14&_nc_ohc=4Tg60pfiLBwAX8Z3tD8&_nc_ht=scontent.fktm8-1.fna&oh=077b2c5292ded1daf862f4584fa13085&oe=6119F53A" alt="logo" /></a>
                                    <button id="nav-toggle" type="button" class="ml-auto ui-navbar-toggler navbar-toggler border-0 p-0" data-toggle="collapse" data-target=".navbar-29362" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse navbar-29362 col-lg-7">
                                        <ul class="site-navigation nav navbar-nav ml-auto">
                                            <li class="nav-item">
                                                <a href="/" class="nav-link">Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="/" class="nav-link">Events</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="index.html" class="nav-link">FAQ's</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="navbar-content-area col">
                                        <div class="row">
                                            <div class="col">
                                                <a  href='/login' class="btn btn-lg btn-blue-green">Login</a>
                                            </div>
                                            <div class="col">
                                                <a href="/register" class="btn btn-lg btn-green-ryb">Donate</a>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
        }
        return (
            <div>
                {menu}
            </div>
        )
    }
}

export default Header;
